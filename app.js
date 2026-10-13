/**
 * Aaj Kya Banega — Daily Indian Veg Meal Planner PWA
 * Powered and Developed by Opal Luna Labs
 * Copyright © 2026 Opal Luna Labs. All rights reserved.
 */

// Data structures (MEAL_DATABASE, DEFAULT_PREP_ITEMS, PANTRY_ITEMS, WEEKLY_PLAN)
// are loaded cleanly and modularly from recipes.js


// --- 5. APP STATE ---
let state = {
  activeTab: "today",
  currentMealFilter: "all",
  currentWeeklyDay: -1,
  currentPantryCat: "all",
  currentBfIndex: 0,
  currentLnIndex: 0,
  currentDnIndex: 0,
  prepList: JSON.parse(localStorage.getItem("akb_prep_list")) || DEFAULT_PREP_ITEMS.map(i => ({ ...i, isDone: false })),
  selectedPantryIds: new Set(["p_1", "p_2", "p_3"]),
  selectedPlan: "annual",
  cookingHistory: JSON.parse(localStorage.getItem("akb_cooking_history")) || []
};

// --- 6. TAB SWITCHER ---
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add("active");

  const targetNav = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (targetNav) targetNav.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabId === "pantry") renderPantry();
  if (tabId === "prep") renderPrepList();
  if (tabId === "weekly") renderWeekly();
  if (tabId === "history") renderCookingHistory();
}

// --- 7. HELPER: DISH PLACEHOLDER IMAGE GENERATOR ---
function getPlaceholderImage(dishName, slotKey = "lunch") {
  const bgColors = {
    breakfast: "#FFF3E0",
    lunch: "#E8F5E9",
    dinner: "#EDE7F6"
  };
  const textColors = {
    breakfast: "#E65100",
    lunch: "#2E7D32",
    dinner: "#4527A0"
  };
  const emojis = {
    breakfast: "🥞",
    lunch: "🍛",
    dinner: "🍲"
  };
  const bg = bgColors[slotKey] || "#FBE9E7";
  const fg = textColors[slotKey] || "#BF360C";
  const icon = emojis[slotKey] || "🥘";
  const safeDishName = (dishName || "Indian Veg Delicacy").replace(/[<>&"]/g, "");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
    <defs>
      <linearGradient id="bgGrad_${slotKey}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}" />
        <stop offset="100%" stop-color="#FFFFFF" />
      </linearGradient>
    </defs>
    <rect width="600" height="340" fill="url(#bgGrad_${slotKey})" rx="16" />
    <circle cx="300" cy="120" r="56" fill="${bg}" stroke="${fg}" stroke-width="2.5" stroke-dasharray="6 4" />
    <text x="300" y="138" font-size="44" text-anchor="middle">${icon}</text>
    <text x="300" y="224" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="22" fill="${fg}" text-anchor="middle">${safeDishName}</text>
    <text x="300" y="256" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#777" text-anchor="middle">100% Shuddh Shakahari • Opal Luna Labs</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// --- 8. HELPER: DIFFICULTY & NUTRITION GENERATORS ---
function getMealNutrition(meal) {
  if (meal && meal.nutrition) return meal.nutrition;
  if (meal && meal.tags && meal.tags.includes("High Protein")) {
    return { calories: 380, protein: "18g", fiber: "8g" };
  }
  if (meal && meal.tags && meal.tags.includes("Low Calorie")) {
    return { calories: 240, protein: "7g", fiber: "5g" };
  }
  return { calories: 320, protein: "11g", fiber: "6g" };
}

function getDifficultyBadge(difficulty) {
  const d = (difficulty || "Easy").toLowerCase();
  let cls = "diff-easy";
  let label = "Easy";

  if (d.includes("super")) {
    cls = "diff-super-easy";
    label = "Super Easy";
  } else if (d.includes("mod") || d.includes("med")) {
    cls = "diff-medium";
    label = "Medium";
  } else if (d.includes("hard") || d.includes("adv")) {
    cls = "diff-hard";
    label = "Hard";
  }

  return `<span class="difficulty-badge ${cls}" title="Difficulty: ${label}"><span class="diff-dot"></span><span class="diff-text">${label}</span></span>`;
}

// --- 8.5 COOKING CONFIRMATION & 3-DAY COOLDOWN HELPERS ---
function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getFormattedDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dateObj = new Date(y, m - 1, d);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[dateObj.getDay()]}, ${d} ${months[m - 1]}`;
}

function isMealCookedToday(mealId, slotKey) {
  const today = getTodayDateString();
  return state.cookingHistory.some(h => h.date === today && h.mealId === mealId && h.slot === slotKey);
}

function isMealInCooldown(mealId, cooldownDays = 3) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const cooldownMs = cooldownDays * 24 * 60 * 60 * 1000;

  return state.cookingHistory.some(entry => {
    if (entry.mealId !== mealId) return false;
    const [y, m, d] = entry.date.split("-").map(Number);
    const entryTime = new Date(y, m - 1, d).getTime();
    return (todayStart - entryTime) <= cooldownMs;
  });
}

function toggleMealCooked(slotKey, mealId) {
  const today = getTodayDateString();
  const existingIdx = state.cookingHistory.findIndex(h => h.date === today && h.mealId === mealId && h.slot === slotKey);

  const meal = [...MEAL_DATABASE.breakfast, ...MEAL_DATABASE.lunch, ...MEAL_DATABASE.dinner].find(m => m.id === mealId);
  const dishName = meal ? meal.name : "Meal";

  if (existingIdx >= 0) {
    // Undo cooked status
    state.cookingHistory.splice(existingIdx, 1);
    localStorage.setItem("akb_cooking_history", JSON.stringify(state.cookingHistory));
    showInAppToast("↩️ Cooked Status Removed", `${dishName} marked as not cooked.`);
  } else {
    // Mark as cooked
    const newEntry = {
      id: `cook_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      mealId: mealId,
      name: meal ? meal.name : "Unknown Dish",
      hindiTitle: meal ? meal.hindiTitle : "",
      slot: slotKey,
      date: today,
      timestamp: Date.now()
    };
    state.cookingHistory.unshift(newEntry);
    localStorage.setItem("akb_cooking_history", JSON.stringify(state.cookingHistory));
    showInAppToast("✅ आज बनाया!", `${dishName} logged in your Kitchen Diary! (Protected by 3-day cooldown)`);
  }

  renderTodayMeals();
  if (state.activeTab === "history") {
    renderCookingHistory();
  }
}

