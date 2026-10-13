/**
 * Kya Banaye — Recipes & Meal Database
 * Pure Vegetarian Indian Household Recipe Data & Weekly Rotations
 */

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
