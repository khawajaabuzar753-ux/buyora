import type { ComponentProps } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SideMenu from "@modules/layout/components/side-menu"

type MobileBottomNavProps = ComponentProps<typeof SideMenu>

const iconClass = "h-5 w-5"
const itemClass =
  "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium text-slate-600 transition-colors hover:text-[#9b7413] dark:text-slate-300 dark:hover:text-[#e3c66a]"

const MobileBottomNav = ({
  regions,
  locales,
  currentLocale,
}: MobileBottomNavProps) => {
  return (
    <nav
      aria-label="Mobile navigation"
      className="buyora-mobile-bottom-nav fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-x-0 border-b-0 px-2 pb-[env(safe-area-inset-bottom)] pt-1 small:hidden"
    >
      <LocalizedClientLink href="/" className={itemClass}>
        <svg
          aria-hidden="true"
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />
        </svg>
        <span>Home</span>
      </LocalizedClientLink>
      <a href="#shop-by-category" className={itemClass}>
        <svg
          aria-hidden="true"
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <span>Categories</span>
      </a>
      <div className={`${itemClass} relative`}>
        <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
        <span>Menu</span>
      </div>
      <LocalizedClientLink href="/account" className={itemClass}>
        <svg
          aria-hidden="true"
          className={iconClass}
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
        <span>Account</span>
      </LocalizedClientLink>
    </nav>
  )
}

export default MobileBottomNav
