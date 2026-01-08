const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about",
  },
  {
    id: 3,
    label: "Our Farms",
    path: "/farms",
    children: [
      { id: 31, label: "Cow Farm", path: "/farms/cow-farm" },
      { id: 32, label: "Goat Farm", path: "/farms/goat-farm" },
      { id: 33, label: "Agro Land", path: "/farms/agro-land" },
    ],
  },
  {
    id: 4,
    label: "Products",
    path: "/products",
    children: [
      { id: 41, label: "Milk", path: "/products/milk" },
      { id: 42, label: "Pashu Aahar", path: "/products/pashu-aahar" },
      { id: 43, label: "Goat Feed", path: "/products/goat-feed" },
      { id: 44, label: "Organic Products", path: "/products/organic" },
    ],
  },
  {
    id: 5,
    label: "Services",
    path: "/services",
    children: [
      { id: 51, label: "Veterinary Support", path: "/services/veterinary" },
      { id: 52, label: "Livestock Consulting", path: "/services/consulting" },
      { id: 53, label: "Farm Setup Services", path: "/services/setup" },
    ],
  },
  {
    id: 6,
    label: "Blog",
    path: "/blog",
    children: [
      { id: 61, label: "Farming Tips", path: "/blog/farming-tips" },
      { id: 62, label: "Dairy Health Tips", path: "/blog/dairy-health" },
      { id: 63, label: "Recipes", path: "/blog/recipes" },
      { id: 64, label: "News", path: "/blog/news" },
    ],
  },
  {
    id: 7,
    label: "Contact Us",
    path: "/contact",
  },
];

export default navLinks;
