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
    },
    {
      id: "bf_6",
      name: "Rava Vegetable Upma with Coconut Chutney",
      hindiTitle: "सूजी / रवा वेज उपमा (नारियल चटनी के साथ)",
      cookTimeMinutes: 15,
      difficulty: "Super Easy",
      tags: ["Quick 15 Mins", "Light & Fluffy", "South Indian"],
      nutrition: { calories: 240, protein: "7g", fiber: "4g" },
      healthAdvice: "Semolina is easily digestible, provides instant glucose energy, and vegetables add essential micronutrients.",
      advancePrepNeeded: "Optional: Dry-roast suji (rawa) for 3 minutes on low flame and store in an airtight jar.",
      ingredients: ["Roasted Suji (Semolina)", "Mustard Seeds", "Curry Leaves", "Green Peas", "Carrots", "Ginger", "Cashews / Peanuts", "Lemon Juice", "Ghee"],
      steps: [
        "Dry roast suji on low heat until aromatic without browning; keep aside.",
        "Heat 1 tbsp ghee in kadai; temper mustard seeds, curry leaves, green chillies, ginger, and cashews.",
        "Add finely chopped carrots and green peas; sauté for 2 mins with salt.",
        "Add 2.5 cups water and bring to a rolling boil.",
        "Slowly pour in roasted suji in a steady stream while whisking continuously to avoid lumps.",
        "Cover on low flame for 2 minutes, stir in fresh lemon juice and fresh grated coconut."
      ]
    },
    {
      id: "bf_7",
      name: "Sprouted Moong Chaat with Pomegranate & Lemon",
      hindiTitle: "अंकुरित मूंग चाट (अनार और नींबू के साथ)",
      cookTimeMinutes: 10,
      difficulty: "Super Easy",
      tags: ["No Cooking", "Superfood", "High Protein"],
      nutrition: { calories: 190, protein: "12g", fiber: "8g" },
      healthAdvice: "Sprouting multiplies vitamin C and bioavailable enzymes by 300%; extraordinary for cellular energy and weight management.",
      advancePrepNeeded: "MANDATORY: Keep green moong sprouts ready in a clean muslin cloth or container.",
      ingredients: ["Sprouted Green Moong", "Pomegranate Seeds (Anaar)", "Cucumber", "Tomatoes", "Green Chillies", "Chaat Masala", "Lemon Juice", "Roasted Cumin Powder"],
      steps: [
        "Optionally steam sprouts for 3 minutes or use fresh raw.",
        "In a mixing bowl, combine sprouts, diced cucumber, tomatoes, and ruby pomegranate seeds.",
        "Season with chaat masala, roasted jeera powder, black salt, and fresh lemon juice.",
        "Toss well and garnish with chopped fresh coriander.",
        "Enjoy fresh with morning tea or warm water."
      ]
    },
    {
      id: "bf_8",
      name: "Stuffed Gobhi & Green Peas Paratha with Curd",
      hindiTitle: "गोभी मटर परांठा (दही और मक्खन के साथ)",
      cookTimeMinutes: 25,
      difficulty: "Moderate",
      tags: ["Winter Comfort", "Wholesome", "High Fiber"],
      nutrition: { calories: 310, protein: "8g", fiber: "7g" },
      healthAdvice: "Cauliflower is packed with sulforaphane and choline, supporting brain health and liver detoxification.",
      advancePrepNeeded: "Grate fresh cauliflower and squeeze excess moisture using a clean cloth tonight.",
      ingredients: ["Whole Wheat Flour (Atta)", "Grated Cauliflower (Gobhi)", "Crushed Green Peas (Matar)", "Ajwain (Carom seeds)", "Green Chillies", "Amchur (Dry Mango)", "Fresh Coriander", "Desi Ghee"],
      steps: [
        "Mix grated goblet and crushed peas with ajwain, amchur, green chillies, and salt.",
        "Roll out a portion of soft whole wheat dough into a medium round.",
        "Place generous stuffing in center, seal edges, and gently roll out without tearing.",
        "Roast on hot tawa with minimal desi ghee until golden brown crisp spots appear on both sides.",
        "Serve hot with a bowl of homemade curd."
      ]
    },
    {
      id: "bf_9",
      name: "Fluffy Sabudana Khichdi with Crunchy Peanuts",
      hindiTitle: "खिली-खिली साबूदाना खिचड़ी (मूंगफली के साथ)",
      cookTimeMinutes: 20,
      difficulty: "Easy",
      tags: ["Gluten Free", "Energy Booster", "Fasting Special"],
      nutrition: { calories: 330, protein: "6g", fiber: "3g" },
      healthAdvice: "Tapioca starch is gentle on the digestive tract and provides instant, sustained stamina without heavy gluten.",
      advancePrepNeeded: "CRITICAL: Rinse sabudana twice, drain, and soak with just enough water to touch surface for 4-5 hours overnight.",
      ingredients: ["Soaked Sabudana (Tapioca pearls)", "Coarsely crushed Roasted Peanuts", "Boiled Potato cubes", "Cumin Seeds", "Green Chillies", "Curry Leaves", "Sendha Namak (Rock Salt)", "Lemon Juice"],
      steps: [
        "Ensure soaked sabudana pearls are soft and separate when pressed between fingers.",
        "Heat ghee in kadai; crackle cumin seeds, green chillies, and curry leaves.",
        "Toss in boiled potato cubes and coarsely crushed roasted peanuts.",
        "Add soaked sabudana, rock salt, and a pinch of sugar; toss gently on medium flame.",
        "Cover for 2 minutes until pearls turn translucent.",
        "Drizzle fresh lemon juice and fresh coriander."
      ]
    },
    {
      id: "bf_10",
      name: "Instant Oats & Vegetable Cheela with Mint Chutney",
      hindiTitle: "इंस्टेंट ओट्स वेज चीला (हरी चटनी के साथ)",
      cookTimeMinutes: 15,
      difficulty: "Super Easy",
      tags: ["Heart Healthy", "Weight Watchers", "Quick 15 Mins"],
      nutrition: { calories: 220, protein: "10g", fiber: "6g" },
      healthAdvice: "Rich in beta-glucan fiber which helps reduce bad cholesterol and keeps you full till lunchtime.",
      advancePrepNeeded: "None! Grind rolled oats into a coarse powder in 30 seconds.",
      ingredients: ["Rolled Oats Powder", "Besan (2 tbsp)", "Grated Carrots", "Finely chopped Capsicum", "Green Chillies", "Ginger Paste", "Ajwain", "Fresh Mint Chutney"],
      steps: [
        "In a bowl, mix oat powder, besan, grated carrots, capsicum, ginger paste, ajwain, and salt.",
        "Whisk in water to make a smooth pouring batter of medium consistency; rest 5 minutes.",
        "Pour a ladleful on a hot greased tawa and spread gently in circular motion.",
        "Cook on medium flame until edges lift; flip and cook the other side until crispy.",
        "Serve hot with coriander-mint chutney."
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
    },
    {
      id: "ln_6",
      name: "Homestyle Dal Makhani + Jeera Rice + Onion Salad",
      hindiTitle: "होमस्टाइल दाल मखनी + जीरा राइस + सलाद",
      cookTimeMinutes: 45,
      difficulty: "Moderate",
      tags: ["Rich & Hearty", "Classic Comfort", "Weekend Special"],
      nutrition: { calories: 470, protein: "18g", fiber: "11g" },
      healthAdvice: "Whole black urad dal provides iron, magnesium, and resistant fiber. Home-cooked with moderate butter keeps it healthy.",
      advancePrepNeeded: "MANDATORY: Soak whole black urad dal and 2 tbsp rajma overnight tonight.",
      ingredients: ["Whole Black Urad Dal", "Rajma (Kidney Beans)", "Tomatoes Pureed", "Ginger-Garlic Paste", "Butter (1 tbsp)", "Kasuri Methi", "Kashmiri Degi Mirch", "Basmati Rice", "Cumin Seeds"],
      steps: [
        "Pressure cook soaked urad dal and rajma with black cardamom and salt for 6-7 whistles until completely soft.",
        "In a heavy bottom pan, cook ginger-garlic paste and fresh tomato puree with deghi mirch until oil separates.",
        "Add boiled dal along with cooking liquor; mash lightly with ladle.",
        "Slow-simmer on low heat for 25-30 minutes, stirring occasionally for natural velvety creaminess.",
        "Finish with 1 tbsp butter and crushed kasuri methi; serve with fragrant jeera rice."
      ]
    },
    {
      id: "ln_7",
      name: "Smoked Baingan Ka Bharta + Tawa Phulkas + Boondi Raita",
      hindiTitle: "भुना हुआ बैंगन का भर्ता + नर्म फुल्के + बूंदी रायता",
      cookTimeMinutes: 35,
      difficulty: "Easy",
      tags: ["Smoky Flavor", "Low Calorie", "Traditional Desi"],
      nutrition: { calories: 360, protein: "11g", fiber: "10g" },
      healthAdvice: "Eggplant is rich in anthocyanins (nasunin) that protect brain cell membranes and promote vascular elasticity.",
      advancePrepNeeded: "Check that a large, light-weight bharta baingan (eggplant) with glossy skin is available.",
      ingredients: ["Large Bharta Baingan (Eggplant)", "Green Peas (Matar)", "Finely chopped Onions", "Tomatoes", "Crushed Garlic", "Green Chillies", "Mustard Oil", "Fresh Coriander"],
      steps: [
        "Slit baingan, stuff garlic cloves inside, coat with drop of oil and roast over open flame until skin is charred.",
        "Peel charred skin, mash pulp thoroughly with a fork.",
        "Heat mustard oil in kadai; sauté chopped onions, green chillies, and green peas until tender.",
        "Add chopped tomatoes, turmeric, red chilli, and coriander powder; cook until soft.",
        "Mix in mashed roasted baingan and stir-fry on high flame for 5 minutes for authentic dhaba aroma.",
        "Serve hot with warm phulkas and cool boondi raita."
      ]
    },
    {
      id: "ln_8",
      name: "Kashmiri Dum Aloo + Steamed Basmati Rice + Curd",
      hindiTitle: "कश्मीरी दम आलू + चावल + ताज़ा दही",
      cookTimeMinutes: 35,
      difficulty: "Moderate",
      tags: ["Aromatic Spices", "Fennel & Ginger Gravy", "Festive"],
      nutrition: { calories: 440, protein: "10g", fiber: "7g" },
      healthAdvice: "Fennel and dry ginger (sonth) aid digestion, reduce acid reflux, and impart deep warming flavor without heavy onion-garlic.",
      advancePrepNeeded: "Boil baby potatoes tonight, peel and keep in fridge.",
      ingredients: ["Baby Potatoes (Boiled & Pricked)", "Whisked Curd (Dahi)", "Kashmiri Red Chilli Powder", "Fennel Powder (Saunf)", "Dry Ginger Powder (Sonth)", "Hing", "Mustard Oil", "Basmati Rice"],
      steps: [
        "Prick boiled baby potatoes with fork; shallow fry in mustard oil until golden crisp.",
        "Whisk curd with Kashmiri chilli, fennel powder, ginger powder, and coriander powder.",
        "Temper mustard oil with hing and cloves; turn flame low and pour in spiced curd mixture whisking rapidly.",
        "Simmer until gravy thickens and oil glistens on top.",
        "Add fried baby potatoes, cover tightly with lid on low heat ('dum') for 10 minutes.",
        "Serve with piping hot steamed basmati rice."
      ]
    },
    {
      id: "ln_9",
      name: "Matar Paneer Masala + Missi Roti + Green Salad",
      hindiTitle: "मटर पनीर मसाला + मिस्सी रोटी + सलाद",
      cookTimeMinutes: 30,
      difficulty: "Easy",
      tags: ["High Protein", "Family Feast", "Iron & Calcium"],
      nutrition: { calories: 490, protein: "23g", fiber: "10g" },
      healthAdvice: "Combining cottage cheese (paneer) with chickpea flour (missi roti) provides an exceptional dual vegetarian protein punch.",
      advancePrepNeeded: "Thaw green peas and ensure fresh paneer is available in fridge.",
      ingredients: ["Fresh Paneer Cubes", "Tender Green Peas (Matar)", "Onions", "Tomatoes", "Ginger-Garlic", "Garam Masala", "Kasuri Methi", "Atta & Besan for Missi Roti"],
      steps: [
        "Sauté onions, ginger, garlic, and tomatoes; puree into a velvety masala base.",
        "Cook puree in 1 tsp ghee until oil droplets separate.",
        "Add green peas and 1 cup warm water; simmer until peas are tender.",
        "Gently slide in soft paneer cubes; simmer on low heat for 3 minutes.",
        "Knead whole wheat flour with besan, ajwain, and kasuri methi; roll and cook crisp missi rotis.",
        "Serve fresh with crunchy onion-cucumber salad."
      ]
    },
    {
      id: "ln_10",
      name: "Kathiyawadi Veggie Khichdi + Kadhi + Roasted Papad",
      hindiTitle: "काठियावाड़ी वेज खिचड़ी + कढ़ी + भुना पापड़",
      cookTimeMinutes: 30,
      difficulty: "Super Easy",
      tags: ["One-Pot Meal", "Gut Healing", "Nutrient Dense"],
      nutrition: { calories: 400, protein: "15g", fiber: "9g" },
      healthAdvice: "Slow-cooked lentil and vegetable khichdi provides clean glycogen replenishment without post-lunch lethargy.",
      advancePrepNeeded: "None! Chop any vegetables available in the crisper.",
      ingredients: ["Rice", "Toor Dal & Moong Dal", "Diced Potatoes", "Green Peas", "Carrots", "Raw Peanuts", "Desi Ghee", "Whole Spices", "Sour Curd & Besan for Kadhi"],
      steps: [
        "Rinse rice, toor dal, and moong dal together.",
        "Heat ghee in pressure cooker; temper with mustard seeds, cumin, cloves, cinnamon, and whole red chillies.",
        "Add diced veggies, raw peanuts, turmeric, and hing; sauté for 1 minute.",
        "Add washed grains, 4 cups water, and salt; pressure cook for 3 whistles.",
        "Simmer sweet-and-sour spiced Gujarati kadhi on the side.",
        "Top hot khichdi with a dollop of pure desi ghee and enjoy with roasted papad."
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
    },
    {
      id: "dn_6",
      name: "Moong Dal Soup + Sautéed Garlic Paneer & Veggies",
      hindiTitle: "मूंग दाल सूप + गार्लिक पनीर व सब्जियां",
      cookTimeMinutes: 20,
      difficulty: "Super Easy",
      tags: ["High Protein", "Low Carb", "Keto Friendly"],
      nutrition: { calories: 310, protein: "21g", fiber: "6g" },
      healthAdvice: "Light, ultra-low glycemic night meal that prevents bloating and supports overnight fat metabolism.",
      advancePrepNeeded: "None! Yellow moong dal cooks in 10 minutes.",
      ingredients: ["Yellow Moong Dal", "Fresh Paneer Cubes", "French Beans", "Carrots", "Garlic Cloves", "Black Pepper", "Lemon Juice", "Ghee (1 tsp)"],
      steps: [
        "Pressure cook yellow moong dal with turmeric and ginger; blend into a light, velvety soup.",
        "Season soup with freshly cracked black pepper and a squeeze of fresh lemon juice.",
        "In a hot pan, add 1 tsp ghee; toss sliced garlic, carrots, french beans, and paneer cubes for 4 minutes until crisp-tender.",
        "Season veggies with rock salt and oregano/chaat masala.",
        "Enjoy warm soup alongside sautéed protein bowl."
      ]
    },
    {
      id: "dn_7",
      name: "Aloo Gobhi Matar Rasedar + Soft Phulkas + Salad",
      hindiTitle: "आलू गोभी मटर रसेदार + नर्म फुल्के + सलाद",
      cookTimeMinutes: 25,
      difficulty: "Super Easy",
      tags: ["Home Comfort", "Soul Food", "Under 30 Mins"],
      nutrition: { calories: 320, protein: "9g", fiber: "8g" },
      healthAdvice: "Cruciferous cauliflower combined with tender green peas and light tomato broth provides deep antioxidant satiety.",
      advancePrepNeeded: "Wash cauliflower florets in warm salted water.",
      ingredients: ["Cauliflower Florets (Gobhi)", "Diced Potatoes (Aloo)", "Green Peas (Matar)", "Tomato Puree", "Ginger", "Cumin", "Turmeric", "Coriander Powder", "Phulkas"],
      steps: [
        "Sauté cumin and grated ginger in 1 tbsp oil; add fresh tomato puree and cook till aromatic.",
        "Toss in potato cubes, cauliflower florets, and green peas.",
        "Add turmeric, coriander powder, Kashmiri chilli, salt, and 1.5 cups water.",
        "Pressure cook for 2 whistles on medium heat.",
        "Garnish with chopped coriander and serve warm with 2 light whole wheat phulkas."
      ]
    },
    {
      id: "dn_8",
      name: "Besan Shimla Mirch (Capsicum Stir-Fry) + Phulkas + Chaas",
      hindiTitle: "बेसन शिमला मिर्च + फुल्के + पुदीना छाछ",
      cookTimeMinutes: 20,
      difficulty: "Super Easy",
      tags: ["Quick 20 Mins", "Crispy & Savory", "Low GI"],
      nutrition: { calories: 290, protein: "11g", fiber: "7g" },
      healthAdvice: "Bell peppers are among the richest sources of dietary vitamin C and lutein, while besan adds low-glycemic vegetable protein.",
      advancePrepNeeded: "Dry roast 3 tbsp besan for 2 minutes to keep it nutty and ready.",
      ingredients: ["Green Capsicum (Diced Shimla Mirch)", "Roasted Besan (Gram Flour)", "Cumin Seeds", "Hing", "Turmeric", "Amchur (Dry Mango)", "Red Chilli Powder", "Whole Wheat Phulkas"],
      steps: [
        "Heat 1 tbsp oil; splutter cumin seeds and generous hing.",
        "Add diced crunchy capsicum and sauté on medium-high flame for 3 minutes.",
        "Lower flame; sprinkle roasted besan, turmeric, amchur, coriander powder, and salt evenly over peppers.",
        "Sprinkle 1 tbsp water, cover with lid for 2 minutes so the besan cooks and adheres to capsicum.",
        "Stir gently until fragrant and slightly crispy; serve with warm rotis."
      ]
    },
    {
      id: "dn_9",
      name: "Dal Palak (Spinach Lentil Curry) + Steamed Rice + Papad",
      hindiTitle: "पौष्टिक दाल पालक + उबले चावल + पापड़",
      cookTimeMinutes: 25,
      difficulty: "Easy",
      tags: ["Iron Powerhouse", "Deep Nutrition", "Easy Digestion"],
      nutrition: { calories: 350, protein: "16g", fiber: "9g" },
      healthAdvice: "Leafy spinach simmered with yellow lentils releases easily absorbable folate, non-heme iron, and dietary fibers.",
      advancePrepNeeded: "Wash spinach leaves thoroughly and finely shred tonight.",
      ingredients: ["Toor Dal or Moong Dal", "Fresh Shredded Spinach (Palak)", "Garlic Cloves", "Cumin Seeds", "Desi Ghee", "Tomatoes", "Turmeric", "Steamed Basmati Rice"],
      steps: [
        "Pressure cook washed dal and shredded spinach together with turmeric, salt, and water for 3 whistles.",
        "Heat 1 tbsp ghee in tadka pan; fry cumin seeds, generous crushed garlic, and whole dry red chilli until garlic turns light golden.",
        "Add chopped tomato to tadka and cook until soft.",
        "Pour sizzling fragrant garlic tadka over cooked dal palak.",
        "Serve hot with steamed rice and crunchy roasted papad."
      ]
    },
    {
      id: "dn_10",
      name: "Fragrant Vegetable Pulao with Cucumber & Mint Raita",
      hindiTitle: "वेज पुलाव + खीरा पुदीना रायता",
      cookTimeMinutes: 25,
      difficulty: "Easy",
      tags: ["One-Pot Dinner", "Cooling & Light", "Fragrant"],
      nutrition: { calories: 370, protein: "11g", fiber: "7g" },
      healthAdvice: "Cooling cucumber mint raita offsets whole spices, creating an easily assimilable, soothing dinner for restful sleep.",
      advancePrepNeeded: "Soak basmati rice for 20 minutes before cooking.",
      ingredients: ["Basmati Rice", "Diced Carrots", "Green Peas", "French Beans", "Whole Spices (Cinnamon, Bay Leaf, Cardamom)", "Desi Ghee", "Fresh Cucumber & Curd for Raita"],
      steps: [
        "Heat 1 tbsp ghee in cooker; sauté cinnamon, cloves, bay leaf, and cardamom until fragrant.",
        "Add sliced onions, diced carrots, green peas, and beans; sauté for 2 mins.",
        "Add soaked basmati rice, 1.75 cups water, salt, and a pinch of garam masala.",
        "Pressure cook for 1 whistle on medium flame; let steam release naturally.",
        "Gently fluff rice grains with a fork.",
        "Serve with chilled cucumber-mint curd raita."
      ]
    }
  ]
};

