/**
 * ============================================================
 * MENU DATA
 * ============================================================
 * This is the ONLY file you need to edit to change what the
 * restaurant sells: categories, products, and extras.
 * Nothing here depends on HTML — add or remove items freely.
 * ============================================================
 */

// ------------------------------------------------------------
// CATEGORIES
// order: controls the position in the category bar
// icon:  a single emoji shown next to the category name
// ------------------------------------------------------------
const categories = [
    { id: "fried-chicken", name: "فراخ",       icon: "🍗", order: 1 },
    { id: "sandwiches",    name: "ساندوتشات",   icon: "🥪", order: 2 },
    { id: "grills",        name: "مشويات",      icon: "🍢", order: 3 },
    { id: "meals",         name: "وجبات",       icon: "🍛", order: 4 },
    { id: "crepe",         name: "كريب",        icon: "🌯", order: 5 },
    { id: "drinks",        name: "مشروبات",     icon: "🥤", order: 6 },
    { id: "extras",        name: "إضافات",      icon: "🍟", order: 7 }
];

// ------------------------------------------------------------
// REUSABLE EXTRA GROUPS
// A product references a group by id in its `extraGroups` array.
// `type: "single"`   -> radio buttons  (choose exactly one)
// `type: "multiple"` -> checkboxes     (choose zero or more)
// ------------------------------------------------------------
const extraGroups = {
    sauces: {
        id: "sauces",
        title: "الصوصات",
        type: "multiple",
        options: [
            { id: "extra-garlic",    name: "صوص ثوم",   price: 10 },
            { id: "extra-ketchup",   name: "كاتشب",     price: 0 },
            { id: "extra-bbq",       name: "صوص باربكيو", price: 15 },
            { id: "extra-cheese",    name: "جبنة",       price: 30 }
        ]
    },
    sandwichSize: {
        id: "sandwichSize",
        title: "الحجم",
        type: "single",
        options: [
            { id: "size-regular", name: "عادي",  price: 0 },
            { id: "size-large",   name: "لارج",  price: 25 }
        ]
    },
    mealSides: {
        id: "mealSides",
        title: "الطبق الجانبي",
        type: "single",
        options: [
            { id: "side-rice",   name: "أرز بسمتي", price: 0 },
            { id: "side-fries",  name: "بطاطس",     price: 10 },
            { id: "side-salad",  name: "سلطة",      price: 0 }
        ]
    },
    crepeExtras: {
        id: "crepeExtras",
        title: "إضافات الكريب",
        type: "multiple",
        options: [
            { id: "extra-mozzarella", name: "موتزاريلا إضافية", price: 20 },
            { id: "extra-mushroom",   name: "مشروم",           price: 15 }
        ]
    },
    drinkSize: {
        id: "drinkSize",
        title: "الحجم",
        type: "single",
        options: [
            { id: "drink-small", name: "صغير", price: 0 },
            { id: "drink-large", name: "كبير", price: 10 }
        ]
    }
};

