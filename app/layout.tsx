import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { MainNav } from "@/components/main-nav"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
const items=[
  {
    title: 'Products',href:'/'
},
{
  title: 'Price',href:'/'
},
{
title: 'About',href:'/'
},
{
title: 'Contact',href:'/'
},
]




export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased text-gary-900",
            fontSans.variable
            
          )}
        >
        <MainNav items={items}/>

            <div className="  relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
        </body>
      </html>
    </>
  )
}