// --- 2. ADVANCE PREPARATION CHECKLIST DATA ---
const DEFAULT_PREP_ITEMS = [
  {
    id: "prep_1",
    title: "Soak Rajma / Kabuli Chana for Tomorrow's Lunch",
    titleHi: "कल के दोपहर के लिए राजमा / काबुली चना भिगोएं",
    targetMeal: "Tomorrow's Lunch (Rajma / Chana)",
    targetMealHi: "कल का दोपहर (राजमा / छोले)",
    idealTime: "Tonight by 8:30 PM",
    idealTimeHi: "आज रात ८:३० बजे तक",
    instructions: "Take 1.5 cups dry rajma or chickpeas, wash twice in cold water, and soak in 4 cups lukewarm water with 1/2 tsp salt.",
    instructionsHi: "१.५ कप सूखे राजमा या छोले धोकर ४ कप गुनगुने पानी में चुटकी भर नमक डालकर भिगो दें।",
    whyItMatters: "Overnight soaking (8+ hours) breaks down complex oligosaccharides, preventing flatulence and reducing pressure cooking time by 60%.",
    whyItMattersHi: "रात भर भिगोने से पाचन सुधरता है और कुकर में सीटी का समय ६०% कम हो जाता है।"
  },
  {
    id: "prep_2",
    title: "Set Fresh Curd (Dahi) for Tomorrow",
    titleHi: "कल के लिए ताज़ा मीठा दही जमाएं",
    targetMeal: "All Day Meals (Breakfast / Raita)",
    targetMealHi: "दिन भर के भोजन (नाश्ता / रायता)",
    idealTime: "Tonight by 9:00 PM",
    idealTimeHi: "आज रात ९:०० बजे तक",
    instructions: "Boil 500ml milk, let it cool till lukewarm, whisk in 1 tsp starter curd (jaaman), and place in a warm covered spot.",
    instructionsHi: "आधा लीटर दूध गुनगुना करें, १ चम्मच जामन मिलाएं और ढककर गर्म जगह रखें।",
    whyItMatters: "Homemade probiotic curd provides live lactobacillus cultures that protect the gut microbiome and aid digestion.",
    whyItMattersHi: "घर का जमाया ताज़ा दही पेट के लिए अमृत समान प्रोबायोटिक है।"
  },
  {
    id: "prep_3",
    title: "Boil 4 Potatoes & Keep in Fridge",
    titleHi: "४ आलू उबालकर फ्रिज में रखें",
    targetMeal: "Tomorrow's Breakfast (Aloo Paratha / Poha)",
    targetMealHi: "कल का नाश्ता (आलू पराठा / पोहा)",
    idealTime: "Tonight post-dinner",
    idealTimeHi: "आज रात खाने के बाद",
    instructions: "Pressure cook 4 medium potatoes for 2 whistles. Once cooled, peel and place in a clean box in the refrigerator.",
    instructionsHi: "४ मध्यम आलू २ सीटी तक उबालें, छीलकर साफ डिब्बे में फ्रिज में रख लें।",
    whyItMatters: "Cold boiled potatoes develop resistant starch (which lowers glycemic spike) and won't turn soggy or tear dough.",
    whyItMattersHi: "ठंडे उबले आलू से पराठे फटते नहीं हैं और सुबह का समय बचता है।"
  },
  {
    id: "prep_4",
    title: "Wash & Air-Dry Leafy Greens (Palak / Methi)",
    titleHi: "हरी पत्तेदार सब्ज़ियां (पालक / मेथी) धोकर सुखाएं",
    targetMeal: "Tomorrow's Morning Sabzi / Paratha",
    targetMealHi: "कल सुबह की सब्ज़ी / थेपला",
    idealTime: "Tonight after sorting",
    idealTimeHi: "आज रात सोने से पहले",
    instructions: "Submerge greens in salted water to remove grit, lay on a clean cotton towel to dry completely before storing.",
    instructionsHi: "पत्तों को नमक वाले पानी में साफ करें और सूती कपड़े पर सुखाकर रखें।",
    whyItMatters: "Wet greens turn limp and slimy overnight; dry greens remain crisp and save 15 minutes of morning washing.",
    whyItMattersHi: "सूखे पत्ते ताज़ा रहते हैं और सुबह धोने व काटने के १५ मिनट बचते हैं।"
  },
  {
    id: "prep_5",
    title: "Soak 5 Almonds & Raisins for Morning Vitality",
    titleHi: "सुबह की ऊर्जा के लिए ५ बादाम व मुनक्का भिगोएं",
    targetMeal: "Early Morning Vitality",
    targetMealHi: "सुबह की ताजगी व स्फूर्ति",
    idealTime: "Tonight before sleeping",
    idealTimeHi: "आज रात सोने से पहले",
    instructions: "Place 5 almonds and 10 black raisins in a small cup of water.",
    instructionsHi: "५ बादाम और १० मुनक्का एक कटोरी साफ पानी में भिगो दें।",
    whyItMatters: "Soaking removes tannin inhibitors from almond skins and activates natural enzymes for optimal brain and heart nutrition.",
    whyItMattersHi: "भीगे हुए बादाम के पोषक तत्व शरीर में तुरंत अवशोषित होते हैं।"
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
  { id: "p_12", name: "Tomatoes & Onions", cat: "veggie" },
  { id: "p_13", name: "Matar (Green Peas)", cat: "veggie" },
  { id: "p_14", name: "Gobhi (Cauliflower)", cat: "veggie" },
  { id: "p_15", name: "Suji / Rawa (Semolina)", cat: "grain" },
  { id: "p_16", name: "Oats", cat: "grain" },
  { id: "p_17", name: "Rajma (Kidney Beans)", cat: "grain" },
  { id: "p_18", name: "Kabuli Chana (Chickpeas)", cat: "grain" },
  { id: "p_19", name: "Shimla Mirch (Capsicum)", cat: "veggie" }
];

// --- 4. WEEKLY 7-DAY ROTATION ---
const WEEKLY_PLAN = [
  { day: "Monday", dayHi: "सोमवार", themeEn: "Light & Energizing", themeHi: "हल्का व स्फूर्तिदायक", bf: 0, ln: 0, dn: 0, prep: "Soak yellow moong dal tonight for Tuesday breakfast chilla.", prepHi: "मंगलवार के चीले के लिए आज रात मूंग दाल भिगो दें।" },
  { day: "Tuesday", dayHi: "मंगलवार", themeEn: "High Protein Day", themeHi: "उच्च प्रोटीन दिवस", bf: 1, ln: 2, dn: 1, prep: "Wash and prep daliya vegetables tonight for Wednesday breakfast.", prepHi: "बुधवार के दलिया के लिए सब्ज़ियां आज रात तैयार रखें।" },
  { day: "Wednesday", dayHi: "बुधवार", themeEn: "High Fiber Midweek", themeHi: "पाचन व फाइबर दिवस", bf: 2, ln: 4, dn: 4, prep: "Wash and chop methi leaves tonight for Thursday theplas.", prepHi: "गुरुवार के थेपलों के लिए आज रात मेथी धोकर काट लें।" },
  { day: "Thursday", dayHi: "गुरुवार", themeEn: "Digestive Rest & Detox", themeHi: "हल्का व सात्विक आहार", bf: 4, ln: 6, dn: 2, prep: "Soak Rajma in warm water tonight for Friday family feast.", prepHi: "शुक्रवार के भोजन के लिए आज रात गुनगुने पानी में राजमा भिगोएं।" },
  { day: "Friday", dayHi: "शुक्रवार", themeEn: "Weekend Warmup", themeHi: "सप्ताहांत की तैयारी", bf: 3, ln: 1, dn: 3, prep: "Soak Kabuli Chana tonight for Saturday Chole.", prepHi: "शनिवार के छोलों के लिए आज रात काबुली चना भिगो दें।" },
  { day: "Saturday", dayHi: "शनिवार", themeEn: "Family Flavor Fiesta", themeHi: "परिवार का पसंदीदा स्वाद", bf: 5, ln: 3, dn: 7, prep: "Set fresh curd (dahi) and check vegetables for Sunday.", prepHi: "रविवार के लिए ताज़ा मीठा दही जमाएं और सब्ज़ियां जांचें।" },
  { day: "Sunday", dayHi: "रविवार", themeEn: "Wholesome Indulgence", themeHi: "संपूर्ण पारिवारिक भोज", bf: 7, ln: 5, dn: 9, prep: "Sort out groceries and wash leafy greens for the coming week.", prepHi: "अगले सप्ताह के लिए रसोई का सामान और सब्ज़ियां व्यवस्थित करें।" }
];
