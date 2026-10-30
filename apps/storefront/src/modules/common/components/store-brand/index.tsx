"use client"

import Image from "next/image"

const StoreBrand = ({ priority = false }: { priority?: boolean }) => (
  <span className="inline-flex items-center gap-2.5">
    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#080b0f] shadow-[0_3px_14px_rgba(212,175,55,0.12)]">
      <Image
        src="/logo.png"
        alt=""
        width={80}
        height={80}
        priority={priority}
        className="absolute left-[-20px] top-[-10px] max-w-none"
      />
    </span>
    <span className="text-sm font-bold uppercase tracking-[0.17em] text-[#111318] dark:text-white sm:text-base">
      Buyora
    </span>
  </span>
)

export default StoreBrand
