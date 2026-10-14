/**
 * Kya Banaye — Daily Indian Veg Meal Planner PWA
 * Powered and Developed by Opal Luna Labs
 * Copyright © 2026 Opal Luna Labs. All rights reserved.
 */

// --- 1. LOCALIZATION & TRANSLATIONS (Strictly 1 Language per Screen) ---
const I18N = {
  hi: {
    appTitle: "क्या बनाएं",
    appSubtitle: "शुद्ध शाकाहारी रसोई",
    langBtn: "English",
    dateMenuSuffix: "आज का मेनू",
    replanBtn: "सभी व्यंजन बदलें",
    filterAll: "✨ सभी (3)",
    filterBf: "🌅 नाश्ता",
    filterLn: "☀️ दोपहर",
    filterDn: "🌙 रात",
    scrollCue: "दोपहर और रात के भोजन के लिए नीचे स्क्रॉल करें",
    slotBf: "सुबह का नाश्ता",
    slotLn: "दोपहर का खाना",
    slotDn: "रात का खाना",
    swapBtn: "🔄 बदलें",
    diffEasy: "आसान",
    diffSuperEasy: "बहुत आसान",
    diffMed: "मध्यम",
    diffHard: "कठिन",
    cookedTodayRibbon: "✅ आज बनाया • डायरी में दर्ज",
    undo: "वापस लें",
    cooldownRibbon: "🛡️ हाल ही में बनाया गया (३ दिन का लॉक)",
    minutes: "मिनट",
    prepPrefix: "रात की तैयारी:",
    accordionToggle: "💡 सामग्री व रसोई सलाह",
    advicePrefix: "रसोई सलाह:",
    viewRecipe: "📖 पूरी विधि देखें",
    cookedQuestion: "आज बनाया?",
    cookedDone: "✓ बना लिया",
    prepViewTitle: "कल की तैयारी",
    prepSubtitle: "रात के १० मिनट सुबह की भागदौड़ से ३० मिनट बचाते हैं।",
    doneSuffix: "पूर्ण",
    readinessLabel: "रसोई की तैयारी स्थिति",
    readySuffix: "तैयार",
    reminderTitle: "८:३० बजे रात का रिमाइंडर",
    reminderDescOn: "दाल भिगोने और दही जमाने के लिए रोज़ाना सूचना सक्रिय।",
    reminderDescOff: "रिमाइंडर बंद है। सक्रिय करने के लिए टॉगल चालू करें।",
    testAlert: "जांचें",
    tonightTasks: "आज रात के कार्य",
    prepCleared: "आज रात के सभी कार्य पूरे हो चुके हैं!",
    restoreDefault: "🔄 सामान्य कार्य पुनः लाएं",
    customPrepPlaceholder: "नया रिमाइंडर जोड़ें (उदा. मटर डीफ्रॉस्ट करें)...",
    addBtn: "+ जोड़ें",
    weeklyTitle: "साप्ताहिक भोजन योजना",
    weeklySubtitle: "दाल, हरी सब्ज़ियां और संतुलित पोषण का ७-दिवसीय चक्र।",
    shareBtn: "📤 शेयर करें",
    viewAllWeek: "📅 पूरे सप्ताह का मेनू देखें",
    historyTitle: "रसोई डायरी",
    clearBtn: "साफ करें",
    historySubtitle: "बनाए गए व्यंजनों का हिसाब ताकि एक ही खाना बार-बार न बने।",
    mealsCooked: "व्यंजन पकाए",
    antiRepeatNotice: "🛡️ <strong>३-दिन का रिपीट लॉक:</strong> बना हुआ व्यंजन ३ दिन तक मेनू में नहीं आएगा!",
    historyEmpty: "आपकी रसोई डायरी अभी खाली है",
    historyEmptySub: "जब आप खाना पकाएं, तो मेनू कार्ड पर \"आज बनाया?\" बटन दबाएं।",
    historyEmptyNote: "वह व्यंजन यहाँ तारीख सहित दर्ज हो जाएगा और अगले ३ दिन तक मेनू में रिपीट नहीं होगा!",
    todayText: "आज",
    recipeBtn: "📖 विधि",
    navToday: "मेनू",
    navPrep: "कल की तैयारी",
    navWeekly: "साप्ताहिक",
    navHistory: "रसोई डायरी",
    navAbout: "परिचय",
    modalCalories: "कैलोरी",
    modalProtein: "प्रोटीन",
    modalFiber: "फाइबर",
    modalNutriHeading: "🥗 पोषण मूल्य",
    modalNutriSubtext: "प्रति मानक सर्विंग",
    modalHeadingAdvice: "💡 रसोई सलाह:",
    modalHeadingIngredients: "सामग्री:",
    modalHeadingSteps: "बनाने की सरल विधि:",
    modalDone: "हो गया",
    toastCookedAdded: "✅ आज बनाया!",
    toastCookedAddedDesc: "आपकी रसोई डायरी में दर्ज किया गया (३-दिन का रिपीट लॉक सक्रिय)।",
    toastCookedRemoved: "↩️ स्थिति हटाई गई",
    toastCookedRemovedDesc: "व्यंजन को बिना बना चिह्नित किया गया।",
    toastReplan: "🔄 मेनू बदला गया",
    toastReplanDesc: "पिछले ३ दिनों में बने व्यंजनों को छोड़कर नए व्यंजन चुने गए!",
    toastTaskRemoved: "🗑️ कार्य हटाया गया",
    toastRestored: "🔄 पुनः स्थापित",
    toastRestoredDesc: "रात की तैयारी के सामान्य कार्य पुनः आ गए।",
    toastLangChanged: "🌐 भाषा बदली गई",
    toastLangDescHi: "ऐप अब हिन्दी में प्रदर्शित हो रहा है।",
    toastLangDescEn: "App is now displayed in English."
  },
  en: {
    appTitle: "Kya Banaye",
    appSubtitle: "Pure Vegetarian Kitchen",
    langBtn: "हिन्दी",
    dateMenuSuffix: "Today's Menu",
    replanBtn: "SHUFFLE ALL MEALS",
    filterAll: "✨ All (3)",
    filterBf: "🌅 Breakfast",
    filterLn: "☀️ Lunch",
    filterDn: "🌙 Dinner",
    scrollCue: "Scroll down for Lunch & Dinner",
    slotBf: "BREAKFAST",
    slotLn: "LUNCH",
    slotDn: "DINNER",
    swapBtn: "🔄 Swap",
    diffEasy: "Easy",
    diffSuperEasy: "Super Easy",
    diffMed: "Medium",
    diffHard: "Hard",
    cookedTodayRibbon: "✅ Cooked Today • Logged in Diary",
    undo: "Undo",
    cooldownRibbon: "🛡️ Recently Cooked (3-day cooldown lock)",
    minutes: "mins",
    prepPrefix: "Advance Prep:",
    accordionToggle: "💡 Ingredients & Cooking Tip",
    advicePrefix: "Cook's Advice:",
    viewRecipe: "📖 View Recipe",
    cookedQuestion: "Cooked Today?",
    cookedDone: "✓ Cooked",
    prepViewTitle: "Advance Preparation",
    prepSubtitle: "10 minutes tonight saves 30 minutes of morning rush.",
    doneSuffix: "Done",
    readinessLabel: "Tonight's Kitchen Readiness",
    readySuffix: "Ready",
    reminderTitle: "8:30 PM Nightly Reminder",
    reminderDescOn: "Daily chime active at 8:30 PM to soak pulses & set dahi for tomorrow.",
    reminderDescOff: "Reminder paused. Tap toggle to activate daily 8:30 PM reminders.",
    testAlert: "Test Alert",
    tonightTasks: "Tonight's Tasks",
    prepCleared: "All prep tasks cleared for tonight!",
    restoreDefault: "🔄 Restore Default Tasks",
    customPrepPlaceholder: "Add custom reminder (e.g. defrost peas)...",
    addBtn: "+ Add",
    weeklyTitle: "Weekly Meal Plan",
    weeklySubtitle: "Balanced 7-day rotation of dals, vegetables, and high protein.",
    shareBtn: "📤 Share",
    viewAllWeek: "📅 View Full Week Plan",
    historyTitle: "Kitchen Diary",
    clearBtn: "Clear",
    historySubtitle: "Track confirmed meals by date to avoid repetitive menus.",
    mealsCooked: "Meals Cooked",
    antiRepeatNotice: "🛡️ <strong>3-Day Anti-Repeat Cooldown:</strong> Confirmed dishes won't reappear in menu shuffles for 3 days!",
    historyEmpty: "Your Kitchen Diary is currently empty",
    historyEmptySub: "When you cook a meal, tap the \"Cooked Today?\" button on the menu card.",
    historyEmptyNote: "That dish will be recorded with date and protected by a 3-day repetition cooldown!",
    todayText: "Today",
    recipeBtn: "📖 Recipe",
    navToday: "Today's Menu",
    navPrep: "Advance Prep",
    navWeekly: "Weekly Plan",
    navHistory: "Kitchen Diary",
    navAbout: "About Us",
    modalCalories: "Calories",
    modalProtein: "Protein",
    modalFiber: "Fiber",
    modalNutriHeading: "🥗 Nutritional Highlights",
    modalNutriSubtext: "Approx. per standard serving",
    modalHeadingAdvice: "💡 Cook's Health Advice:",
    modalHeadingIngredients: "Ingredients:",
    modalHeadingSteps: "Step-by-Step Cooking:",
    modalDone: "Done",
    toastCookedAdded: "✅ Cooked Today!",
    toastCookedAddedDesc: "Logged in Kitchen Diary (Protected by 3-day cooldown).",
    toastCookedRemoved: "↩️ Cooked Status Removed",
    toastCookedRemovedDesc: "Marked as not cooked.",
    toastReplan: "🔄 Menu Refreshed",
    toastReplanDesc: "Refreshed meals while skipping dishes cooked in last 3 days!",
    toastTaskRemoved: "🗑️ Task Removed",
    toastRestored: "🔄 Restored",
    toastRestoredDesc: "Default advance preparation tasks restored.",
    toastLangChanged: "🌐 Language Switched",
    toastLangDescHi: "App is now displayed in Hindi.",
    toastLangDescEn: "App is now displayed in English."
  }
};

