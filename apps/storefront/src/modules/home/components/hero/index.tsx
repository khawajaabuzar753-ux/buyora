import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => (
  <section className="bg-[#080b0f]">
    <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet="/coverphotoformobile.png"
        />
        <img
          src="/cover.png"
          alt="Buyora electronics marketplace featuring smartphones, laptops, televisions, and home appliances"
          width="1672"
          height="940"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full"
        />
      </picture>
      <LocalizedClientLink
        href="/store"
        aria-label="Explore more products"
        data-testid="hero-explore-button"
        className="group absolute left-1/2 top-[90%] z-10 inline-flex min-h-9 min-w-[12rem] -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#ffe08a] bg-gradient-to-r from-[#f7c64a] via-[#e5ad28] to-[#c68a12] px-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#17120a] shadow-[0_8px_28px_rgba(229,173,40,0.4)] transition duration-200 hover:brightness-105 hover:shadow-[0_12px_34px_rgba(229,173,40,0.55)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-[91.8%] sm:top-[92.8%] sm:min-h-[3.6rem] sm:min-w-[14.5rem] sm:px-7 sm:text-sm"
      >
        <span>Explore now</span>
        <svg
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </LocalizedClientLink>
    </div>
  </section>
)

export default Hero
