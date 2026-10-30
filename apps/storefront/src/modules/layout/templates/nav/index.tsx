import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { ELECTRONICS_CATEGORIES } from "@lib/util/electronics"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import StoreBrand from "@modules/common/components/store-brand"
import CartButton from "@modules/layout/components/cart-button"
import Search from "@modules/layout/components/search"
import SideMenu from "@modules/layout/components/side-menu"
import ThemeToggle from "@modules/layout/components/theme-toggle"
import MobileBottomNav from "@modules/layout/components/mobile-bottom-nav"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])
  return (
    <div className="group sticky inset-x-0 top-0 z-50">
      <header className="buyora-navbar relative mx-auto border-x-0 border-t-0 transition-colors duration-300">
        <nav className="content-container !px-3 flex min-h-[4.25rem] w-full items-center justify-between gap-3 py-2 text-sm text-white sm:!px-6 sm:min-h-[5.5rem] sm:gap-5">
          <LocalizedClientLink
            href="/"
            aria-label="Buyora home"
            className="buyora-navbar-brand shrink-0 whitespace-nowrap transition-opacity hover:opacity-85"
            data-testid="nav-store-link"
          >
            <StoreBrand priority />
          </LocalizedClientLink>

          <div className="hidden min-w-0 flex-1 justify-center px-5 small:flex lg:px-8">
            <Search />
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div className="small:hidden">
              <Search />
            </div>
            <ThemeToggle />
            <LocalizedClientLink
              className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#d4af37]/10 active:scale-95 dark:hover:bg-[#d4af37]/10 small:inline-flex"
              href="/account"
              aria-label="Account"
              title="Account"
              data-testid="nav-account-link"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20a7 7 0 0 1 14 0" />
              </svg>
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="inline-flex h-10 items-center gap-2 rounded-full px-3 transition-colors hover:bg-[#d4af37]/10"
                  href="/cart"
                  aria-label="Cart, 0 items"
                  data-testid="nav-cart-link"
                >
                  <CartIcon />
                  <span className="text-sm small:hidden">0</span>
                  <span className="hidden text-sm small:inline">Cart (0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <div className="ml-1 hidden small:flex">
              <SideMenu
                regions={regions}
                locales={locales}
                currentLocale={currentLocale}
              />
            </div>
          </div>
        </nav>

        <div className="hidden border-t border-white/10 text-white small:block">
          <nav
            aria-label="Product categories"
            className="content-container no-scrollbar flex h-12 items-center justify-between gap-5 overflow-x-auto !px-6 text-sm font-medium tracking-wide"
          >
            <LocalizedClientLink
              href="/"
              className="shrink-0 border-b-2 border-[#e5b832] py-3 text-[#e5b832] transition-colors hover:text-white"
            >
              Home
            </LocalizedClientLink>
            {ELECTRONICS_CATEGORIES.map((category) => (
              <LocalizedClientLink
                key={category.label}
                href={`/search?q=${encodeURIComponent(category.query)}`}
                className="shrink-0 whitespace-nowrap py-3 text-white/90 transition-colors hover:text-[#e5b832]"
              >
                {category.label}
              </LocalizedClientLink>
            ))}
            <LocalizedClientLink
              href="/store"
              className="shrink-0 whitespace-nowrap py-3 text-white/90 transition-colors hover:text-[#e5b832]"
            >
              More
            </LocalizedClientLink>
          </nav>
        </div>
      </header>
      <MobileBottomNav
        regions={regions}
        locales={locales}
        currentLocale={currentLocale}
      />
    </div>
  )
}

const CartIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8h14l1 13H4L5 8Z" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
)