// --- 9. RENDER TODAY'S MEAL CARDS (CLEAN & USER-FRIENDLY) ---
function renderMealCard(slotKey, meal, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = `meal-card slot-${slotKey}`;

  const slotLabels = {
    breakfast: { name: "BREAKFAST", hindi: "सुबह का नाश्ता", icon: "🌅", cls: "breakfast" },
    lunch: { name: "LUNCH", hindi: "दोपहर का खाना", icon: "☀️", cls: "lunch" },
    dinner: { name: "DINNER", hindi: "रात का खाना", icon: "🌙", cls: "dinner" }
  };

  const slot = slotLabels[slotKey];
  const primaryTag = (meal.tags && meal.tags.length > 0) ? meal.tags[0] : "Pure Veg";
  const nutri = meal.nutrition || getMealNutrition(meal);
  const isCooked = isMealCookedToday(meal.id, slotKey);
  const inCooldown = !isCooked && isMealInCooldown(meal.id, 3);

  const prepAlertHtml = meal.advancePrepNeeded && !meal.advancePrepNeeded.startsWith("None")
    ? `<div class="prep-compact-pill">🌙 <strong>रात की तैयारी:</strong> ${meal.advancePrepNeeded}</div>`
    : "";

  const cardDetailsId = `details_${slotKey}`;

  const cookedBannerHtml = isCooked ? `
    <div class="cooked-badge-ribbon">
      <span>✅ <strong>आज बनाया (Cooked Today)</strong> • Logged in Diary</span>
      <button class="btn-undo-link" onclick="toggleMealCooked('${slotKey}', '${meal.id}')">Undo</button>
    </div>
  ` : (inCooldown ? `
    <div class="cooked-badge-ribbon" style="background:#EFF6FF; border-color:#BFDBFE; color:#1D4ED8;">
      <span>🛡️ <strong>Recently Cooked</strong> (Protected by 3-day cooldown)</span>
    </div>
  ` : "");

  container.innerHTML = `
    <!-- Slot Header, Difficulty Badge & Quick Swap -->
    <div class="meal-card-top">
      <div class="slot-pill ${slot.cls}">
        <span class="slot-icon">${slot.icon}</span>
        <strong>${slot.name}</strong> • <span>${slot.hindi}</span>
      </div>
      <div class="card-top-right">
        ${getDifficultyBadge(meal.difficulty)}
        <button class="btn-swap-clean" onclick="swapMeal('${slotKey}')" title="Swap with another dish (skips dishes cooked in last 3 days)">
          🔄 बदलें (Swap)
        </button>
      </div>
    </div>
    
    ${cookedBannerHtml}

    <!-- Dish Title & Subtitle -->
    <div class="dish-title-block">
      <h3 class="dish-name">${meal.name}</h3>
      <p class="dish-hindi">${meal.hindiTitle}</p>
    </div>
    
    <!-- Quick Minimal Metrics Row -->
    <div class="dish-meta-row-clean">
      <span class="meta-tag">⏱️ ${meal.cookTimeMinutes} mins</span>
      <span class="meta-tag accent">🌿 ${primaryTag}</span>
      <span class="meta-tag" title="Approximate Nutrition per Serving">🔥 ~${nutri.calories} kcal • 💪 ${nutri.protein}</span>
    </div>

    ${prepAlertHtml}

    <!-- Collapsible Quick Staples & Chef Advice Toggle -->
    <div class="card-accordion-wrap">
      <button class="accordion-toggle-btn" onclick="toggleCardDetails('${cardDetailsId}', this)">
        <span>💡 सामग्री व सलाह (Ingredients & Tip)</span>
        <span class="chevron">▼</span>
      </button>
      <div class="card-accordion-content hidden" id="${cardDetailsId}">
        <p class="advice-text"><strong>रसोई सलाह:</strong> ${meal.healthAdvice}</p>
        <div class="ingredients-list-compact">
          ${meal.ingredients.map(i => `<span class="ing-pill">${i}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Action Buttons Row -->
    <div class="card-actions-clean">
      <button class="btn-primary-recipe" onclick="openRecipeModal('${slotKey}')">
        📖 पूरी विधि (View Recipe)
      </button>
      <button class="btn-cooked-action ${isCooked ? 'is-cooked' : ''}" onclick="toggleMealCooked('${slotKey}', '${meal.id}')" title="Confirm that you cooked this meal">
        ${isCooked ? '✓ बनाया ✅' : 'आज बनाया?'}
      </button>
      <button class="btn-share-icon" onclick="shareMeal('${slotKey}')" title="Share with Cook / Family">
        📤
      </button>
    </div>
  `;
}

function renderTodayMeals() {
  const bf = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
  const ln = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
  const dn = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];

  renderMealCard("breakfast", bf, "breakfastCard");
  renderMealCard("lunch", ln, "lunchCard");
  renderMealCard("dinner", dn, "dinnerCard");

  // Re-apply active meal slot filter
  if (state.currentMealFilter) {
    filterMeals(state.currentMealFilter);
  }
}

function filterMeals(filter) {
  state.currentMealFilter = filter;
  const chips = document.querySelectorAll(".segmented-meal-filter .filter-chip");
  chips.forEach(c => {
    if (c.dataset.filter === filter) c.classList.add("active");
    else c.classList.remove("active");
  });

  const bfCard = document.getElementById("breakfastCard");
  const lnCard = document.getElementById("lunchCard");
  const dnCard = document.getElementById("dinnerCard");

  if (filter === "all") {
    if (bfCard) bfCard.style.display = "block";
    if (lnCard) lnCard.style.display = "block";
    if (dnCard) dnCard.style.display = "block";
  } else if (filter === "breakfast") {
    if (bfCard) bfCard.style.display = "block";
    if (lnCard) lnCard.style.display = "none";
    if (dnCard) dnCard.style.display = "none";
  } else if (filter === "lunch") {
    if (bfCard) bfCard.style.display = "none";
    if (lnCard) lnCard.style.display = "block";
    if (dnCard) dnCard.style.display = "none";
  } else if (filter === "dinner") {
    if (bfCard) bfCard.style.display = "none";
    if (lnCard) lnCard.style.display = "none";
    if (dnCard) dnCard.style.display = "block";
  }
}

function toggleCardDetails(id, btn) {
  const content = document.getElementById(id);
  if (!content) return;
  const isHidden = content.classList.contains("hidden");
  if (isHidden) {
    content.classList.remove("hidden");
    if (btn) btn.classList.add("open");
  } else {
    content.classList.add("hidden");
    if (btn) btn.classList.remove("open");
  }
}

function getNonRepeatedMealIndex(slotKey, currentIndex) {
  const list = MEAL_DATABASE[slotKey];
  if (!list || list.length === 0) return 0;
  if (list.length === 1) return 0;

  // Find candidate indices that are NOT in the 3-day cooldown
  const availableIndices = [];
  for (let i = 0; i < list.length; i++) {
    if (i !== currentIndex && !isMealInCooldown(list[i].id, 3)) {
      availableIndices.push(i);
    }
  }

  // If all or almost all dishes are in cooldown, fallback to any other dish
  if (availableIndices.length > 0) {
    return availableIndices[Math.floor(Math.random() * availableIndices.length)];
  }

  // Fallback: just cycle to next
  return (currentIndex + 1) % list.length;
}

function swapMeal(slotKey) {
  if (slotKey === "breakfast") {
    state.currentBfIndex = getNonRepeatedMealIndex("breakfast", state.currentBfIndex % MEAL_DATABASE.breakfast.length);
  }
  if (slotKey === "lunch") {
    state.currentLnIndex = getNonRepeatedMealIndex("lunch", state.currentLnIndex % MEAL_DATABASE.lunch.length);
  }
  if (slotKey === "dinner") {
    state.currentDnIndex = getNonRepeatedMealIndex("dinner", state.currentDnIndex % MEAL_DATABASE.dinner.length);
  }
  renderTodayMeals();
}

function replanAll() {
  state.currentBfIndex = getNonRepeatedMealIndex("breakfast", state.currentBfIndex % MEAL_DATABASE.breakfast.length);
  state.currentLnIndex = getNonRepeatedMealIndex("lunch", state.currentLnIndex % MEAL_DATABASE.lunch.length);
  state.currentDnIndex = getNonRepeatedMealIndex("dinner", state.currentDnIndex % MEAL_DATABASE.dinner.length);
  renderTodayMeals();
  showInAppToast("🔄 Menu Re-planned", "Refreshed meals while skipping dishes cooked in the last 3 days!");
}

// --- 10. KAL KI TAIYARI (ADVANCE PREP) RENDERER ---
function renderPrepList() {
  const container = document.getElementById("prepChecklistContainer");
  if (!container) return;

  const total = state.prepList.length;
  const doneCount = state.prepList.filter(i => i.isDone).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const statusBadge = document.getElementById("prepStatusBadge");
  const pctText = document.getElementById("prepPercentageText");
  const barFill = document.getElementById("prepProgressBar");

  if (statusBadge) statusBadge.textContent = `${doneCount}/${total} Done`;
  if (pctText) pctText.textContent = `${pct}% Ready for Tomorrow`;
  if (barFill) barFill.style.width = `${pct}%`;

  if (state.prepList.length === 0) {
    container.innerHTML = `
      <div class="prep-empty-state">
        <span class="prep-empty-icon">✨</span>
        <h4>All prep tasks cleared for tonight!</h4>
        <p>You can add a custom note below or restore standard preparations.</p>
        <button class="btn-restore-prep" onclick="resetDefaultPrepTasks()">
          🔄 Restore Default Tasks
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.prepList.map((item, index) => `
    <div class="prep-item-clean ${item.isDone ? 'done' : ''}">
      <div class="prep-item-click-area" onclick="togglePrepItem(${index})">
        <div class="prep-check-bubble ${item.isDone ? 'checked' : ''}">
          ${item.isDone ? '✓' : ''}
        </div>
        <div class="prep-text-col">
          <h4 class="prep-item-title">${item.title}</h4>
          <span class="prep-timing-badge">⏰ ${item.idealTime} • ${item.targetMeal}</span>
          <p class="prep-item-desc">${item.instructions}</p>
          <span class="prep-item-why">💡 ${item.whyItMatters}</span>
        </div>
      </div>
      <button class="btn-remove-prep-task" onclick="removePrepItem(${index})" title="Remove this task" aria-label="Remove task">
        ✕
      </button>
    </div>
  `).join("");
}