// --- 2. APP STATE ---
let state = {
  lang: localStorage.getItem("akb_lang") || "hi", // Default Hindi
  activeTab: "today",
  currentMealFilter: "all",
  currentWeeklyDay: -1,
  currentBfIndex: 0,
  currentLnIndex: 0,
  currentDnIndex: 0,
  prepList: JSON.parse(localStorage.getItem("akb_prep_list")) || DEFAULT_PREP_ITEMS.map(i => ({ ...i, isDone: false })),
  cookingHistory: JSON.parse(localStorage.getItem("akb_cooking_history")) || [],
  currentModalMeal: null,
  currentModalSlot: null
};

// Helper to get translated string
function t(key) {
  const currentLang = state.lang || "hi";
  if (I18N[currentLang] && I18N[currentLang][key] !== undefined) {
    return I18N[currentLang][key];
  }
  return I18N.hi[key] || key;
}

// --- 3. LANGUAGE SWITCHER ---
function toggleLanguage() {
  state.lang = state.lang === "hi" ? "en" : "hi";
  localStorage.setItem("akb_lang", state.lang);
  document.documentElement.lang = state.lang;

  // Update static UI text
  applyStaticLanguageStrings();

  // Re-render dynamic components
  renderTodayMeals();
  renderPrepList();
  renderWeekly();
  renderCookingHistory();
  renderAbout();

  // Update recipe modal if open
  if (state.currentModalMeal && !document.getElementById("recipeModal")?.classList.contains("hidden")) {
    openRecipeModal(state.currentModalMeal, state.currentModalSlot);
  }

  const desc = state.lang === "hi" ? t("toastLangDescHi") : t("toastLangDescEn");
  showInAppToast(t("toastLangChanged"), desc);
}

function applyStaticLanguageStrings() {
  const lang = state.lang;
  document.documentElement.lang = lang;

  // Header
  const titleEl = document.getElementById("appHeaderTitle");
  const subEl = document.getElementById("appHeaderSubtitle");
  const langBtnText = document.getElementById("langBtnText");
  if (titleEl) titleEl.textContent = t("appTitle");
  if (subEl) subEl.textContent = t("appSubtitle");
  if (langBtnText) langBtnText.textContent = t("langBtn");

  // View 1 (Today's Menu)
  const replanText = document.getElementById("replanBtnText");
  if (replanText) replanText.textContent = t("replanBtn");

  const chipAll = document.getElementById("filterChipAll");
  const chipBf = document.getElementById("filterChipBf");
  const chipLn = document.getElementById("filterChipLn");
  const chipDn = document.getElementById("filterChipDn");
  if (chipAll) chipAll.textContent = t("filterAll");
  if (chipBf) chipBf.textContent = t("filterBf");
  if (chipLn) chipLn.textContent = t("filterLn");
  if (chipDn) chipDn.textContent = t("filterDn");

  const scrollCue = document.getElementById("scrollCueText");
  if (scrollCue) scrollCue.textContent = t("scrollCue");

  // Date banner
  updateDateBanner();

  // View 2 (Advance Prep)
  const prepTitle = document.getElementById("prepViewTitle");
  const prepSub = document.getElementById("prepViewSubtitle");
  const readinessLabel = document.getElementById("prepReadinessLabel");
  const remTitle = document.getElementById("reminderCardTitle");
  const remDesc = document.getElementById("reminderStatusDesc");
  const testAlertText = document.getElementById("testAlertBtnText");
  const prepHeading = document.getElementById("prepChecklistHeading");
  const customPrepInput = document.getElementById("customPrepInput");
  const addCustomBtnText = document.getElementById("addCustomBtnText");

  if (prepTitle) prepTitle.textContent = t("prepViewTitle");
  if (prepSub) prepSub.textContent = t("prepSubtitle");
  if (readinessLabel) readinessLabel.textContent = t("readinessLabel");
  if (remTitle) remTitle.textContent = t("reminderTitle");
  if (remDesc) {
    const enabled = localStorage.getItem("akb_reminder_enabled") !== "false";
    remDesc.textContent = enabled ? t("reminderDescOn") : t("reminderDescOff");
  }
  if (testAlertText) testAlertText.textContent = t("testAlert");
  if (prepHeading) prepHeading.textContent = t("tonightTasks");
  if (customPrepInput) customPrepInput.placeholder = t("customPrepPlaceholder");
  if (addCustomBtnText) addCustomBtnText.textContent = t("addBtn");

  // View 3 (Weekly)
  const weeklyTitle = document.getElementById("weeklyViewTitle");
  const weeklySub = document.getElementById("weeklyViewSubtitle");
  const shareWeeklyText = document.getElementById("shareWeeklyBtnText");
  const viewAllWeekText = document.getElementById("viewAllWeekBtnText");

  if (weeklyTitle) weeklyTitle.textContent = t("weeklyTitle");
  if (weeklySub) weeklySub.textContent = t("weeklySubtitle");
  if (shareWeeklyText) shareWeeklyText.textContent = t("shareBtn");
  if (viewAllWeekText) viewAllWeekText.textContent = t("viewAllWeek");

  // Week day labels
  const daysHi = ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"];
  const daysEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayNames = lang === "hi" ? daysHi : daysEn;
  for (let i = 0; i < 7; i++) {
    const tab = document.getElementById(`dayTab${i}`);
    if (tab) tab.textContent = dayNames[i];
  }

  // View 4 (History)
  const histTitle = document.getElementById("historyViewTitle");
  const histSub = document.getElementById("historyViewSubtitle");
  const clearBtnText = document.getElementById("clearHistoryBtnText");
  const statLabel = document.getElementById("historyStatLabel");
  const ruleNotice = document.getElementById("historyRuleNotice");

  if (histTitle) histTitle.textContent = t("historyTitle");
  if (histSub) histSub.textContent = t("historySubtitle");
  if (clearBtnText) clearBtnText.textContent = t("clearBtn");
  if (statLabel) statLabel.textContent = t("mealsCooked");
  if (ruleNotice) ruleNotice.innerHTML = t("antiRepeatNotice");

  // Bottom Nav
  const navToday = document.getElementById("navLabelToday");
  const navPrep = document.getElementById("navLabelPrep");
  const navWeekly = document.getElementById("navLabelWeekly");
  const navHistory = document.getElementById("navLabelHistory");
  const navAbout = document.getElementById("navLabelAbout");

  if (navToday) navToday.textContent = t("navToday");
  if (navPrep) navPrep.textContent = t("navPrep");
  if (navWeekly) navWeekly.textContent = t("navWeekly");
  if (navHistory) navHistory.textContent = t("navHistory");
  if (navAbout) navAbout.textContent = t("navAbout");
}