// ------------------------------------------------------------
// PRODUCTS
// image: path to a product photo (falls back to a category
//        placeholder if the file is missing — see js/app.js)
// badge: short label shown on the card, e.g. "الأكثر طلباً"
//        leave as null if not needed
// extraGroups: array of extraGroups keys above (optional)
// ------------------------------------------------------------
const products = [
    {
        id: 1,
        category: "fried-chicken",
        name: "وجبة فراخ بروستد",
        description: "5 قطع بروستد كرسبي + بطاطس + مشروب",
        price: 180,
        image: "assets/products/fried-chicken.svg",
        badge: "الأكثر طلباً",
        available: true,
        extraGroups: ["sauces", "mealSides"]
    },
    {
        id: 2,
        category: "fried-chicken",
        name: "صدور فراخ كرسبي",
        description: "3 قطع صدور فراخ مقرمشة من الخارج وطرية من الداخل",
        price: 160,
        image: "assets/products/fried-chicken.svg",
        badge: null,
        available: true,
        extraGroups: ["sauces"]
    },
    {
        id: 3,
        category: "sandwiches",
        name: "ساندوتش استريبس",
        description: "استريبس فراخ مقرمشة + صوص + خس + مخلل",
        price: 120,
        image: "assets/products/sandwiches.svg",
        badge: "الأكثر طلباً",
        available: true,
        extraGroups: ["sauces", "sandwichSize"]
    },
    {
        id: 4,
        category: "sandwiches",
        name: "ساندوتش هوت دوج",
        description: "سجق هوت دوج + جبنة + صوص خردل",
        price: 90,
        image: "assets/products/sandwiches.svg",
        badge: null,
        available: true,
        extraGroups: ["sauces"]
    },
    {
        id: 5,
        category: "sandwiches",
        name: "ساندوتش برجر لحم",
        description: "قرص لحم بقري 150 جرام + جبنة شيدر + خس وطماطم",
        price: 130,
        image: "assets/products/sandwiches.svg",
        badge: "جديد",
        available: true,
        extraGroups: ["sauces", "sandwichSize"]
    },
    {
        id: 6,
        category: "grills",
        name: "حواوشي إسكندراني",
        description: "لحمة مفرومة متبلة بالتوابل داخل عيش بلدي فرن حطب",
        price: 150,
        image: "assets/products/grills.svg",
        badge: "طلب المطعم",
        available: true,
        extraGroups: ["sauces"]
    },
    {
        id: 7,
        category: "grills",
        name: "مشاوري مشكل",
        description: "كباب + كفتة + شيش طاووق + أرز + سلطة",
        price: 280,
        image: "assets/products/grills.svg",
        badge: null,
        available: true,
        extraGroups: ["mealSides"]
    },
    {
        id: 8,
        category: "grills",
        name: "كباب حلة",
        description: "كباب حلة بطاطس وصلصة طماطم بيتي",
        price: 220,
        image: "assets/products/grills.svg",
        badge: null,
        available: true,
        extraGroups: ["mealSides"]
    },
    {
        id: 9,
        category: "meals",
        name: "وجبة فراخ مشوية",
        description: "نصف فرخة مشوية على الفحم + أرز + سلطة + عيش",
        price: 200,
        image: "assets/products/meals.svg",
        badge: "الأكثر طلباً",
        available: true,
        extraGroups: ["mealSides"]
    },
    {
        id: 10,
        category: "meals",
        name: "وجبة كبدة إسكندراني",
        description: "كبدة إسكندراني بالفلفل الحار + عيش بلدي",
        price: 140,
        image: "assets/products/meals.svg",
        badge: null,
        available: true,
        extraGroups: []
    },
    {
        id: 11,
        category: "crepe",
        name: "كريب فراخ",
        description: "فراخ مشرحة + جبنة موتزاريلا + صوص أبيض",
        price: 140,
        image: "assets/products/crepe.svg",
        badge: "الأكثر طلباً",
        available: true,
        extraGroups: ["crepeExtras"]
    },
    {
        id: 12,
        category: "crepe",
        name: "كريب لحمة مفرومة",
        description: "لحمة مفرومة متبلة + جبنة + صوص طماطم",
        price: 150,
        image: "assets/products/crepe.svg",
        badge: null,
        available: true,
        extraGroups: ["crepeExtras"]
    },
    {
        id: 13,
        category: "crepe",
        name: "كريب نوتيلا",
        description: "نوتيلا + موز + رش بندق مطحون",
        price: 90,
        image: "assets/products/crepe.svg",
        badge: null,
        available: true,
        extraGroups: []
    },
    {
        id: 14,
        category: "extras",
        name: "أرز بسمتي",
        description: "طبق أرز بسمتي مفلفل",
        price: 25,
        image: "assets/products/extras.svg",
        badge: null,
        available: true,
        extraGroups: []
    },
    {
        id: 15,
        category: "extras",
        name: "بطاطس كرسبي",
        description: "بطاطس مقرمشة مع صوص من اختيارك",
        price: 40,
        image: "assets/products/extras.svg",
        badge: "الأكثر طلباً",
        available: true,
        extraGroups: ["sauces"]
    },
    {
        id: 16,
        category: "extras",
        name: "سلطة خضراء",
        description: "خس، طماطم، خيار، جزر مبشور، ليمون",
        price: 20,
        image: "assets/products/extras.svg",
        badge: null,
        available: true,
        extraGroups: []
    },
    {
        id: 17,
        category: "drinks",
        name: "عصير مانجو",
        description: "عصير مانجو طبيعي طازج",
        price: 35,
        image: "assets/products/drinks.svg",
        badge: null,
        available: true,
        extraGroups: ["drinkSize"]
    },
    {
        id: 18,
        category: "drinks",
        name: "كوكاكولا",
        description: "مشروب غازي بارد",
        price: 20,
        image: "assets/products/drinks.svg",
        badge: null,
        available: true,
        extraGroups: ["drinkSize"]
    },
    {
        id: 19,
        category: "drinks",
        name: "مياه معدنية",
        description: "زجاجة مياه معدنية 500 مل",
        price: 10,
        image: "assets/products/drinks.svg",
        badge: null,
        available: false,
        extraGroups: []
    }
];

// ------------------------------------------------------------
// EXPORT — bundles everything into one object used by app.js
// ------------------------------------------------------------
const menuData = {
    categories,
    products,
    extraGroups
};
