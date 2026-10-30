export const ELECTRONICS_CATEGORIES = [
  { label: "Mobiles", query: "mobile", image: "/categories/mobile.svg" },
  { label: "Laptops", query: "laptop", image: "/categories/laptop.svg" },
  {
    label: "TV & Home Appliances",
    query: "television",
    image: "/categories/tv-appliances.svg",
  },
  { label: "Gaming", query: "gaming", image: "/categories/gaming.svg" },
  {
    label: "Accessories",
    query: "accessories",
    image: "/categories/accessories.svg",
  },
  {
    label: "Smart Watches",
    query: "smart watch",
    image: "/categories/smart-watches.svg",
  },
] as const

const ELECTRONICS_SEARCH_CATEGORY_VALUES = [
  "Mobile",
  "Mobiles",
  "Mobile Phones",
  "Cell Phones",
  "Phones",
  "Smartphones",
  "Smart Phones",
  "Laptop",
  "Laptops",
  "Computers",
  "Computer",
  "Television",
  "Televisions",
  "TV",
  "TVs",
  "TV & Home Appliances",
  "Home Appliances",
  "Refrigerator",
  "Refrigerators",
  "Fridge",
  "Fridges",
  "Gaming",
  "Gaming Consoles",
  "Accessories",
  "Electronics Accessories",
  "Smart Watch",
  "Smart Watches",
  "Wearables",
  "Audio",
  "Headphones",
  "Speakers",
  "Cameras",
] as const

const ELECTRONICS_CATEGORY_ALIASES = new Set(
  ELECTRONICS_SEARCH_CATEGORY_VALUES.map((category) => category.toLowerCase())
)

export const ELECTRONICS_SEARCH_FILTERS = ELECTRONICS_SEARCH_CATEGORY_VALUES.map(
  (category) => `category:"${category}"`
).join(" OR ")

type CategorizedProduct = {
  categories?: ({ name?: string | null } | null)[] | null
}

export const isElectronicsProduct = (product: CategorizedProduct) =>
  (product.categories ?? []).some((category) =>
    ELECTRONICS_CATEGORY_ALIASES.has(category?.name?.trim().toLowerCase() ?? "")
  )

export const isElectronicsSearchHit = (hit: { category?: string[] }) =>
  (hit.category ?? []).some((category) =>
    ELECTRONICS_CATEGORY_ALIASES.has(category.trim().toLowerCase())
  )