function updateDateBanner() {
  const datePill = document.getElementById("currentDatePill");
  if (!datePill) return;

  const now = new Date();
  const lang = state.lang;

  if (lang === "hi") {
    const daysHi = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
    const monthsHi = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
    datePill.textContent = `${daysHi[now.getDay()]}, ${now.getDate()} ${monthsHi[now.getMonth()]} • ${t("dateMenuSuffix")}`;
  } else {
    const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    datePill.textContent = `${daysEn[now.getDay()]}, ${now.getDate()} ${monthsEn[now.getMonth()]} • ${t("dateMenuSuffix")}`;
  }
}

// --- 4. TAB SWITCHER ---
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add("active");

  const targetNav = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (targetNav) targetNav.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabId === "today") renderTodayMeals();
  if (tabId === "prep") renderPrepList();
  if (tabId === "weekly") renderWeekly();
  if (tabId === "history") renderCookingHistory();
  if (tabId === "about") renderAbout();
}

// --- 5. DIFFICULTY & NUTRITION HELPERS ---
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
  let label = t("diffEasy");

  if (d.includes("super")) {
    cls = "diff-super-easy";
    label = t("diffSuperEasy");
  } else if (d.includes("mod") || d.includes("med")) {
    cls = "diff-medium";
    label = t("diffMed");
  } else if (d.includes("hard") || d.includes("adv")) {
    cls = "diff-hard";
    label = t("diffHard");
  }

  return `<span class="difficulty-badge ${cls}"><span class="diff-dot"></span><span class="diff-text">${label}</span></span>`;
}

