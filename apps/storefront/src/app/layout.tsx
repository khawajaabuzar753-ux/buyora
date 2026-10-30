import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import ThemeProvider from "@modules/common/components/theme-provider"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="ucp" href="/.well-known/ucp" />
      </head>
      <body className="min-h-screen bg-[#f8f8f6] text-[#111318] transition-colors duration-300 ease-in-out dark:bg-[#0a0f14] dark:text-white">
        <ThemeProvider>
          <main className="relative">{props.children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
