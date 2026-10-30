"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import StoreBrand from "@modules/common/components/store-brand"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"


const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex h-full items-center">
        <Popover className="flex h-full">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  aria-label="Open navigation menu"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#26231c] transition-colors duration-200 hover:bg-[#d4af37]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-market-yellow dark:text-[#e3c66a] dark:hover:bg-[#d4af37]/10 small:h-10 small:w-10"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition-opacity duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <PopoverPanel
                  static
                  portal
                  className="fixed inset-0 z-[60] text-slate-950 dark:text-white"
                >
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={close}
                    className="absolute inset-0 h-full w-full cursor-default bg-slate-950/45 backdrop-blur-md"
                    data-testid="side-menu-backdrop"
                  />
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition duration-[250ms] ease-out"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition duration-200 ease-in"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <div
                      data-testid="nav-menu-popup"
                      className="glass-drawer-panel absolute inset-y-0 right-0 flex w-[min(22rem,calc(100vw-1rem))] flex-col justify-between rounded-l-3xl p-6"
                    >
                      <div className="flex items-center justify-between">
                        <StoreBrand />
                        <button
                          type="button"
                          data-testid="close-menu-button"
                          onClick={close}
                          aria-label="Close menu"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-900/5 dark:hover:bg-white/10"
                        >
                          <XMark />
                        </button>
                      </div>
                      <ul className="flex flex-col items-start justify-start gap-6">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name}>
                              <LocalizedClientLink
                                href={href}
                                className="text-3xl font-semibold tracking-tight transition-colors hover:text-[#a47b10] dark:hover:text-[#e3c66a]"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                {name}
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>
                      <div className="flex flex-col gap-y-6 border-t border-slate-900/10 pt-5 text-sm dark:border-white/10">
                        {!!locales?.length && (
                          <div
                            className="flex justify-between"
                            onMouseEnter={languageToggleState.open}
                            onMouseLeave={languageToggleState.close}
                          >
                            <LanguageSelect
                              toggleState={languageToggleState}
                              locales={locales}
                              currentLocale={currentLocale}
                            />
                            <ArrowRightMini
                              className={clx(
                                "transition-transform duration-150",
                                languageToggleState.state ? "-rotate-90" : ""
                              )}
                            />
                          </div>
                        )}
                        <div
                          className="flex justify-between"
                          onMouseEnter={countryToggleState.open}
                          onMouseLeave={countryToggleState.close}
                        >
                          {regions && (
                            <CountrySelect
                              toggleState={countryToggleState}
                              regions={regions}
                            />
                          )}
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150",
                              countryToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                        <Text className="flex justify-between txt-compact-small">
                          © {new Date().getFullYear()} Buyora. All rights
                          reserved.
                        </Text>
                      </div>
                    </div>
                  </Transition.Child>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
