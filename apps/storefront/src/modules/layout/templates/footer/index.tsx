import { ELECTRONICS_CATEGORIES } from "@lib/util/electronics"
import { STORE_NAME } from "@lib/util/site"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import StoreBrand from "@modules/common/components/store-brand"

const linkClass =
  "text-sm text-slate-300/75 transition-colors hover:text-[#e3c66a]"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1722] text-white">
      <div className="content-container">
        <div className="grid gap-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-xs">
            <LocalizedClientLink
              href="/"
              className="transition-opacity hover:opacity-85"
            >
              <StoreBrand />
            </LocalizedClientLink>
            <p className="mt-4 text-sm leading-6 text-slate-300/70">
              Thoughtfully selected technology for the way you live, work, and
              play.
            </p>
            <LocalizedClientLink
              href="/store"
              className="mt-6 inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 text-xs font-semibold text-white transition-colors hover:border-market-yellow hover:text-market-yellow"
            >
              Explore products
            </LocalizedClientLink>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Electronics
            </h2>
            <ul className="mt-4 grid gap-3">
              {ELECTRONICS_CATEGORIES.map((category) => (
                <li key={category.label}>
                  <LocalizedClientLink
                    className={linkClass}
                    href={`/search?q=${encodeURIComponent(category.query)}`}
                  >
                    {category.label}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Customer care
            </h2>
            <ul className="mt-4 grid gap-3">
              <li>
                <LocalizedClientLink className={linkClass} href="/shipping">
                  Shipping information
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/returns">
                  Returns
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/terms">
                  Terms of service
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/privacy">
                  Privacy policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/contact">
                  Contact
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Your account
            </h2>
            <ul className="mt-4 grid gap-3">
              <li>
                <LocalizedClientLink className={linkClass} href="/account">
                  Sign in
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/cart">
                  Shopping cart
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className={linkClass} href="/search">
                  Search products
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</p>
          <p>Find your next everyday essential.</p>
        </div>
      </div>
    </footer>
  )
}
