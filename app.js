/**
 * Aaj Kya Banega — Daily Indian Veg Meal Planner PWA
 * Powered and Developed by Opal Luna Labs
 * Copyright © 2026 Opal Luna Labs. All rights reserved.
 */

// --- 1. FOOD & RECIPE DATA (100% PURE VEG INDIAN HOUSEHOLD MEALS) ---
const MEAL_DATABASE = {
  breakfast: [
    {
      id: "bf_1",
      name: "Kanda Poha with Peanuts & Lemon",
      hindiTitle: "कांदा पोहा (मूंगफली और नींबू के साथ)",
      cookTimeMinutes: 15,
      difficulty: "Super Easy",
      tags: ["Under 20 Mins", "Iron Rich", "Low Calorie"],
      nutrition: { calories: 270, protein: "7g", fiber: "4g" },
      healthAdvice: "Light on stomach, rich in iron and complex carbs. Roasted peanuts add healthy fats and sustained morning energy.",
      advancePrepNeeded: "Optional: Dry-roast peanuts tonight and store in an airtight jar.",
      ingredients: ["Flattened Rice (Poha)", "Onions", "Peanuts", "Green Chillies", "Curry Leaves", "Mustard Seeds", "Turmeric", "Lemon Juice", "Fresh Coriander"],
      steps: [
        "Rinse poha in colander for 30 seconds; drain completely and rest with a pinch of turmeric and salt.",
        "Heat 1 tbsp oil in kadai; splutter mustard seeds, curry leaves, green chillies, and fry peanuts till crunchy.",
        "Sauté chopped onions till soft and translucent.",
        "Toss in drained poha gently; cover on low flame for 2 mins.",
        "Finish with fresh lemon juice and chopped coriander."
      ]
    },
    {
      id: "bf_2",
      name: "Moong Dal Chilla with Mint Chutney",
      hindiTitle: "मूंग दाल चीला (पुदीना चटनी के साथ)",
      cookTimeMinutes: 20,
      difficulty: "Easy",
      tags: ["High Protein", "Gluten Free", "Diabetic Friendly"],
      nutrition: { calories: 210, protein: "14g", fiber: "6g" },
      healthAdvice: "Powerhouse of vegetarian protein (~14g per serving), low glycemic index, excellent for sustained morning alertness.",
      advancePrepNeeded: "MANDATORY: Soak 1 cup yellow moong dal for at least 2 hours or overnight tonight.",
      ingredients: ["Yellow Moong Dal (Soaked)", "Ginger", "Green Chillies", "Cumin Seeds (Jeera)", "Hing (Asafoetida)", "Grated Paneer/Veggies (optional)", "Mint/Coriander Chutney"],
      steps: [
        "Drain soaked moong dal and blend with ginger, chilli, cumin, hing, and little water into a smooth batter.",
        "Season with salt and fresh chopped coriander.",
        "Spread ladleful of batter thinly on hot non-stick tawa.",
        "Drizzle 1/2 tsp oil/ghee around edges, flip when golden, and fold with grated paneer if desired.",
        "Serve piping hot with fresh green chutney."
      ]
    },
    {
      id: "bf_3",
      name: "Vegetable Daliya (Broken Wheat Khichdi)",
      hindiTitle: "पौष्टिक वेज दलिया",
      cookTimeMinutes: 25,
      difficulty: "Super Easy",
      tags: ["High Fiber", "One-Pot Meal", "Gut Friendly"],
      nutrition: { calories: 230, protein: "8g", fiber: "7g" },
      healthAdvice: "Extremely high in dietary fiber, improves gut motility and keeps cholesterol in check.",
      advancePrepNeeded: "Optional: Pre-chop carrots, beans, and peas the night before.",
      ingredients: ["Roasted Daliya (Broken Wheat)", "Carrots", "Green Peas", "Tomatoes", "Ginger", "Cumin", "Turmeric", "Desi Ghee (1 tsp)"],
      steps: [
        "Heat 1 tsp ghee in pressure cooker; temper with cumin seeds and grated ginger.",
        "Add chopped veggies and sauté for 2 mins.",
        "Add roasted daliya, turmeric, salt, and 3 cups of water.",
        "Pressure cook on medium flame for 2 whistles.",
        "Garnish with lemon juice and serve warm."
      ]
    },
    {
      id: "bf_4",
      name: "Besan & Veggie Toast",
      hindiTitle: "बेसन वेजी टोस्ट",
      cookTimeMinutes: 15,
      difficulty: "Super Easy",
      tags: ["Quick 15 Mins", "Kid Favorite", "Pantry Friendly"],
      nutrition: { calories: 240, protein: "9g", fiber: "5g" },
      healthAdvice: "Gram flour is packed with soluble fiber and vegetable protein; satisfying and blood-sugar friendly.",
      advancePrepNeeded: "None! Instant mix ready in 2 minutes.",
      ingredients: ["Whole Wheat Bread", "Besan (Gram Flour)", "Finely chopped Onions", "Tomatoes", "Capsicum", "Ajwain (Carom seeds)", "Kasuri Methi"],
      steps: [
        "Whisk besan, water, salt, ajwain, turmeric, and finely diced vegetables into a medium pouring batter.",
        "Dip whole wheat bread slice into batter to coat evenly.",
        "Toast on hot tawa with minimal oil on both sides till crisp and golden brown.",
        "Slice diagonally and serve with homemade mint chutney."
      ]
    },
    {
      id: "bf_5",
      name: "Methi Thepla with Fresh Curd",
      hindiTitle: "मेथी थेपला और ताज़ा दही",
      cookTimeMinutes: 20,
      difficulty: "Moderate",
      tags: ["Ayurvedic", "Travel Friendly", "High Fiber"],
      nutrition: { calories: 290, protein: "9g", fiber: "6g" },
      healthAdvice: "Fenugreek (methi) is celebrated in Ayurveda for blood sugar regulation and joint health.",
      advancePrepNeeded: "Pluck, wash, and thoroughly dry fresh methi leaves tonight.",
      ingredients: ["Whole Wheat Flour (Atta)", "Besan (2 tbsp)", "Fresh Fenugreek Leaves (Methi)", "Turmeric", "Ajwain", "Sesame Seeds (Til)", "Yogurt/Dahi for serving"],
      steps: [
        "Mix atta, besan, finely chopped methi leaves, spices, ajwain, and 1 tbsp curd into soft dough.",
        "Roll into thin, translucent rounds.",
        "Cook on hot tawa applying light oil on both sides until light brown spots appear.",
        "Serve warm with fresh dahi."
      ]
    }
  ],

  lunch: [
    {
      id: "ln_1",
      name: "Yellow Toor Dal Tadka + Bhindi Masala + Phulkas",
      hindiTitle: "दाल तड़का + भिंडी मसाला + गरमा-गरम फुल्के",
      cookTimeMinutes: 30,
      difficulty: "Easy",
      tags: ["Balanced Meal", "High Comfort", "Everyday Staple"],
      nutrition: { calories: 420, protein: "16g", fiber: "9g" },
      healthAdvice: "Classic balanced Indian plate: lentils provide amino acids, okra delivers soluble mucilage fiber for healthy digestion.",
      advancePrepNeeded: "Wash and completely dry bhindi (ladies' finger) tonight so it doesn't get sticky while slicing.",
      ingredients: ["Toor Dal (Arhar)", "Bhindi (Okra)", "Onions", "Tomatoes", "Garlic", "Cumin", "Hing", "Whole Wheat Flour for Phulkas", "Desi Ghee Tadka"],
      steps: [
        "Boil toor dal in pressure cooker with turmeric, salt, and tomato for 3 whistles.",
        "Chop dry bhindi; shallow sauté in kadai with cumin, coriander powder, amchur till crispy.",
        "Give dal a fragrant tadka with 1 tsp ghee, jeera, garlic, hing, and Kashmiri red chilli.",
        "Puff soft whole wheat phulkas on open flame.",
        "Serve with sliced onions and cucumber raita."
      ]
    },
    {
      id: "ln_2",
      name: "Punjabi Rajma Masala + Jeera Rice + Kachumber Salad",
      hindiTitle: "पंजाबी राजमा मसाला + जीरा राइस + कचुम्बर",
      cookTimeMinutes: 40,
      difficulty: "Moderate",
      tags: ["Complete Protein", "Family Favorite", "Weekend Special"],
      nutrition: { calories: 480, protein: "18g", fiber: "12g" },
      healthAdvice: "Red kidney beans paired with rice form a complete protein profile containing all 9 essential amino acids.",
      advancePrepNeeded: "CRITICAL: Must soak 1.5 cups red rajma in warm water for at least 8 hours tonight!",
      ingredients: ["Red Kidney Beans (Rajma)", "Onions", "Ginger-Garlic Paste", "Tomato Puree", "Coriander Powder", "Garam Masala", "Kasuri Methi", "Basmati Rice", "Cumin"],
      steps: [
        "Boil soaked rajma in pressure cooker with whole spices for 5-6 whistles till tender.",
        "Cook finely chopped onions and ginger-garlic paste till golden; add tomato puree and spice powders till oil releases.",
        "Pour in boiled rajma with broth; mash a few beans to thicken gravy naturally.",
        "Simmer on low flame for 15 minutes; crush kasuri methi on top.",
        "Serve over steamed fragrant jeera rice."
      ]
    },
    {
      id: "ln_3",
      name: "Palak Paneer + Lauki Chana Dal + Multigrain Chapati",
      hindiTitle: "पालक पनीर + लौकी चना दाल + रोटी",
      cookTimeMinutes: 35,
      difficulty: "Moderate",
      tags: ["High Calcium", "Iron Boost", "Restaurant Taste"],
      nutrition: { calories: 460, protein: "21g", fiber: "11g" },
      healthAdvice: "Rich in non-heme iron, calcium, and bone-strengthening protein. Low calorie with high micronutrient density.",
      advancePrepNeeded: "Wash spinach leaves thoroughly; soak chana dal for 30 minutes.",
      ingredients: ["Fresh Spinach (Palak)", "Fresh Paneer Cubes", "Chana Dal", "Bottle Gourd (Lauki)", "Ginger", "Green Chillies", "Garam Masala", "Kasuri Methi"],
      steps: [
        "Blanch washed palak in boiling water for 2 mins, shock in ice water, and blend into smooth puree.",
        "Cook lauki and soaked chana dal in cooker for a light side soup/dal.",
        "Sauté ginger, garlic, and cumin; add palak puree and simmer with light spices.",
        "Gently toss in raw or lightly pan-seared paneer cubes.",
        "Simmer for 3 minutes and finish with 1 tsp fresh malai or ghee."
      ]
    },
    {
      id: "ln_4",
      name: "Amritsari Chole + Steamed Rice + Boondi Raita",
      hindiTitle: "अमृतसरी छोले + उबले चावल + बूंदी रायता",
      cookTimeMinutes: 40,
      difficulty: "Moderate",
      tags: ["High Fiber", "Satiating", "Authentic Desi"],
      nutrition: { calories: 510, protein: "17g", fiber: "13g" },
      healthAdvice: "Chickpeas are packed with soluble fiber that slows carbohydrate absorption and prevents midday blood sugar spikes.",
      advancePrepNeeded: "CRITICAL: Soak Kabuli Chana (chickpeas) overnight tonight with a pinch of salt.",
      ingredients: ["Kabuli Chana (Chickpeas)", "Tea Bag (for dark color)", "Onions", "Tomatoes", "Anardana", "Amchur", "Ginger juliennes", "Basmati Rice"],
      steps: [
        "Boil soaked chana with tea bag and black cardamom in cooker for 6 whistles till tender.",
        "Prepare rich bhuna masala with onions, tomatoes, and chole masala.",
        "Mix in boiled chana, mash a few with ladle back for natural gravy thickness.",
        "Simmer for 15 mins till dark and aromatic.",
        "Top with fresh ginger juliennes and serve with steamed rice."
      ]
    },
    {
      id: "ln_5",
      name: "Gujarati Kadhi + Moong Dal Khichdi + Ringan Bharta",
      hindiTitle: "गुजराती कढ़ी + मूंग दाल खिचड़ी + बैंगन भर्ता",
      cookTimeMinutes: 30,
      difficulty: "Easy",
      tags: ["Gut Healing", "Probiotic", "Light & Soothing"],
      nutrition: { calories: 380, protein: "14g", fiber: "8g" },
      healthAdvice: "Cultured buttermilk base soothes the digestive tract, khichdi is easily absorbed by the intestines without causing sluggishness.",
      advancePrepNeeded: "Keep fresh sour curd or buttermilk ready in the fridge.",
      ingredients: ["Sour Curd / Buttermilk", "Besan (Gram flour)", "Cumin", "Mustard Seeds", "Curry leaves", "Cinnamon", "Cloves", "Rice", "Yellow Moong Dal"],
      steps: [
        "Whisk sour curd, besan, grated ginger, green chillies, sugar/jaggery, and water into lump-free liquid.",
        "Boil on medium flame stirring continuously to prevent curdling.",
        "Prepare aromatic vaghar (tadka) with ghee, mustard seeds, cumin, hing, cinnamon, and curry leaves.",
        "Simmer dal-rice khichdi in pressure cooker with ghee and turmeric.",
        "Pour steaming sweet-sour kadhi over khichdi and enjoy."
      ]
    }
  ],

  dinner: [
    {
      id: "dn_1",
      name: "Panchmel Dal Khichdi + Tadka Dahi + Roasted Papad",
      hindiTitle: "पंचमेल दाल खिचड़ी + तड़का दही + भुना पापड़",
      cookTimeMinutes: 20,
      difficulty: "Super Easy",
      tags: ["Ayurvedic Dinner", "Sleep Friendly", "Under 20 Mins"],
      nutrition: { calories: 340, protein: "15g", fiber: "8g" },
      healthAdvice: "Combining five lentils yields an exceptional micronutrient profile while remaining very light on the stomach before bedtime.",
      advancePrepNeeded: "None! Pure comfort ready in 20 minutes.",
      ingredients: ["Mixed Lentils (Panchratna Dal)", "Short-grain Rice", "Cumin Seeds", "Hing", "Turmeric", "Desi Ghee (1 tbsp)", "Curd (Dahi)"],
      steps: [
        "Rinse mixed lentils and rice together in water.",
        "Heat ghee in cooker; splutter cumin, black pepper, and generous hing.",
        "Add dal, rice, turmeric, salt, and 4 cups water for soft porridge consistency.",
        "Pressure cook for 3 whistles.",
        "Whisk curd with roasted cumin and serve with roasted papad."
      ]
    },
    {
      id: "dn_2",
      name: "Lauki Tamatar Curry + Warm Phulkas + Mint Chaas",
      hindiTitle: "लौकी टमाटर करी + नर्म फुल्के + पुदीना छाछ",
      cookTimeMinutes: 25,
      difficulty: "Super Easy",
      tags: ["Hydrating", "Low Calorie", "Detox Friendly"],
      nutrition: { calories: 280, protein: "9g", fiber: "7g" },
      healthAdvice: "Bottle gourd (lauki) contains over 92% water, is zero fat, cooling for the liver, and prevents nocturnal water retention.",
      advancePrepNeeded: "Check if fresh bottle gourd is available in the crisper drawer.",
      ingredients: ["Fresh Tender Lauki (Bottle Gourd)", "Tomatoes", "Ginger", "Cumin Seeds", "Turmeric", "Coriander Powder", "Fresh Coriander"],
      steps: [
        "Peel and dice tender lauki into small cubes.",
        "Sauté cumin, grated ginger, and chopped tomatoes in 1 tsp oil till mushy.",
        "Add lauki, spices, salt, and 1/2 cup water.",
        "Pressure cook for 2 whistles; gently mash a few pieces to create a cozy light curry.",
        "Garnish with coriander and enjoy with 2 warm phulkas."
      ]
    },
    {
      id: "dn_3",
      name: "Light Paneer Bhurji + Multigrain Phulkas + Green Salad",
      hindiTitle: "पनीर भुर्जी + मल्टीग्रेन फुल्के + सलाद",
      cookTimeMinutes: 20,
      difficulty: "Easy",
      tags: ["High Protein", "Quick 20 Mins", "Low Carb"],
      nutrition: { calories: 390, protein: "22g", fiber: "7g" },
      healthAdvice: "Slow-digesting casein protein in paneer repairs muscle tissues overnight while you sleep without carb heaviness.",
      advancePrepNeeded: "Ensure fresh dairy paneer is in the fridge.",
      ingredients: ["Crumbled Fresh Paneer", "Onions", "Tomatoes", "Capsicum", "Green Chillies", "Turmeric", "Kasuri Methi", "Garam Masala"],
      steps: [
        "Heat 1 tsp oil/ghee in pan; sauté finely diced onions, chillies, and capsicum for 3 mins.",
        "Add tomatoes, turmeric, coriander powder, and salt; cook till soft.",
        "Crumble fresh paneer by hand and fold into the vegetable mixture.",
        "Cook on low flame for only 2-3 minutes (avoid overcooking paneer to keep it succulent).",
        "Sprinkle kasuri methi and serve with warm phulkas."
      ]
    },
    {
      id: "dn_4",
      name: "Vegetable Oats Dalia Upma + Lemon Coriander Soup",
      hindiTitle: "वेज ओट्स दलिया + लेमन कोरिएंडर सूप",
      cookTimeMinutes: 20,
      difficulty: "Super Easy",
      tags: ["Heart Healthy", "Light Dinner", "Immunity Boost"],
      nutrition: { calories: 260, protein: "10g", fiber: "9g" },
      healthAdvice: "Beta-glucan fiber in oats lowers LDL cholesterol, while vitamin C in lemon coriander soup bolsters immunity.",
      advancePrepNeeded: "Chop mixed veggies (carrots, beans, capsicum).",
      ingredients: ["Rolled Oats / Broken Wheat", "Mixed chopped Vegetables", "Mustard Seeds", "Curry Leaves", "Ginger", "Lemon Juice", "Fresh Coriander"],
      steps: [
        "Lightly dry roast oats for 2 minutes and set aside.",
        "Temper mustard seeds, curry leaves, and green chillies in pan; add veggies and sauté with salt.",
        "Pour in 2 cups hot water and bring to gentle boil.",
        "Stir in roasted oats gradually, cooking for 3 minutes till thick and fluffy.",
        "Pair with a warm bowl of clear lemon coriander soup."
      ]
    },
    {
      id: "dn_5",
      name: "Masoor Dal Tadka + Jeera Aloo + Roti",
      hindiTitle: "मसूर दाल तड़का + जीरा आलू + रोटी",
      cookTimeMinutes: 25,
      difficulty: "Easy",
      tags: ["Fast Cooking", "Staple Ingredients", "Satisfying"],
      nutrition: { calories: 410, protein: "15g", fiber: "8g" },
      healthAdvice: "Orange Masoor dal cooks in minutes without prior soaking and provides essential iron, potassium, and magnesium.",
      advancePrepNeeded: "Boil 2 potatoes if you prefer quick-toss jeera aloo.",
      ingredients: ["Red Lentils (Dhuli Masoor Dal)", "Potatoes", "Cumin Seeds", "Dry Red Chillies", "Garlic", "Turmeric", "Coriander"],
      steps: [
        "Boil washed red masoor dal with salt and turmeric in cooker for 2 whistles.",
        "In a separate pan, sauté boiled diced potatoes with cumin, turmeric, amchur, and red chilli.",
        "Tarka the dal with ghee, crushed garlic, and dry red chilli.",
        "Serve piping hot with fresh rotis."
      ]
    }
  ]
};