function removePrepItem(index) {
  if (state.prepList[index]) {
    const removedTitle = state.prepList[index].title;
    state.prepList.splice(index, 1);
    localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
    renderPrepList();
    showInAppToast("🗑️ Task Removed", `"${removedTitle}" removed from prep list.`);
  }
}

function resetDefaultPrepTasks() {
  state.prepList = DEFAULT_PREP_ITEMS.map(i => ({ ...i, isDone: false }));
  localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
  renderPrepList();
  showInAppToast("🔄 Restored", "Default advance preparation tasks restored.");
}

function togglePrepItem(index) {
  if (state.prepList[index]) {
    state.prepList[index].isDone = !state.prepList[index].isDone;
    localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
    renderPrepList();
  }
}

function addCustomPrep() {
  const input = document.getElementById("customPrepInput");
  if (!input || !input.value.trim()) return;

  state.prepList.push({
    id: `custom_${Date.now()}`,
    title: input.value.trim(),
    targetMeal: "Custom Household Note",
    idealTime: "Tonight before sleep",
    instructions: "Household kitchen reminder.",
    whyItMatters: "Keeps morning cooking smooth and avoids last-minute rush.",
    isDone: false
  });

  input.value = "";
  localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
  renderPrepList();
  showInAppToast("➕ Task Added", "New reminder added to tonight's prep list.");
}