// --- 6. COOKING CONFIRMATION & 3-DAY COOLDOWN ---
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
  const lang = state.lang;

  if (lang === "hi") {
    const daysHi = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
    const monthsHi = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
    return `${daysHi[dateObj.getDay()]}, ${d} ${monthsHi[m - 1]}`;
  } else {
    const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${daysEn[dateObj.getDay()]}, ${d} ${monthsEn[m - 1]}`;
  }
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
  const dishTitle = meal ? (state.lang === "hi" ? meal.hindiTitle : meal.name) : "Meal";

  if (existingIdx >= 0) {
    state.cookingHistory.splice(existingIdx, 1);
    localStorage.setItem("akb_cooking_history", JSON.stringify(state.cookingHistory));
    showInAppToast(t("toastCookedRemoved"), `${dishTitle} — ${t("toastCookedRemovedDesc")}`);
  } else {
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
    showInAppToast(t("toastCookedAdded"), `${dishTitle} — ${t("toastCookedAddedDesc")}`);
  }

  renderTodayMeals();
  if (state.activeTab === "history") {
    renderCookingHistory();
  }
}

// --- 7. RENDER TODAY'S MEAL CARDS (100% PURE SINGLE-LANGUAGE & CENTERED) ---
function renderMealCard(slotKey, meal, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = state.lang;
  container.className = `meal-card slot-${slotKey}`;

  const slotLabels = {
    breakfast: { label: t("slotBf"), icon: "🌅", cls: "breakfast" },
    lunch: { label: t("slotLn"), icon: "☀️", cls: "lunch" },
    dinner: { label: t("slotDn"), icon: "🌙", cls: "dinner" }
  };

  const slot = slotLabels[slotKey];
  const nutri = meal.nutrition || getMealNutrition(meal);
  const isCooked = isMealCookedToday(meal.id, slotKey);
  const inCooldown = !isCooked && isMealInCooldown(meal.id, 3);

  // Single-Language Title: strictly Hindi in 'hi' mode, strictly English in 'en' mode
  const displayTitle = lang === "hi" ? meal.hindiTitle : meal.name;

  // Single-Language Tag:
  const tagMappingHi = {
    "Under 20 Mins": "२० मिनट से कम",
    "Iron Rich": "आयरन से भरपूर",
    "Low Calorie": "कम कैलोरी",
    "High Protein": "उच्च प्रोटीन",
    "Gluten Free": "ग्लूटेन फ्री",
    "Diabetic Friendly": "मधुमेह अनुकूल",
    "High Fiber": "उच्च फाइबर",
    "One-Pot Meal": "सरल भोजन",
    "Gut Friendly": "पेट के लिए उत्तम",
    "Quick 15 Mins": "१५ मिनट में तैयार",
    "Kid Favorite": "बच्चों का पसंदीदा",
    "Pantry Friendly": "सरल सामग्री",
    "Ayurvedic": "आयुर्वेदिक",
    "Travel Friendly": "सफर के लिए उत्तम",
    "Light & Fluffy": "हल्का व सुपाच्य",
    "South Indian": "दक्षिण भारतीय",
    "No Cooking": "बिना पकाए",
    "Superfood": "सुपरफूड",
    "Wholesome Thali": "संपूर्ण थाली",
    "Classic Dal": "पारंपरिक दाल",
    "Protein Packed": "प्रोटीन से भरपूर",
    "North Indian Feast": "उत्तर भारतीय भोज",
    "Immunity Booster": "इम्यूनिटी वर्धक",
    "Comfort Food": "मनपसंद स्वाद",
    "Home Comfort": "घरेलू स्वाद",
    "Under 30 Mins": "३० मिनट में तैयार",
    "Crispy & Savory": "कुरकुरा व स्वादिष्ट",
    "Iron Powerhouse": "आयरन का खजाना",
    "Deep Nutrition": "गहरा पोषण",
    "Easy Digestion": "पाचन में सरल",
    "One-Pot Dinner": "सरल रात का भोजन",
    "Cooling & Light": "शीतल व हल्का"
  };

  let primaryTag = (meal.tags && meal.tags.length > 0) ? meal.tags[0] : "Pure Veg";
  if (lang === "hi") {
    primaryTag = tagMappingHi[primaryTag] || "शुद्ध शाकाहारी";
  }

  // Prep Text
  const prepAlertHtml = meal.advancePrepNeeded && !meal.advancePrepNeeded.startsWith("None")
    ? `<div class="prep-compact-pill">🌙 <strong>${t("prepPrefix")}</strong> ${meal.advancePrepNeeded}</div>`
    : "";

  const cardDetailsId = `details_${slotKey}`;

  // Cooked status ribbon
  const cookedBannerHtml = isCooked ? `
    <div class="cooked-badge-ribbon">
      <span>${t("cookedTodayRibbon")}</span>
      <button class="btn-undo-link" onclick="toggleMealCooked('${slotKey}', '${meal.id}')">${t("undo")}</button>
    </div>
  ` : (inCooldown ? `
    <div class="cooked-badge-ribbon" style="background:#EFF6FF; border-color:#BFDBFE; color:#1D4ED8;">
      <span>${t("cooldownRibbon")}</span>
    </div>
  ` : "");

  container.innerHTML = `
    <!-- Slot Header, Difficulty Badge & Swap Button -->
    <div class="meal-card-top">
      <div class="slot-pill ${slot.cls}">
        <span class="slot-icon">${slot.icon}</span>
        <strong>${slot.label}</strong>
      </div>
      <div class="card-top-right">
        ${getDifficultyBadge(meal.difficulty)}
        <button class="btn-swap-clean" onclick="swapMeal('${slotKey}')" title="${t("swapBtn")}">
          ${t("swapBtn")}
        </button>
      </div>
    </div>
    
    ${cookedBannerHtml}

    <!-- Dish Title (Pure Single-Language Display) -->
    <div class="dish-title-block">
      <h3 class="dish-name">${displayTitle}</h3>
    </div>
    
    <!-- Meta Metrics Row (Centered) -->
    <div class="dish-meta-row-clean">
      <span class="meta-tag">⏱️ ${meal.cookTimeMinutes} ${t("minutes")}</span>
      <span class="meta-tag accent">🌿 ${primaryTag}</span>
      <span class="meta-tag">🔥 ~${nutri.calories} kcal • 💪 ${nutri.protein}</span>
    </div>

    ${prepAlertHtml}

    <!-- Collapsible Quick Staples & Chef Advice (Centered) -->
    <div class="card-accordion-wrap">
      <button class="accordion-toggle-btn" onclick="toggleCardDetails('${cardDetailsId}', this)">
        <span>${t("accordionToggle")}</span>
        <span class="chevron">▼</span>
      </button>
      <div class="card-accordion-content hidden" id="${cardDetailsId}">
        <p class="advice-text"><strong>${t("advicePrefix")}</strong> ${meal.healthAdvice}</p>
        <div class="ingredients-list-compact">
          ${meal.ingredients.map(i => `<span class="ing-pill">${i}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Action Buttons Row (Centered) -->
    <div class="card-actions-clean">
      <button class="btn-primary-recipe" onclick="openRecipeModal('${slotKey}')">
        ${t("viewRecipe")}
      </button>
      <button class="btn-cooked-action ${isCooked ? 'is-cooked' : ''}" onclick="toggleMealCooked('${slotKey}', '${meal.id}')" title="${t("cookedQuestion")}">
        ${isCooked ? t("cookedDone") : t("cookedQuestion")}
      </button>
      <button class="btn-share-icon" onclick="shareMeal('${slotKey}')" title="${t("shareBtn")}">
        📤
      </button>
    </div>
  `;
}

function renderTodayMeals() {
  updateDateBanner();
  const bf = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
  const ln = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
  const dn = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];

  renderMealCard("breakfast", bf, "breakfastCard");
  renderMealCard("lunch", ln, "lunchCard");
  renderMealCard("dinner", dn, "dinnerCard");

  if (state.currentMealFilter) {
    filterMeals(state.currentMealFilter);
  }
}

// --- 8. VERTICAL SCROLL MINIMIZATION & SCROLL GUIDANCE ---
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
  const scrollCue = document.getElementById("scrollDownCue");
  const shuffleBanner = document.getElementById("shuffleBannerContainer");

  if (filter === "all") {
    if (bfCard) bfCard.style.display = "block";
    if (lnCard) lnCard.style.display = "block";
    if (dnCard) dnCard.style.display = "block";
    // Show scroll guidance cue when all 3 meals are visible
    if (scrollCue) scrollCue.style.display = "flex";
    if (shuffleBanner) shuffleBanner.style.display = "block";
  } else {
    // Single meal mode: fits 100% on phone screen with ZERO vertical scrolling!
    if (scrollCue) scrollCue.style.display = "none";
    if (filter === "breakfast") {
      if (bfCard) bfCard.style.display = "block";
      if (lnCard) lnCard.style.display = "none";
      if (dnCard) dnCard.style.display = "none";
      if (shuffleBanner) shuffleBanner.style.display = "none";
    } else if (filter === "lunch") {
      if (bfCard) bfCard.style.display = "none";
      if (lnCard) lnCard.style.display = "block";
      if (dnCard) dnCard.style.display = "none";
      if (shuffleBanner) shuffleBanner.style.display = "none";
    } else if (filter === "dinner") {
      if (bfCard) bfCard.style.display = "none";
      if (lnCard) lnCard.style.display = "none";
      if (dnCard) dnCard.style.display = "block";
      // On dinner, show shuffle all meals directly after dinner!
      if (shuffleBanner) shuffleBanner.style.display = "block";
    }
  }
}

