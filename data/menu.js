// Static menu data for the demo.
// 8 items, with categories and fields matching our earlier design.
// Replace imageUrl & modelUrl with your real Cloudinary URLs later.

export const MENU_CATEGORIES = [
  "Burgers",
  "Mains",
  "Sides",
  "Drinks",
];

export const MENU_ITEMS = [
  {
    id: "burger-signature",
    name: "Signature Truffle Burger",
    description:
      "Juicy beef patty, caramelized onions, truffle aioli, and aged cheddar in a brioche bun.",
    price: 850,
    currency: "KES",
    category: "Burgers",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/signature-burger.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/signature-burger.glb",
    isAvailable: true,
    options: {
      spiceLevel: ["Mild", "Medium", "Hot"],
      doneness: ["Medium", "Well Done"],
    },
  },
  {
    id: "burger-chicken",
    name: "Grilled Chicken Burger",
    description:
      "Marinated chicken breast, avocado, tomato, and herb mayo in a toasted bun.",
    price: 780,
    currency: "KES",
    category: "Burgers",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/chicken-burger.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/chicken-burger.glb",
    isAvailable: true,
    options: {
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "main-nyama-choma",
    name: "Nyama Choma Platter",
    description:
      "Charcoal-grilled beef with kachumbari and ugali. Designed for sharing.",
    price: 1450,
    currency: "KES",
    category: "Mains",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/nyama-choma.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/nyama-choma.glb",
    isAvailable: true,
    options: {
      spiceLevel: ["Mild", "Medium", "Hot"],
      portion: ["Single", "Sharing"],
    },
  },
  {
    id: "main-chicken",
    name: "Herb Grilled Chicken",
    description:
      "Half chicken marinated with mixed herbs, served with seasonal vegetables.",
    price: 1250,
    currency: "KES",
    category: "Mains",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/grilled-chicken.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/grilled-chicken.glb",
    isAvailable: true,
    options: {
      side: ["Chips", "Mashed Potatoes", "Rice"],
    },
  },
  {
    id: "side-chips-masala",
    name: "Chips Masala",
    description:
      "Crispy fries tossed in house masala sauce, coriander, and fresh chilli.",
    price: 380,
    currency: "KES",
    category: "Sides",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/chips-masala.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/chips-masala.glb",
    isAvailable: true,
    options: {
      spiceLevel: ["Mild", "Medium", "Hot"],
    },
  },
  {
    id: "side-loaded-fries",
    name: "Loaded Truffle Fries",
    description:
      "Fries tossed in truffle oil, parmesan, and chives. Rich and indulgent.",
    price: 520,
    currency: "KES",
    category: "Sides",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/loaded-fries.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/loaded-fries.glb",
    isAvailable: true,
    options: {},
  },
  {
    id: "drink-passion",
    name: "Passion Mint Cooler",
    description:
      "Fresh passion juice shaken with mint, lime, and a touch of soda.",
    price: 320,
    currency: "KES",
    category: "Drinks",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/passion-mint.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/passion-mint.glb",
    isAvailable: true,
    options: {
      sweetness: ["Less Sugar", "Regular"],
    },
  },
  {
    id: "drink-iced-latte",
    name: "Iced Vanilla Latte",
    description:
      "Double shot espresso over ice with vanilla and cold milk.",
    price: 420,
    currency: "KES",
    category: "Drinks",
    imageUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/iced-latte.jpg",
    modelUrl:
      "https://res.cloudinary.com/demo/image/upload/v123456/iced-latte.glb",
    isAvailable: true,
    options: {
      milk: ["Regular", "Oat"],
    },
  },
];