// --- 11. PANTRY SOLVER RENDERER ---
function filterPantryCategory(cat) {
  state.currentPantryCat = cat;
  const btns = document.querySelectorAll(".pantry-category-tabs .pantry-cat-btn");
  btns.forEach(b => {
    if ((cat === 'all' && b.textContent.includes('All')) ||
        (cat === 'veggie' && b.textContent.includes('Veggies')) ||
        (cat === 'grain' && b.textContent.includes('Grains')) ||
        (cat === 'dairy' && b.textContent.includes('Dairy'))) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  renderPantry();
}

function renderPantry() {
  const chipsContainer = document.getElementById("pantryChipsContainer");
  const resultsContainer = document.getElementById("pantryResultsContainer");
  if (!chipsContainer || !resultsContainer) return;

  const filteredItems = state.currentPantryCat === "all" 
    ? PANTRY_ITEMS 
    : PANTRY_ITEMS.filter(i => i.cat === state.currentPantryCat);

  chipsContainer.innerHTML = filteredItems.map(item => {
    const isSelected = state.selectedPantryIds.has(item.id);
    return `
      <button class="pantry-chip-btn ${isSelected ? 'selected' : ''}" onclick="togglePantryItem('${item.id}')">
        <span class="chk">${isSelected ? '✓' : '+'}</span> ${item.name}
      </button>
    `;
  }).join("");

  const selectedStapleWords = PANTRY_ITEMS
    .filter(i => state.selectedPantryIds.has(i.id))
    .map(i => i.name.toLowerCase().split(" ")[0].replace(/[()]/g, ""));

  const allDishes = [...MEAL_DATABASE.breakfast, ...MEAL_DATABASE.lunch, ...MEAL_DATABASE.dinner];

  const matched = selectedStapleWords.length === 0 ? [] : allDishes.filter(dish => {
    return selectedStapleWords.some(w => 
      dish.name.toLowerCase().includes(w) ||
      dish.hindiTitle.toLowerCase().includes(w) ||
      dish.ingredients.some(ing => ing.toLowerCase().includes(w))
    );
  });

  const heading = document.getElementById("matchedDishesHeading");
  if (heading) heading.textContent = `Matching Meals (${matched.length} Available)`;

  if (matched.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-state-card">
        <span class="empty-icon">🥬</span>
        <p>Tap 1 or 2 kitchen ingredients above to discover matching recipes.</p>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = matched.map(meal => {
      const nutri = meal.nutrition || getMealNutrition(meal);
      const safeDishName = meal.name.replace(/'/g, "\\'");
      return `
        <div class="pantry-result-card" onclick="openRecipeModal('${safeDishName}')" title="Tap to view recipe steps and nutritional details">
          <div class="pantry-card-header">
            <div class="pantry-card-title-group">
              <h4 class="pantry-dish-title">${meal.name}</h4>
              <p class="pantry-dish-hindi">${meal.hindiTitle}</p>
            </div>
            <div class="pantry-card-badges">
              ${getDifficultyBadge(meal.difficulty)}
              <span class="pantry-time-pill">⏱️ ${meal.cookTimeMinutes}m</span>
            </div>
          </div>
          <p class="pantry-advice">${meal.healthAdvice}</p>
          <div class="pantry-card-footer">
            <span class="pantry-nutri-preview">🔥 ~${nutri.calories} kcal • 💪 ${nutri.protein} Protein • 🌾 ${nutri.fiber} Fiber</span>
            <span class="pantry-view-btn">विधि देखें ➔</span>
          </div>
        </div>
      `;
    }).join("");
  }
}

function togglePantryItem(id) {
  if (state.selectedPantryIds.has(id)) {
    state.selectedPantryIds.delete(id);
  } else {
    state.selectedPantryIds.add(id);
  }
  renderPantry();
}

function clearPantry() {
  state.selectedPantryIds.clear();
  renderPantry();
}

// --- 12. WEEKLY PLAN RENDERER ---
function selectWeeklyDay(dayIndex) {
  state.currentWeeklyDay = dayIndex;
  const dayTabs = document.querySelectorAll(".week-days-grid .day-tab");
  const viewAllBtn = document.querySelector(".view-all-week-btn");

  dayTabs.forEach(t => {
    if (parseInt(t.dataset.day, 10) === dayIndex) t.classList.add("active");
    else t.classList.remove("active");
  });

  if (viewAllBtn) {
    if (dayIndex === -1) viewAllBtn.classList.add("active");
    else viewAllBtn.classList.remove("active");
  }

  renderWeekly();
}

function renderWeekly() {
  const container = document.getElementById("weeklyPlanContainer");
  if (!container) return;

  const daysToRender = state.currentWeeklyDay === -1 
    ? WEEKLY_PLAN.map((d, i) => ({ ...d, originalIdx: i }))
    : [ { ...WEEKLY_PLAN[state.currentWeeklyDay], originalIdx: state.currentWeeklyDay } ];

  container.innerHTML = daysToRender.map(day => {
    const bf = MEAL_DATABASE.breakfast[day.bf % MEAL_DATABASE.breakfast.length];
    const ln = MEAL_DATABASE.lunch[day.ln % MEAL_DATABASE.lunch.length];
    const dn = MEAL_DATABASE.dinner[day.dn % MEAL_DATABASE.dinner.length];

    return `
      <div class="day-plan-card-clean">
        <div class="day-header-clean">
          <div>
            <span class="day-title">${day.day}</span>
            <span class="day-hindi">${day.hindi}</span>
          </div>
        </div>

        <div class="day-triad-grid">
          <div class="triad-col">
            <span class="triad-label">🌅 Breakfast</span>
            <strong class="triad-dish">${bf.name}</strong>
          </div>
          <div class="triad-col">
            <span class="triad-label">☀️ Lunch</span>
            <strong class="triad-dish">${ln.name}</strong>
          </div>
          <div class="triad-col">
            <span class="triad-label">🌙 Dinner</span>
            <strong class="triad-dish">${dn.name}</strong>
          </div>
        </div>

        <div class="day-prep-footer">
          🌙 <strong>कल की तैयारी:</strong> ${day.prep}
        </div>
      </div>
    `;
  }).join("");
}

function toggleDayDetails(idx) {
  const el = document.getElementById(`dayDetails_${idx}`);
  const arrow = document.getElementById(`dayArrow_${idx}`);
  if (el) {
    el.classList.toggle("expanded");
    if (arrow) arrow.textContent = el.classList.contains("expanded") ? "▲" : "▼";
  }
}

// --- 11. RECIPE STEPS MODAL ---
function openRecipeModal(target, slotHint) {
  let meal = null;
  let slotLabel = "RECIPE";

  if (target === "breakfast" || target === "lunch" || target === "dinner") {
    if (target === "breakfast") meal = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
    if (target === "lunch") meal = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
    if (target === "dinner") meal = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];
    slotLabel = target.toUpperCase();
  } else if (typeof target === "string") {
    const all = [...MEAL_DATABASE.breakfast, ...MEAL_DATABASE.lunch, ...MEAL_DATABASE.dinner];
    meal = all.find(m => m.name === target || m.id === target);
    if (meal) {
      if (MEAL_DATABASE.breakfast.some(m => m.id === meal.id)) slotLabel = "BREAKFAST";
      else if (MEAL_DATABASE.lunch.some(m => m.id === meal.id)) slotLabel = "LUNCH";
      else if (MEAL_DATABASE.dinner.some(m => m.id === meal.id)) slotLabel = "DINNER";
      else slotLabel = slotHint ? slotHint.toUpperCase() : "RECIPE";
    }
  } else if (typeof target === "object" && target !== null) {
    meal = target;
    slotLabel = slotHint ? slotHint.toUpperCase() : "RECIPE";
  }

  if (!meal) return;

  state.currentModalMeal = meal;
  state.currentModalSlot = slotLabel;

  document.getElementById("modalMealSlot").textContent = slotLabel;
  document.getElementById("modalDishTitle").textContent = meal.name;
  document.getElementById("modalDishHindi").textContent = meal.hindiTitle;
  document.getElementById("modalCookTime").textContent = `⏱️ ${meal.cookTimeMinutes} mins`;
  const modalDiff = document.getElementById("modalDifficulty");
  if (modalDiff) {
    modalDiff.innerHTML = getDifficultyBadge(meal.difficulty);
  }

  // Populate Nutritional Highlights
  const nutri = meal.nutrition || getMealNutrition(meal);
  const calEl = document.getElementById("modalNutriCalories");
  const proEl = document.getElementById("modalNutriProtein");
  const fibEl = document.getElementById("modalNutriFiber");
  if (calEl) calEl.textContent = `${nutri.calories} kcal`;
  if (proEl) proEl.textContent = nutri.protein;
  if (fibEl) fibEl.textContent = nutri.fiber;

  document.getElementById("modalAdvice").textContent = meal.healthAdvice;
  document.getElementById("modalIngredientsList").innerHTML = meal.ingredients.map(i => `<li>${i}</li>`).join("");
  document.getElementById("modalStepsList").innerHTML = meal.steps.map(s => `<li>${s}</li>`).join("");

  document.getElementById("recipeModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
}

// --- 12. SHARING & MONETIZATION ACTIONS ---
function shareMeal(slotKey) {
  let meal;
  let slotLabel = slotKey ? slotKey.toUpperCase() : "RECIPE";
  if (slotKey === "breakfast") meal = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
  else if (slotKey === "lunch") meal = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
  else if (slotKey === "dinner") meal = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];
  else if (state.currentModalMeal) {
    meal = state.currentModalMeal;
    slotLabel = state.currentModalSlot || "RECIPE";
  }
  if (!meal) return;

  const nutri = meal.nutrition || getMealNutrition(meal);
  const text = `🍛 *Kya Banaye? (${slotLabel})*\n*${meal.name}* (${meal.hindiTitle})\n⏱️ समय: ${meal.cookTimeMinutes} मिनट\n🔥 पोषण: ~${nutri.calories} kcal • प्रोटीन: ${nutri.protein} • फाइबर: ${nutri.fiber}\n💡 स्वास्थ्य सलाह: ${meal.healthAdvice}\n📝 सामग्री: ${meal.ingredients.join(", ")}\n\n– *Kya Banaye • Opal Luna Labs*`;

  if (navigator.share) {
    navigator.share({ title: meal.name, text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert("Recipe advice copied to clipboard! Share it with your cook or family.");
  }
}

function shareWeeklyPlan() {
  let text = "📅 *साप्ताहिक भोजन योजना (7-Day Indian Veg Menu)*\n\n";
  WEEKLY_PLAN.forEach(d => {
    const bf = MEAL_DATABASE.breakfast[d.bf % MEAL_DATABASE.breakfast.length];
    const ln = MEAL_DATABASE.lunch[d.ln % MEAL_DATABASE.lunch.length];
    const dn = MEAL_DATABASE.dinner[d.dn % MEAL_DATABASE.dinner.length];
    text += `🔹 *${d.day}*\n   🍳 ${bf.name}\n   🍛 ${ln.name}\n   🍲 ${dn.name}\n   🌙 तैयारी: ${d.prep}\n\n`;
  });
  text += "– *Powered & Developed by Opal Luna Labs*";

  if (navigator.share) {
    navigator.share({ title: "Weekly Menu", text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert("Weekly plan copied to clipboard!");
  }
}



// --- 13. BROWSER PUSH NOTIFICATION SYSTEM (8:30 PM KAL KI TAIYARI) ---
let notificationTimer = null;
let notificationInterval = null;

function playGentleChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    // Gentle relaxing harmonic chime: C5 (523.25Hz) -> E5 (659.25Hz) -> G5 (783.99Hz)
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.16);
      gain.gain.setValueAtTime(0, now + idx * 0.16);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.16 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.16 + 0.38);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.16);
      osc.stop(now + idx * 0.16 + 0.42);
    });
  } catch (err) {
    console.warn("Chime playback notice:", err);
  }
}