// --- 2. ADVANCE PREPARATION CHECKLIST DATA ---
const DEFAULT_PREP_ITEMS = [
  {
    id: "prep_1",
    title: "Soak Rajma / Kabuli Chana for Tomorrow's Lunch",
    targetMeal: "Tomorrow's Lunch (Rajma / Chana)",
    idealTime: "Tonight by 8:30 PM",
    instructions: "Take 1.5 cups dry rajma or chickpeas, wash twice in cold water, and soak in 4 cups lukewarm water with 1/2 tsp salt.",
    whyItMatters: "Overnight soaking (8+ hours) breaks down complex oligosaccharides, preventing flatulence and reducing pressure cooking time by 60%."
  },
  {
    id: "prep_2",
    title: "Set Fresh Curd (Dahi) for Tomorrow",
    targetMeal: "All Day Meals (Breakfast / Raita)",
    idealTime: "Tonight by 9:00 PM",
    instructions: "Boil 500ml milk, let it cool till lukewarm, whisk in 1 tsp starter curd (jaaman), and place in a warm covered spot.",
    whyItMatters: "Homemade probiotic curd provides live lactobacillus cultures that protect the gut microbiome and aid digestion."
  },
  {
    id: "prep_3",
    title: "Boil 4 Potatoes & Keep in Fridge",
    targetMeal: "Tomorrow's Breakfast (Aloo Paratha / Poha)",
    idealTime: "Tonight post-dinner",
    instructions: "Pressure cook 4 medium potatoes for 2 whistles. Once cooled, peel and place in a clean box in the refrigerator.",
    whyItMatters: "Cold boiled potatoes develop resistant starch (which lowers glycemic spike) and won't turn soggy or tear dough."
  },
  {
    id: "prep_4",
    title: "Wash & Air-Dry Leafy Greens (Palak / Methi)",
    targetMeal: "Tomorrow's Morning Sabzi / Paratha",
    idealTime: "Tonight after sorting",
    instructions: "Submerge greens in salted water to remove grit, lay on a clean cotton towel to dry completely before storing.",
    whyItMatters: "Wet greens turn limp and slimy overnight; dry greens remain crisp and save 15 minutes of morning washing."
  },
  {
    id: "prep_5",
    title: "Soak 5 Almonds & Raisins for Morning Vitality",
    targetMeal: "Early Morning Vitality",
    idealTime: "Tonight before sleeping",
    instructions: "Place 5 almonds and 10 black raisins in a small cup of water.",
    whyItMatters: "Soaking removes tannin inhibitors from almond skins and activates natural enzymes for optimal brain and heart nutrition."
  }
];

