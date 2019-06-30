export const filterSearchProduct = (data, filter) => {
  switch (filter) {
    case "":
      return data;
    case "all":
      return data;
    case "standard":
      return data.filter(filtered => filtered.type === "standard");
    case "economy":
      return data.filter(filtered => filtered.type === "economy");
    case "compact":
      return data.filter(filtered => filtered.type === "compact");
    case "intermediate":
      return data.filter(filtered => filtered.type === "intermediate");
    default:
      return null;
  }
};

export const Products = [
  {
    id: 1,
    productImage: "/images/car_3.png",
    productName: "Ford Escape",
    manufacturer: "Ford",
    value: "ford",
    type: "economy",
    tag: [{ id: 1, name: "top seller" }],
    price: 299.0,
    offer: "Unlimited free miles included",
    info: [
      { type: "5 passengers", icon: "usergroup-add" },
      {
        type: "3 large suitcases, 2 small suitcase",
        icon: "folder",
      },
      { type: "automatic transmission", icon: "font-colors" },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "9 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
  {
    id: 2,
    productImage: "/images/car_1.png",
    productName: "Reno",
    manufacturer: "Reno",
    value: "reno",
    tag: [],
    type: "compact",
    price: 945.25,
    offer: "Unlimited free miles included",
    info: [
      { type: "2 passengers", icon: "usergroup-add" },
      { type: "2 large suitcases, 2 small suitcase", icon: "folder" },

      { type: "automatic transmission", icon: "font-colors" },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "8 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
  {
    id: 8,
    productImage: "/images/car_1.png",
    productName: "Reno",
    manufacturer: "Reno",
    value: "reno",
    tag: [],
    type: "standard",
    price: 1445.25,
    offer: "Unlimited free miles included",
    info: [
      { type: "2 passengers", icon: "usergroup-add" },
      { type: "2 large suitcases, 2 small suitcase", icon: "folder" },
      { type: "automatic transmission", icon: "font-colors" },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "8 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
  {
    id: 3,
    productImage: "/images/car_2.png",
    productName: "Chevy Aveo",
    manufacturer: "Chevrolet",
    value: "chevrolet",
    type: "compact",
    tag: [],
    price: 360.99,
    offer: "Unlimited free miles included",
    info: [
      { type: "5 passengers", icon: "usergroup-add" },
      {
        type: "1 large suitcases, 1 small suitcase",
        icon: "folder",
      },
      {
        type: "automatic transmission",
        icon: "font-colors",
      },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "13 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
  {
    id: 4,
    productImage: "/images/car_1.png",
    productName: "Toyota Corolla",
    manufacturer: "Toyota",
    value: "toyota",
    tag: [],
    type: "intermediate",
    price: 845.25,
    offer: "Unlimited free miles included",
    info: [
      { type: "5 passengers", icon: "usergroup-add" },
      { type: "2 large suitcases, 1 small suitcase", icon: "folder" },

      { type: "automatic transmission", icon: "font-colors" },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "14 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
  {
    id: 5,
    productImage: "/images/bmw.jpeg",
    productName: "BMW",
    manufacturer: "BMW",
    value: "bmw",
    tag: [],
    type: "standard",
    price: 1245.25,
    offer: "Unlimited free miles included",
    info: [
      { type: "5 passengers", icon: "usergroup-add" },
      { type: "2 large suitcases, 1 small suitcase", icon: "folder" },
      { type: "automatic transmission", icon: "font-colors" },
      { type: "air conditioning", icon: "fullscreen" },
      { type: "14 km/l", icon: "car" },
    ],
    addtionalInfo: [
      { info: "6-speaker radio/CD system" },
      { info: "Escaro black fabric" },
      { info: "Hybrid System display" },
      { info: "Vehicle Stability Control" },
      { info: "Hill-start Assist Control" },
    ],
  },
];