function showInAppToast(title, message) {
  const toast = document.getElementById("inAppNotificationToast") || document.getElementById("inAppToast");
  const titleEl = document.getElementById("toastTitle");
  const bodyEl = document.getElementById("toastBody");
  if (!toast) return;

  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.textContent = message;

  toast.classList.remove("hidden");
  toast.classList.add("visible");

  // Auto-hide after 5 seconds
  setTimeout(() => {
    closeToast();
  }, 5000);
}

function dismissToast() {
  closeToast();
}

function closeToast() {
  const toast = document.getElementById("inAppNotificationToast") || document.getElementById("inAppToast");
  if (toast) {
    toast.classList.remove("visible");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }
}

// --- 13.5 KITCHEN DIARY (रसोई डायरी) RENDERER ---
function renderCookingHistory() {
  const container = document.getElementById("historyTimelineContainer");
  const countEl = document.getElementById("historyTotalCount");
  if (!container) return;

  if (countEl) {
    countEl.textContent = state.cookingHistory.length;
  }

  if (state.cookingHistory.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="empty-icon">📖</div>
        <h4>आपकी रसोई डायरी अभी खाली है</h4>
        <p>जब आप आज का खाना पकाएं, तो मेनू कार्ड पर <strong>"आज बनाया?"</strong> बटन दबाएं।</p>
        <p style="margin-top:6px; font-size:11px; color:#0284C7;">वह व्यंजन यहाँ तारीख सहित दर्ज हो जाएगा और अगले 3 दिन तक दोबारा रिपीट नहीं होगा!</p>
      </div>
    `;
    return;
  }

  // Group history items by date
  const groups = {};
  state.cookingHistory.forEach(item => {
    if (!groups[item.date]) {
      groups[item.date] = [];
    }
    groups[item.date].push(item);
  });

  const sortedDates = Object.keys(groups).sort((a, b) => b.localeCompare(a));
  const todayStr = getTodayDateString();

  const slotBadgeClasses = {
    breakfast: { label: "नाश्ता (Breakfast)", cls: "breakfast" },
    lunch: { label: "दोपहर (Lunch)", cls: "lunch" },
    dinner: { label: "रात (Dinner)", cls: "dinner" }
  };

  container.innerHTML = sortedDates.map(dateKey => {
    const isToday = dateKey === todayStr;
    const items = groups[dateKey];
    const formatted = getFormattedDate(dateKey);

    return `
      <div class="history-date-group">
        <div class="history-date-header">
          <span class="history-date-title">📅 ${formatted}</span>
          <span class="history-relative-pill" style="${isToday ? 'background:#DCFCE7; color:#15803D;' : ''}">
            ${isToday ? 'आज (Today)' : dateKey}
          </span>
        </div>
        <div class="history-meal-list">
          ${items.map(item => {
            const slotInfo = slotBadgeClasses[item.slot] || { label: item.slot, cls: "lunch" };
            return `
              <div class="history-item-row">
                <div class="history-item-left">
                  <span class="history-item-badge ${slotInfo.cls}">${slotInfo.label}</span>
                  <div class="history-item-details">
                    <span class="history-dish-name">${item.name}</span>
                    <span class="history-dish-hindi">${item.hindiTitle}</span>
                  </div>
                </div>
                <div class="history-item-right">
                  <button class="btn-history-recipe" onclick="openRecipeModal('${item.mealId}', '${item.slot}')" title="View recipe steps">
                    📖 विधि
                  </button>
                  <button class="btn-history-delete" onclick="removeCookingHistoryEntry('${item.id}')" title="Remove from history">
                    ✕
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function removeCookingHistoryEntry(entryId) {
  const idx = state.cookingHistory.findIndex(h => h.id === entryId);
  if (idx >= 0) {
    const removed = state.cookingHistory[idx];
    state.cookingHistory.splice(idx, 1);
    localStorage.setItem("akb_cooking_history", JSON.stringify(state.cookingHistory));
    renderCookingHistory();
    renderTodayMeals();
    showInAppToast("🗑️ Log Removed", `${removed.name} removed from Kitchen Diary.`);
  }
}

function clearCookingHistory() {
  if (state.cookingHistory.length === 0) return;
  if (confirm("Are you sure you want to clear your entire cooking history? This will also reset the 3-day repetition cooldown.")) {
    state.cookingHistory = [];
    localStorage.removeItem("akb_cooking_history");
    renderCookingHistory();
    renderTodayMeals();
    showInAppToast("✨ History Cleared", "Kitchen Diary cleared and cooldowns reset.");
  }
}

function trigger830PMReminder(isTest = false) {
  playGentleChime();

  const title = isTest 
    ? "🔔 Test Alert: 8:30 PM — कल की तैयारी Reminder" 
    : "🌙 8:30 PM Reminder — कल की तैयारी (Kal Ki Taiyari)";
  const body = isTest 
    ? "Gentle reminder active! You will be alerted daily at 8:30 PM to soak pulses and set dahi." 
    : "समय हो गया है: कल की तैयारी! Did you soak your pulses or set the dahi for tomorrow's meals?";

  // 1. Show In-App Banner
  showInAppToast(title, body);

  // 2. Trigger System/Browser Notification
  if ("Notification" in window && Notification.permission === "granted") {
    const notifOptions = {
      body: body,
      icon: "icon-192.png",
      badge: "icon-192.png",
      tag: "kal-ki-taiyari-reminder",
      renotify: true,
      silent: false
    };

    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification(title, notifOptions);
      }).catch(() => {
        try { new Notification(title, notifOptions); } catch (e) {}
      });
    } else {
      try { new Notification(title, notifOptions); } catch (e) {}
    }
  }

  // Record notification timestamp for today if not test
  if (!isTest) {
    const todayStr = new Date().toDateString();
    localStorage.setItem("akb_last_notified_date", todayStr);
  }
}

function schedule830PMNotification() {
  if (notificationTimer) clearTimeout(notificationTimer);
  if (notificationInterval) clearInterval(notificationInterval);

  const enabled = localStorage.getItem("akb_reminder_enabled") !== "false";
  const toggle = document.getElementById("prepReminderToggle");
  if (toggle) toggle.checked = enabled;

  const desc = document.getElementById("reminderStatusDesc");
  if (desc) {
    desc.textContent = enabled 
      ? "Daily chime active at 8:30 PM to soak pulses & set dahi for tomorrow."
      : "Reminder paused. Tap toggle to activate daily 8:30 PM reminders.";
  }

  if (!enabled) return;

  function checkAndNotify() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const todayStr = now.toDateString();
    const lastNotified = localStorage.getItem("akb_last_notified_date");

    // Check if it's 8:30 PM (20:30) or later today and hasn't notified yet
    if ((hours > 20 || (hours === 20 && minutes >= 30)) && lastNotified !== todayStr) {
      trigger830PMReminder(false);
    }
  }

  // Calculate milliseconds until next 8:30 PM
  const now = new Date();
  const next830 = new Date();
  next830.setHours(20, 30, 0, 0);
  if (now.getTime() >= next830.getTime()) {
    next830.setDate(next830.getDate() + 1);
  }
  const msUntilNext = next830.getTime() - now.getTime();

  notificationTimer = setTimeout(() => {
    checkAndNotify();
    schedule830PMNotification(); // Re-schedule for next day
  }, msUntilNext);

  // Background interval check every 30 seconds for clock/sleep resiliency
  notificationInterval = setInterval(checkAndNotify, 30000);
}

// --- 14. INITIALIZATION & LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  const datePill = document.getElementById("currentDatePill");
  if (datePill) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();
    datePill.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} • आज का मेनू`;
  }

  renderTodayMeals();

  // Main actions
  document.getElementById("replanAllBtn")?.addEventListener("click", replanAll);
  document.getElementById("clearPantryBtn")?.addEventListener("click", clearPantry);
  document.getElementById("addCustomPrepBtn")?.addEventListener("click", addCustomPrep);
  document.getElementById("shareWeeklyBtn")?.addEventListener("click", shareWeeklyPlan);

  // Modal events
  document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
  document.getElementById("closeModalBtn2")?.addEventListener("click", closeModal);
  document.getElementById("shareRecipeModalBtn")?.addEventListener("click", () => {
    if (state.currentModalMeal) {
      shareMeal();
    }
  });
  document.getElementById("recipeModal")?.addEventListener("click", (e) => {
    if (e.target.id === "recipeModal") closeModal();
  });

  // Reminder toggle & push notification setup
  const reminderToggle = document.getElementById("prepReminderToggle");
  reminderToggle?.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    localStorage.setItem("akb_reminder_enabled", isChecked ? "true" : "false");

    if (isChecked) {
      if ("Notification" in window) {
        if (Notification.permission === "default") {
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
              schedule830PMNotification();
              showInAppToast("🔔 Notifications Enabled", "Daily 8:30 PM reminder active to prepare for tomorrow's meals.");
            } else {
              alert("Notification permission was denied. You can enable it in your browser site settings.");
            }
          });
        } else if (Notification.permission === "granted") {
          schedule830PMNotification();
          showInAppToast("🔔 Reminder Active", "Gentle reminder scheduled for 8:30 PM tonight.");
        } else {
          alert("Browser notifications are blocked. Please allow notifications in site settings to receive reminders.");
        }
      } else {
        schedule830PMNotification();
      }
    } else {
      schedule830PMNotification();
      showInAppToast("🔕 Reminder Paused", "Daily 8:30 PM notification has been paused.");
    }
  });

  // Test Notification Button
  document.getElementById("testNotificationBtn")?.addEventListener("click", () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then(() => {
        trigger830PMReminder(true);
      });
    } else {
      trigger830PMReminder(true);
    }
  });

  // Schedule notification on startup
  schedule830PMNotification();

  // Register Service Worker for PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