function scrollToNextMeal() {
  const lnCard = document.getElementById("lunchCard");
  const dnCard = document.getElementById("dinnerCard");
  const shuffleBanner = document.getElementById("shuffleBannerContainer");
  const currentScroll = window.scrollY;

  const lnTop = lnCard ? lnCard.getBoundingClientRect().top + window.scrollY - 70 : 0;
  const dnTop = dnCard ? dnCard.getBoundingClientRect().top + window.scrollY - 70 : 0;
  const shuffleTop = shuffleBanner ? shuffleBanner.getBoundingClientRect().top + window.scrollY - 70 : 0;

  if (currentScroll < lnTop - 60) {
    window.scrollTo({ top: lnTop, behavior: "smooth" });
  } else if (currentScroll < dnTop - 60) {
    window.scrollTo({ top: dnTop, behavior: "smooth" });
  } else if (shuffleBanner && currentScroll < shuffleTop - 60) {
    window.scrollTo({ top: shuffleTop, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const availableIndices = [];
  for (let i = 0; i < list.length; i++) {
    if (i !== currentIndex && !isMealInCooldown(list[i].id, 3)) {
      availableIndices.push(i);
    }
  }

  if (availableIndices.length > 0) {
    return availableIndices[Math.floor(Math.random() * availableIndices.length)];
  }

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
  showInAppToast(t("toastReplan"), t("toastReplanDesc"));
}

// --- 9. KAL KI TAIYARI (ADVANCE PREP) RENDERER ---
function renderPrepList() {
  const container = document.getElementById("prepChecklistContainer");
  if (!container) return;

  const lang = state.lang;
  const total = state.prepList.length;
  const doneCount = state.prepList.filter(i => i.isDone).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const statusBadge = document.getElementById("prepStatusBadge");
  const pctText = document.getElementById("prepPercentageText");
  const barFill = document.getElementById("prepProgressBar");

  if (statusBadge) statusBadge.textContent = `${doneCount}/${total} ${t("doneSuffix")}`;
  if (pctText) pctText.textContent = `${pct}% ${t("readySuffix")}`;
  if (barFill) barFill.style.width = `${pct}%`;

  if (state.prepList.length === 0) {
    container.innerHTML = `
      <div class="prep-empty-state">
        <span class="prep-empty-icon">✨</span>
        <h4>${t("prepCleared")}</h4>
        <button class="btn-restore-prep" onclick="resetDefaultPrepTasks()">
          ${t("restoreDefault")}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.prepList.map((item, index) => {
    const title = lang === "hi" ? (item.titleHi || item.title) : item.title;
    const targetMeal = lang === "hi" ? (item.targetMealHi || item.targetMeal) : item.targetMeal;
    const idealTime = lang === "hi" ? (item.idealTimeHi || item.idealTime) : item.idealTime;
    const instructions = lang === "hi" ? (item.instructionsHi || item.instructions) : item.instructions;
    const whyItMatters = lang === "hi" ? (item.whyItMattersHi || item.whyItMatters) : item.whyItMatters;

    return `
      <div class="prep-item-clean ${item.isDone ? 'done' : ''}">
        <div class="prep-item-top-row">
          <div class="prep-item-check-group" onclick="togglePrepItem(${index})">
            <div class="prep-check-bubble ${item.isDone ? 'checked' : ''}">
              ${item.isDone ? '✓' : ''}
            </div>
            <div class="prep-header-info">
              <h4 class="prep-item-title">${title}</h4>
              <span class="prep-timing-badge">⏰ ${idealTime} • ${targetMeal}</span>
            </div>
          </div>
          <button class="btn-remove-prep-task" onclick="removePrepItem(${index})" title="${lang === 'hi' ? 'कार्य हटाएं' : 'Remove task'}" aria-label="Remove task">
            ✕
          </button>
        </div>
        <div class="prep-item-body-full" onclick="togglePrepItem(${index})">
          <p class="prep-item-desc">${instructions}</p>
          <span class="prep-item-why">💡 ${whyItMatters}</span>
        </div>
      </div>
    `;
  }).join("");
}

function removePrepItem(index) {
  if (state.prepList[index]) {
    const title = state.lang === "hi" ? (state.prepList[index].titleHi || state.prepList[index].title) : state.prepList[index].title;
    state.prepList.splice(index, 1);
    localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
    renderPrepList();
    showInAppToast(t("toastTaskRemoved"), `"${title}"`);
  }
}

function resetDefaultPrepTasks() {
  state.prepList = DEFAULT_PREP_ITEMS.map(i => ({ ...i, isDone: false }));
  localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
  renderPrepList();
  showInAppToast(t("toastRestored"), t("toastRestoredDesc"));
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

  const note = input.value.trim();
  state.prepList.push({
    id: `custom_${Date.now()}`,
    title: note,
    titleHi: note,
    targetMeal: state.lang === "hi" ? "घरेलू कार्य" : "Custom Note",
    targetMealHi: "घरेलू कार्य",
    idealTime: state.lang === "hi" ? "आज रात" : "Tonight",
    idealTimeHi: "आज रात",
    instructions: state.lang === "hi" ? "घरेलू रसोई रिमाइंडर।" : "Household kitchen reminder.",
    instructionsHi: "घरेलू रसोई रिमाइंडर।",
    whyItMatters: state.lang === "hi" ? "सुबह की भागदौड़ से बचाता है।" : "Keeps morning cooking smooth.",
    whyItMattersHi: "सुबह की भागदौड़ से बचाता है।",
    isDone: false
  });

  input.value = "";
  localStorage.setItem("akb_prep_list", JSON.stringify(state.prepList));
  renderPrepList();
  showInAppToast(t("addBtn"), note);
}

// --- 10. WEEKLY PLAN RENDERER (100% SINGLE LANGUAGE) ---
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

  const lang = state.lang;
  const daysToRender = state.currentWeeklyDay === -1 
    ? WEEKLY_PLAN.map((d, i) => ({ ...d, originalIdx: i }))
    : [ { ...WEEKLY_PLAN[state.currentWeeklyDay], originalIdx: state.currentWeeklyDay } ];

  container.innerHTML = daysToRender.map(day => {
    const bf = MEAL_DATABASE.breakfast[day.bf % MEAL_DATABASE.breakfast.length];
    const ln = MEAL_DATABASE.lunch[day.ln % MEAL_DATABASE.lunch.length];
    const dn = MEAL_DATABASE.dinner[day.dn % MEAL_DATABASE.dinner.length];

    const dayTitle = lang === "hi" ? day.dayHi : day.day;
    const dayTheme = lang === "hi" ? day.themeHi : day.themeEn;
    const prepText = lang === "hi" ? day.prepHi : day.prep;

    const bfTitle = lang === "hi" ? bf.hindiTitle : bf.name;
    const lnTitle = lang === "hi" ? ln.hindiTitle : ln.name;
    const dnTitle = lang === "hi" ? dn.hindiTitle : dn.name;

    return `
      <div class="day-plan-card-clean">
        <div class="day-header-clean">
          <div>
            <span class="day-title">${dayTitle}</span>
            <span class="day-hindi">(${dayTheme})</span>
          </div>
        </div>

        <div class="day-triad-grid">
          <div class="triad-col">
            <span class="triad-label">🌅 ${t("slotBf")}</span>
            <strong class="triad-dish">${bfTitle}</strong>
          </div>
          <div class="triad-col">
            <span class="triad-label">☀️ ${t("slotLn")}</span>
            <strong class="triad-dish">${lnTitle}</strong>
          </div>
          <div class="triad-col">
            <span class="triad-label">🌙 ${t("slotDn")}</span>
            <strong class="triad-dish">${dnTitle}</strong>
          </div>
        </div>

        <div class="day-prep-footer">
          🌙 <strong>${t("prepPrefix")}</strong> ${prepText}
        </div>
      </div>
    `;
  }).join("");
}

// --- 11. RECIPE STEPS MODAL (100% SINGLE LANGUAGE) ---
function openRecipeModal(target, slotHint) {
  let meal = null;
  let slotLabel = "RECIPE";

  if (target === "breakfast" || target === "lunch" || target === "dinner") {
    if (target === "breakfast") meal = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
    if (target === "lunch") meal = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
    if (target === "dinner") meal = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];
    slotLabel = target === "breakfast" ? t("slotBf") : (target === "lunch" ? t("slotLn") : t("slotDn"));
  } else if (typeof target === "string") {
    const all = [...MEAL_DATABASE.breakfast, ...MEAL_DATABASE.lunch, ...MEAL_DATABASE.dinner];
    meal = all.find(m => m.name === target || m.id === target || m.hindiTitle === target);
    if (meal) {
      if (MEAL_DATABASE.breakfast.some(m => m.id === meal.id)) slotLabel = t("slotBf");
      else if (MEAL_DATABASE.lunch.some(m => m.id === meal.id)) slotLabel = t("slotLn");
      else if (MEAL_DATABASE.dinner.some(m => m.id === meal.id)) slotLabel = t("slotDn");
      else slotLabel = slotHint || "RECIPE";
    }
  } else if (typeof target === "object" && target !== null) {
    meal = target;
    slotLabel = slotHint || "RECIPE";
  }

  if (!meal) return;

  state.currentModalMeal = meal;
  state.currentModalSlot = slotLabel;

  const lang = state.lang;
  const title = lang === "hi" ? meal.hindiTitle : meal.name;

  document.getElementById("modalMealSlot").textContent = slotLabel;
  document.getElementById("modalDishTitle").textContent = title;
  document.getElementById("modalCookTime").textContent = `⏱️ ${meal.cookTimeMinutes} ${t("minutes")}`;

  const modalDiff = document.getElementById("modalDifficulty");
  if (modalDiff) modalDiff.innerHTML = getDifficultyBadge(meal.difficulty);

  const nutri = meal.nutrition || getMealNutrition(meal);
  const calEl = document.getElementById("modalNutriCalories");
  const proEl = document.getElementById("modalNutriProtein");
  const fibEl = document.getElementById("modalNutriFiber");
  if (calEl) calEl.textContent = `${nutri.calories} kcal`;
  if (proEl) proEl.textContent = nutri.protein;
  if (fibEl) fibEl.textContent = nutri.fiber;

  document.getElementById("modalNutriHeading").textContent = t("modalNutriHeading");
  document.getElementById("modalNutriSubtext").textContent = t("modalNutriSubtext");
  document.getElementById("modalNutriLabelCal").textContent = t("modalCalories");
  document.getElementById("modalNutriLabelPro").textContent = t("modalProtein");
  document.getElementById("modalNutriLabelFib").textContent = t("modalFiber");

  document.getElementById("modalHeadingAdvice").textContent = t("modalHeadingAdvice");
  document.getElementById("modalAdvice").textContent = meal.healthAdvice;

  document.getElementById("modalHeadingIngredients").textContent = t("modalHeadingIngredients");
  document.getElementById("modalIngredientsList").innerHTML = meal.ingredients.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modalHeadingSteps").textContent = t("modalHeadingSteps");
  document.getElementById("modalStepsList").innerHTML = meal.steps.map(s => `<li>${s}</li>`).join("");

  document.getElementById("modalShareBtnText").textContent = t("shareBtn");
  document.getElementById("modalCloseBtnText").textContent = t("modalDone");

  document.getElementById("recipeModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
}

// --- 12. SHARING ACTIONS ---
function shareMeal(slotKey) {
  let meal;
  if (slotKey === "breakfast") meal = MEAL_DATABASE.breakfast[state.currentBfIndex % MEAL_DATABASE.breakfast.length];
  else if (slotKey === "lunch") meal = MEAL_DATABASE.lunch[state.currentLnIndex % MEAL_DATABASE.lunch.length];
  else if (slotKey === "dinner") meal = MEAL_DATABASE.dinner[state.currentDnIndex % MEAL_DATABASE.dinner.length];
  else if (state.currentModalMeal) meal = state.currentModalMeal;
  if (!meal) return;

  const lang = state.lang;
  const nutri = meal.nutrition || getMealNutrition(meal);
  const dishTitle = lang === "hi" ? meal.hindiTitle : meal.name;
  const appName = t("appTitle");

  const text = lang === "hi"
    ? `🍛 *${appName}*\n*${dishTitle}*\n⏱️ समय: ${meal.cookTimeMinutes} मिनट\n🔥 पोषण: ~${nutri.calories} kcal • प्रोटीन: ${nutri.protein} • फाइबर: ${nutri.fiber}\n💡 रसोई सलाह: ${meal.healthAdvice}\n📝 सामग्री: ${meal.ingredients.join(", ")}\n\n– *${appName} • Opal Luna Labs*`
    : `🍛 *${appName}*\n*${dishTitle}*\n⏱️ Cook Time: ${meal.cookTimeMinutes} mins\n🔥 Nutrition: ~${nutri.calories} kcal • Protein: ${nutri.protein} • Fiber: ${nutri.fiber}\n💡 Cooking Tip: ${meal.healthAdvice}\n📝 Ingredients: ${meal.ingredients.join(", ")}\n\n– *${appName} • Opal Luna Labs*`;

  if (navigator.share) {
    navigator.share({ title: dishTitle, text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert(lang === "hi" ? "व्यंजन की जानकारी कॉपी कर ली गई है!" : "Recipe details copied to clipboard!");
  }
}

function shareWeeklyPlan() {
  const lang = state.lang;
  let text = lang === "hi"
    ? `📅 *साप्ताहिक भोजन योजना (7-Day Indian Veg Menu)*\n\n`
    : `📅 *Weekly Meal Plan (7-Day Indian Veg Menu)*\n\n`;

  WEEKLY_PLAN.forEach(d => {
    const bf = MEAL_DATABASE.breakfast[d.bf % MEAL_DATABASE.breakfast.length];
    const ln = MEAL_DATABASE.lunch[d.ln % MEAL_DATABASE.lunch.length];
    const dn = MEAL_DATABASE.dinner[d.dn % MEAL_DATABASE.dinner.length];
    const dayTitle = lang === "hi" ? d.dayHi : d.day;
    const bfTitle = lang === "hi" ? bf.hindiTitle : bf.name;
    const lnTitle = lang === "hi" ? ln.hindiTitle : ln.name;
    const dnTitle = lang === "hi" ? dn.hindiTitle : dn.name;
    const prep = lang === "hi" ? d.prepHi : d.prep;
    text += `🔹 *${dayTitle}*\n   🍳 ${bfTitle}\n   🍛 ${lnTitle}\n   🍲 ${dnTitle}\n   🌙 तैयारी: ${prep}\n\n`;
  });
  text += "– *Kya Banaye • Opal Luna Labs*";

  if (navigator.share) {
    navigator.share({ title: "Weekly Menu", text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert(lang === "hi" ? "साप्ताहिक योजना कॉपी कर ली गई है!" : "Weekly plan copied to clipboard!");
  }
}

// --- 13. NOTIFICATION SYSTEM ---
function playGentleChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
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
    console.warn("Chime notice:", err);
  }
}

function showInAppToast(title, message) {
  const toast = document.getElementById("inAppNotificationToast");
  const titleEl = document.getElementById("toastTitle");
  const bodyEl = document.getElementById("toastBody");
  if (!toast) return;

  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.textContent = message;

  toast.classList.remove("hidden");
  toast.classList.add("visible");

  setTimeout(() => {
    closeToast();
  }, 4500);
}

function dismissToast() {
  closeToast();
}

function closeToast() {
  const toast = document.getElementById("inAppNotificationToast");
  if (toast) {
    toast.classList.remove("visible");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }
}

function trigger830PMReminder(isTest = false) {
  playGentleChime();
  const lang = state.lang;
  const title = isTest 
    ? (lang === "hi" ? "🔔 जांच सूचना: रात ८:३० बजे कल की तैयारी" : "🔔 Test Alert: 8:30 PM Advance Prep Reminder")
    : (lang === "hi" ? "🌙 रात ८:३० बजे रिमाइंडर — कल की तैयारी" : "🌙 8:30 PM Reminder — Advance Kitchen Prep");
  const body = isTest 
    ? (lang === "hi" ? "रिमाइंडर सक्रिय है! रोज़ाना रात ८:३० बजे दाल भिगोने और दही जमाने की सूचना मिलेगी।" : "Gentle reminder active! You will be alerted daily at 8:30 PM to soak pulses and set curd.")
    : (lang === "hi" ? "समय हो गया है: कल की तैयारी! क्या आपने कल के लिए दाल भिगो दी या दही जमा दिया?" : "Time for advance prep! Did you soak pulses or set fresh curd for tomorrow?");

  showInAppToast(title, body);

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

  if (!isTest) {
    localStorage.setItem("akb_last_notified_date", new Date().toDateString());
  }
}

let notificationTimer = null;
let notificationInterval = null;

function schedule830PMNotification() {
  if (notificationTimer) clearTimeout(notificationTimer);
  if (notificationInterval) clearInterval(notificationInterval);

  const enabled = localStorage.getItem("akb_reminder_enabled") !== "false";
  const toggle = document.getElementById("prepReminderToggle");
  if (toggle) toggle.checked = enabled;

  const desc = document.getElementById("reminderStatusDesc");
  if (desc) {
    desc.textContent = enabled ? t("reminderDescOn") : t("reminderDescOff");
  }

  if (!enabled) return;

  function checkAndNotify() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const todayStr = now.toDateString();
    const lastNotified = localStorage.getItem("akb_last_notified_date");

    if ((hours > 20 || (hours === 20 && minutes >= 30)) && lastNotified !== todayStr) {
      trigger830PMReminder(false);
    }
  }

  const now = new Date();
  const next830 = new Date();
  next830.setHours(20, 30, 0, 0);
  if (now.getTime() >= next830.getTime()) {
    next830.setDate(next830.getDate() + 1);
  }
  const msUntilNext = next830.getTime() - now.getTime();

  notificationTimer = setTimeout(() => {
    checkAndNotify();
    schedule830PMNotification();
  }, msUntilNext);

  notificationInterval = setInterval(checkAndNotify, 30000);
}

// --- 14. KITCHEN DIARY (रसोई डायरी) RENDERER ---
function renderCookingHistory() {
  const container = document.getElementById("historyTimelineContainer");
  const countEl = document.getElementById("historyTotalCount");
  if (!container) return;

  const lang = state.lang;
  if (countEl) countEl.textContent = state.cookingHistory.length;

  if (state.cookingHistory.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="empty-icon">📖</div>
        <h4>${t("historyEmpty")}</h4>
        <p>${t("historyEmptySub")}</p>
        <p style="margin-top:6px; font-size:12px; color:#0B57D0;">${t("historyEmptyNote")}</p>
      </div>
    `;
    return;
  }

  const groups = {};
  state.cookingHistory.forEach(item => {
    if (!groups[item.date]) groups[item.date] = [];
    groups[item.date].push(item);
  });

  const sortedDates = Object.keys(groups).sort((a, b) => b.localeCompare(a));
  const todayStr = getTodayDateString();

  const slotLabels = {
    breakfast: { label: t("slotBf"), cls: "breakfast" },
    lunch: { label: t("slotLn"), cls: "lunch" },
    dinner: { label: t("slotDn"), cls: "dinner" }
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
            ${isToday ? t("todayText") : dateKey}
          </span>
        </div>
        <div class="history-meal-list">
          ${items.map(item => {
            const slotInfo = slotLabels[item.slot] || { label: item.slot, cls: "lunch" };
            const title = lang === "hi" ? (item.hindiTitle || item.name) : item.name;

            return `
              <div class="history-item-row">
                <div class="history-item-left">
                  <span class="history-item-badge ${slotInfo.cls}">${slotInfo.label}</span>
                  <div class="history-item-details">
                    <span class="history-dish-name">${title}</span>
                  </div>
                </div>
                <div class="history-item-right">
                  <button class="btn-history-recipe" onclick="openRecipeModal('${item.mealId}', '${item.slot}')" title="${t("recipeBtn")}">
                    ${t("recipeBtn")}
                  </button>
                  <button class="btn-history-delete" onclick="removeCookingHistoryEntry('${item.id}')" title="हटाएं" aria-label="Delete log">
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
    const title = state.lang === "hi" ? (removed.hindiTitle || removed.name) : removed.name;
    state.cookingHistory.splice(idx, 1);
    localStorage.setItem("akb_cooking_history", JSON.stringify(state.cookingHistory));
    renderCookingHistory();
    renderTodayMeals();
    showInAppToast(t("toastTaskRemoved"), title);
  }
}

function clearCookingHistory() {
  if (state.cookingHistory.length === 0) return;
  const confirmMsg = state.lang === "hi"
    ? "क्या आप संपूर्ण रसोई डायरी खाली करना चाहते हैं? इससे ३-दिन का रिपीट लॉक भी रीसेट हो जाएगा।"
    : "Are you sure you want to clear your entire cooking history? This will also reset the 3-day repetition cooldown.";

  if (confirm(confirmMsg)) {
    state.cookingHistory = [];
    localStorage.removeItem("akb_cooking_history");
    renderCookingHistory();
    renderTodayMeals();
    showInAppToast(t("clearBtn"), state.lang === "hi" ? "रसोई डायरी खाली कर दी गई।" : "Kitchen Diary cleared.");
  }
}

// --- 15. ABOUT US RENDERER (100% PURE SINGLE-LANGUAGE) ---
function renderAbout() {
  const container = document.getElementById("aboutViewContainer");
  if (!container) return;

  const lang = state.lang;

  if (lang === "hi") {
    container.innerHTML = `
      <div class="view-header-clean">
        <div class="view-title-row">
          <h2>ऐप के बारे में एवं कानूनी जानकारी</h2>
          <span class="badge-status">v२.५ PWA</span>
        </div>
        <p class="view-subtitle">क्या बनाएं • संपूर्ण मार्गदर्शिका, दर्शन एवं कानूनी सूचना</p>
      </div>

      <div class="info-card-clean">
        <div class="info-title-row">
          <span class="info-icon">🍲</span>
          <h3>क्या बनाएं — शुद्ध शाकाहारी</h3>
        </div>
        <p><strong>क्या बनाएं</strong> भारतीय शाकाहारी परिवारों के लिए विशेष रूप से निर्मित एक आधुनिक ऐप है। यह हर सुबह और शाम उठने वाले तनाव भरे सवाल <em>"आज क्या बनाएं?"</em> को पूरी तरह समाप्त करता है।</p>
        
        <div class="about-highlights-grid">
          <div class="highlight-item">
            <span class="hi-icon">🛡️</span>
            <div>
              <strong>३-दिन का एंटी-रिपीट लॉक</strong>
              <p>जब आप "आज बनाया?" बटन दबाते हैं, तो वह व्यंजन अगले ३ दिनों तक मेनू में दोबारा नहीं आएगा ताकि भोजन में विविधता बनी रहे।</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">🌙</span>
            <div>
              <strong>कल की तैयारी (Advance Prep)</strong>
              <p>रोज़ रात ८:३० बजे दाल भिगोने, दही जमाने और सब्ज़ियां तैयार करने का रिमाइंडर, जो सुबह की भागदौड़ से ३० मिनट बचाता है।</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">📅</span>
            <div>
              <strong>साप्ताहिक भोजन योजना</strong>
              <p>दाल, हरी सब्ज़ियों और प्रोटीन से भरपूर ७-दिवसीय संतुलित चक्र जो पूरे परिवार के स्वास्थ्य को सुदृढ़ रखता है।</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">📖</span>
            <div>
              <strong>रसोई डायरी</strong>
              <p>तारीख सहित पके हुए व्यंजनों का स्वतः रिकॉर्ड, जिससे रसोई का सटीक हिसाब रहता है।</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info-card-clean">
        <div class="info-title-row">
          <span class="info-icon">🏢</span>
          <h3>ओपल लूना लैब्स (Opal Luna Labs)</h3>
        </div>
        <p><strong>Opal Luna Labs</strong> रोज़मर्रा की घरेलू समस्याओं को हल करने वाले सरल, तेज़ और विज्ञापन-मुक्त सॉफ़्टवेयर बनाती है।</p>
        <p class="copyright-sub">🔒 १००% गोपनीयता • सारा डेटा आपके डिवाइस पर ही सुरक्षित रहता है।</p>
      </div>

      <div class="info-card-clean legal-border">
        <div class="info-title-row">
          <span class="info-icon">⚖️</span>
          <h3>पाककला व स्वास्थ्य अस्वीकरण</h3>
        </div>
        <ul class="legal-list-clean">
          <li><strong>सलाहकारी स्वरूप:</strong> सभी व्यंजन, पोषण मूल्य और तैयारी सुझाव घरेलू सुविधा के लिए हैं।</li>
          <li><strong>कानूनी दायित्व:</strong> किसी भी एलर्जी या व्यक्तिगत स्वास्थ्य प्रभाव के लिए यह ऐप उत्तरदायी नहीं है।</li>
          <li><strong>उपयोगकर्ता विवेक:</strong> सामग्री की ताज़गी व मसालों का चयन अपनी रुचि और स्वास्थ्य अनुसार करें।</li>
        </ul>
      </div>

      <footer class="branding-footer-clean">
        <p><strong>निर्मित एवं संचालित: Opal Luna Labs</strong></p>
        <p class="small">© २०२६ Opal Luna Labs. सर्वाधिकार सुरक्षित।</p>
      </footer>
    `;
  } else {
    container.innerHTML = `
      <div class="view-header-clean">
        <div class="view-title-row">
          <h2>About Us & Legal Notice</h2>
          <span class="badge-status">v2.5 PWA</span>
        </div>
        <p class="view-subtitle">Kya Banaye • Complete App Guide, Philosophy & Legal Notice</p>
      </div>

      <div class="info-card-clean">
        <div class="info-title-row">
          <span class="info-icon">🍲</span>
          <h3>Kya Banaye — Shuddh Shakahari</h3>
        </div>
        <p><strong>Kya Banaye</strong> is a smart, offline-first Progressive Web App designed specifically for Indian vegetarian households. It ends the daily domestic friction of deciding what to cook with thoughtful variety.</p>
        
        <div class="about-highlights-grid">
          <div class="highlight-item">
            <span class="hi-icon">🛡️</span>
            <div>
              <strong>3-Day Anti-Repeat Cooldown</strong>
              <p>Whenever you tap "Cooked Today?", that dish is locked out of daily shuffles for 3 days to guarantee variety.</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">🌙</span>
            <div>
              <strong>Advance Preparation (Kal Ki Taiyari)</strong>
              <p>Nightly reminder at 8:30 PM to soak pulses, set dahi, or prep ingredients, saving 30 minutes in the morning rush.</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">📅</span>
            <div>
              <strong>7-Day Weekly Meal Plan</strong>
              <p>A balanced vegetarian rotation covering high-protein dals, vegetables, and seasonal favorites.</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="hi-icon">📖</span>
            <div>
              <strong>Kitchen Diary</strong>
              <p>Automatically records what you cooked and when, giving you a clean household culinary log.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info-card-clean">
        <div class="info-title-row">
          <span class="info-icon">🏢</span>
          <h3>About Opal Luna Labs</h3>
        </div>
        <p><strong>Opal Luna Labs</strong> creates thoughtful software utilities that solve everyday household friction points with minimalism, speed, and empathy. Zero ads, zero trackers.</p>
        <p class="copyright-sub">🔒 100% Client-Side Privacy • All data remains saved locally on your device in browser storage.</p>
      </div>

      <div class="info-card-clean legal-border">
        <div class="info-title-row">
          <span class="info-icon">⚖️</span>
          <h3>Culinary & Medical Disclaimer</h3>
        </div>
        <ul class="legal-list-clean">
          <li><strong>Purely Advisory:</strong> All meal ideas, nutrition values, and prep steps are culinary suggestions for domestic convenience.</li>
          <li><strong>Zero Legal Liability:</strong> Neither this app nor Opal Luna Labs bears liability regarding allergic reactions or health conditions.</li>
          <li><strong>User Discretion Mandated:</strong> Always inspect ingredient freshness and adjust seasoning to dietary needs.</li>
        </ul>
      </div>

      <footer class="branding-footer-clean">
        <p><strong>Powered & Developed by Opal Luna Labs</strong></p>
        <p class="small">© 2026 Opal Luna Labs. All rights reserved.</p>
      </footer>
    `;
  }
}

// --- 16. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved language strings
  applyStaticLanguageStrings();

  // Render initial views
  renderTodayMeals();
  renderPrepList();
  renderWeekly();
  renderCookingHistory();
  renderAbout();

  // Main Action Listeners
  document.getElementById("replanAllBtn")?.addEventListener("click", replanAll);
  document.getElementById("addCustomPrepBtn")?.addEventListener("click", addCustomPrep);
  document.getElementById("shareWeeklyBtn")?.addEventListener("click", shareWeeklyPlan);

  // Modal Listeners
  document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
  document.getElementById("closeModalBtn2")?.addEventListener("click", closeModal);
  document.getElementById("shareRecipeModalBtn")?.addEventListener("click", () => {
    if (state.currentModalMeal) shareMeal();
  });
  document.getElementById("recipeModal")?.addEventListener("click", (e) => {
    if (e.target.id === "recipeModal") closeModal();
  });

  // Reminder toggle & push notification setup
  const reminderToggle = document.getElementById("prepReminderToggle");
  reminderToggle?.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    localStorage.setItem("akb_reminder_enabled", isChecked ? "true" : "false");
    schedule830PMNotification();

    if (isChecked) {
      if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission().then((perm) => {
          if (perm === "granted") {
            schedule830PMNotification();
            showInAppToast("🔔 " + t("reminderTitle"), t("reminderDescOn"));
          }
        });
      } else {
        showInAppToast("🔔 " + t("reminderTitle"), t("reminderDescOn"));
      }
    } else {
      showInAppToast("🔕 " + t("reminderTitle"), t("reminderDescOff"));
    }
  });

  // Test Notification Button
  document.getElementById("testNotificationBtn")?.addEventListener("click", () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then(() => trigger830PMReminder(true));
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