// --- 3. PANTRY INGREDIENTS LIST ---
const PANTRY_ITEMS = [
  { id: "p_1", name: "Aloo (Potatoes)", cat: "veggie" },
  { id: "p_2", name: "Poha (Flattened Rice)", cat: "grain" },
  { id: "p_3", name: "Yellow Moong Dal", cat: "grain" },
  { id: "p_4", name: "Toor Dal (Arhar)", cat: "grain" },
  { id: "p_5", name: "Besan (Gram Flour)", cat: "grain" },
  { id: "p_6", name: "Paneer", cat: "dairy" },
  { id: "p_7", name: "Lauki (Bottle Gourd)", cat: "veggie" },
  { id: "p_8", name: "Spinach (Palak)", cat: "veggie" },
  { id: "p_9", name: "Daliya (Broken Wheat)", cat: "grain" },
  { id: "p_10", name: "Dahi / Curd", cat: "dairy" },
  { id: "p_11", name: "Bhindi (Okra)", cat: "veggie" },
  { id: "p_12", name: "Tomatoes & Onions", cat: "veggie" }
];

// --- 4. WEEKLY 7-DAY ROTATION ---
const WEEKLY_PLAN = [
  { day: "Monday", hindi: "सोमवार (Light & Energizing)", bf: 0, ln: 0, dn: 0, prep: "Soak yellow moong dal tonight for Tuesday breakfast chilla." },
  { day: "Tuesday", hindi: "मंगलवार (High Protein Day)", bf: 1, ln: 2, dn: 1, prep: "Boil 3 potatoes tonight for Wednesday morning breakfast." },
  { day: "Wednesday", hindi: "बुधवार (High Fiber Midweek)", bf: 2, ln: 4, dn: 4, prep: "Wash and chop methi leaves tonight for Thursday theplas." },
  { day: "Thursday", hindi: "गुरुवार (Digestive Rest & Detox)", bf: 4, ln: 0, dn: 2, prep: "Soak Rajma in warm water tonight for Friday family feast." },
  { day: "Friday", hindi: "शुक्रवार (Weekend Warmup)", bf: 3, ln: 1, dn: 3, prep: "Soak Kabuli Chana tonight for Saturday Chole." },
  { day: "Saturday", hindi: "शनिवार (Family Flavor Fiesta)", bf: 0, ln: 3, dn: 0, prep: "Set fresh curd (dahi) and check vegetables for Sunday." },
  { day: "Sunday", hindi: "रविवार (Wholesome Indulgence)", bf: 1, ln: 2, dn: 1, prep: "Sort out groceries and wash leafy greens for the coming week." }
];

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
  selectedPlan: "annual"
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
  const prepAlertHtml = meal.advancePrepNeeded && !meal.advancePrepNeeded.startsWith("None")
    ? `<div class="prep-compact-pill">🌙 <strong>रात की तैयारी:</strong> ${meal.advancePrepNeeded}</div>`
    : "";

  const cardDetailsId = `details_${slotKey}`;

  container.innerHTML = `
    <!-- Slot Header, Difficulty Badge & Quick Swap -->
    <div class="meal-card-top">
      <div class="slot-pill ${slot.cls}">
        <span class="slot-icon">${slot.icon}</span>
        <strong>${slot.name}</strong> • <span>${slot.hindi}</span>
      </div>
      <div class="card-top-right">
        ${getDifficultyBadge(meal.difficulty)}
        <button class="btn-swap-clean" onclick="swapMeal('${slotKey}')" title="Swap with another dish">
          🔄 बदलें (Swap)
        </button>
      </div>
    </div>
    
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

function swapMeal(slotKey) {
  if (slotKey === "breakfast") state.currentBfIndex++;
  if (slotKey === "lunch") state.currentLnIndex++;
  if (slotKey === "dinner") state.currentDnIndex++;
  renderTodayMeals();
}

function replanAll() {
  state.currentBfIndex = Math.floor(Math.random() * MEAL_DATABASE.breakfast.length);
  state.currentLnIndex = Math.floor(Math.random() * MEAL_DATABASE.lunch.length);
  state.currentDnIndex = Math.floor(Math.random() * MEAL_DATABASE.dinner.length);
  renderTodayMeals();
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

  container.innerHTML = state.prepList.map((item, index) => `
    <div class="prep-item-clean ${item.isDone ? 'done' : ''}" onclick="togglePrepItem(${index})">
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
  `).join("");
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
  const tabs = document.querySelectorAll(".week-days-scroll .day-tab");
  tabs.forEach(t => {
    if (parseInt(t.dataset.day, 10) === dayIndex) t.classList.add("active");
    else t.classList.remove("active");
  });
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

function orderGrocery(platform) {
  alert(`Redirecting to ${platform} with Opal Luna Labs affiliate tracking code (ref=opal_luna_labs). You earn 3–7% commission on this weekly basket!`);
}

function selectPlan(plan) {
  state.selectedPlan = plan;
  document.getElementById("planMonthly").classList.toggle("active", plan === "monthly");
  document.getElementById("planAnnual").classList.toggle("active", plan === "annual");

  const btn = document.getElementById("startTrialBtn");
  if (btn) {
    btn.textContent = plan === "annual" ? "Start 7-Day Free Trial (₹999/yr)" : "Start Monthly Membership (₹149/mo)";
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
  const toast = document.getElementById("inAppToast");
  const titleEl = document.getElementById("toastTitle");
  const bodyEl = document.getElementById("toastBody");
  if (!toast) return;

  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.textContent = message;

  toast.classList.remove("hidden");
  toast.classList.add("visible");

  // Auto-hide after 8 seconds
  setTimeout(() => {
    closeToast();
  }, 8000);
}

function closeToast() {
  const toast = document.getElementById("inAppToast");
  if (toast) {
    toast.classList.remove("visible");
    setTimeout(() => toast.classList.add("hidden"), 300);
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

  // Top buttons
  document.getElementById("aboutTopBtn")?.addEventListener("click", () => switchTab("about"));
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

  // Subscription action
  document.getElementById("startTrialBtn")?.addEventListener("click", () => {
    alert("Opal Rasoi Pro subscription checkout simulated! Thank you for supporting Opal Luna Labs.");
  });

  // Register Service Worker for PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
