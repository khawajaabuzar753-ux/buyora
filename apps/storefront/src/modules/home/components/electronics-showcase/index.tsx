import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ELECTRONICS_CATEGORIES } from "@lib/util/electronics"

type ProductKind = "phone" | "television" | "fridge"

const demoProducts: {
  category: string
  description: string
  kind: ProductKind
  name: string
  price: string
  query: string
}[] = [
  {
    category: "Mobiles",
    description: "A powerful everyday smartphone",
    kind: "phone",
    name: "Nova X Pro Smartphone",
    price: "$899",
    query: "mobile",
  },
  {
    category: "TV & Home Appliances",
    description: "Immersive 4K viewing for every room",
    kind: "television",
    name: "Vision 55-inch 4K TV",
    price: "$749",
    query: "television",
  },
  {
    category: "TV & Home Appliances",
    description: "Spacious, energy-smart cooling",
    kind: "fridge",
    name: "Frostline French Door Fridge",
    price: "$1,299",
    query: "refrigerator",
  },
]

const DemoProductArt = ({ kind }: { kind: ProductKind }) => (
  <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#eef1f4] via-[#f8f7f3] to-[#e8dfcd] dark:from-[#171c22] dark:via-[#20252b] dark:to-[#292319] sm:h-48">
    {kind === "phone" ? (
      <svg aria-hidden="true" className="h-32 w-32 drop-shadow-xl" viewBox="0 0 160 160">
        <defs>
          <linearGradient id="phone-screen" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#102d4a" />
            <stop offset="0.55" stopColor="#5f91bd" />
            <stop offset="1" stopColor="#e0b955" />
          </linearGradient>
        </defs>
        <rect x="48" y="12" width="64" height="136" rx="14" fill="#14171b" />
        <rect x="53" y="18" width="54" height="123" rx="10" fill="url(#phone-screen)" />
        <path d="M57 116c16-34 34-48 48-57v74H57z" fill="#f3c75e" opacity=".8" />
        <rect x="72" y="22" width="16" height="3" rx="2" fill="#111" />
      </svg>
    ) : kind === "television" ? (
      <svg aria-hidden="true" className="h-32 w-40 drop-shadow-xl" viewBox="0 0 200 150">
        <defs>
          <linearGradient id="tv-screen" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#12253b" />
            <stop offset=".55" stopColor="#34729b" />
            <stop offset="1" stopColor="#e6bb58" />
          </linearGradient>
        </defs>
        <rect x="15" y="18" width="170" height="102" rx="7" fill="#17191d" />
        <rect x="21" y="24" width="158" height="90" rx="3" fill="url(#tv-screen)" />
        <path d="m29 103 43-42 26 24 22-35 52 53H29Z" fill="#b9d1d8" opacity=".72" />
        <path d="m72 120-10 15m76-15 10 15M57 136h86" stroke="#26282b" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ) : (
      <svg aria-hidden="true" className="h-36 w-32 drop-shadow-xl" viewBox="0 0 150 170">
        <defs>
          <linearGradient id="fridge-body" x1="0" x2="1">
            <stop stopColor="#bbc4ca" />
            <stop offset=".45" stopColor="#f8fafb" />
            <stop offset="1" stopColor="#a4afb7" />
          </linearGradient>
        </defs>
        <rect x="30" y="10" width="90" height="148" rx="12" fill="url(#fridge-body)" stroke="#89949b" strokeWidth="2" />
        <path d="M32 78h86" stroke="#89949b" strokeWidth="2" />
        <path d="M105 34v30m0 28v42" stroke="#68747c" strokeWidth="4" strokeLinecap="round" />
        <path d="M43 162h12m40 0h12" stroke="#68747c" strokeWidth="5" strokeLinecap="round" />
        <circle cx="47" cy="27" r="3" fill="#d3a636" />
      </svg>
    )}
  </div>
)

const ElectronicsShowcase = () => (
  <>
    <section
      id="shop-by-category"
      className="scroll-mt-24 border-y border-[#e7e1d5] bg-[#f7f6f2] py-7 dark:border-white/10 dark:bg-[#11161b] sm:py-10"
    >
      <div className="content-container">
        <div className="mb-5 flex items-center justify-between sm:mb-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7413] dark:text-[#e3c66a]">
              Find your next upgrade
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
              Top Categories
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="text-xs font-semibold text-slate-700 transition-colors hover:text-[#9b7413] dark:text-slate-200 dark:hover:text-[#e3c66a]"
          >
            View all <span aria-hidden="true">→</span>
          </LocalizedClientLink>
        </div>

        <ul className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 sm:gap-4">
          {ELECTRONICS_CATEGORIES.map((category) => (
            <li key={category.label}>
              <LocalizedClientLink
                href={`/search?q=${encodeURIComponent(category.query)}`}
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-2 py-3 text-center shadow-[0_3px_12px_rgba(16,24,40,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]/60 hover:shadow-md dark:border-white/10 dark:bg-[#1b2026] dark:hover:border-[#d4af37]/45 sm:min-h-32 sm:gap-3 sm:rounded-2xl"
              >
                <span className="flex h-14 w-20 items-center justify-center overflow-hidden rounded-xl transition-transform duration-200 group-hover:scale-105 sm:h-[4.5rem] sm:w-24">
                  <img
                    src={category.image}
                    alt=""
                    aria-hidden="true"
                    width="128"
                    height="96"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="line-clamp-2 text-[10px] font-semibold leading-tight text-slate-800 dark:text-white sm:text-xs">
                  {category.label}
                </span>
              </LocalizedClientLink>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-white py-9 dark:bg-[#0b1015] sm:py-14">
      <div className="content-container">
        <div className="mb-5 flex items-end justify-between sm:mb-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7413] dark:text-[#e3c66a]">
              A first look
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
              Electronics to explore
            </h2>
          </div>
          <span className="rounded-full border border-[#e5d7b5] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#8a6711] dark:border-[#d4af37]/30 dark:text-[#e3c66a]">
            Demo previews
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {demoProducts.map((product) => (
            <li
              key={product.name}
              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#151a20] sm:p-4"
            >
              <LocalizedClientLink
                href={`/search?q=${encodeURIComponent(product.query)}`}
                className="group block"
              >
                <DemoProductArt kind={product.kind} />
                <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-4">
                  <div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {product.category}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-[#8a6711] dark:text-white dark:group-hover:text-[#e3c66a]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {product.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-slate-900 dark:text-white">
                    {product.price}
                  </span>
                </div>
                <span className="sr-only">Search real {product.category} products</span>
              </LocalizedClientLink>
              <p className="mt-3 border-t border-slate-100 px-1 pt-2 text-[9px] uppercase tracking-[0.14em] text-slate-400 dark:border-white/10">
                Concept preview · not for purchase
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
)

export default ElectronicsShowcase
