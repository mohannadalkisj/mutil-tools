"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center">
        <img src="/logo-reez.svg" alt="logo" className="h-16 md:h-14 m-2" />
      </Link>
      <div className="hidden md:flex md:items-center md:space-x-6">
        {items?.length ? (
          <nav className="flex gap-6 md:gap-16">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-pink-500 mx-4",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="bg-pink-100 text-pink-500 m-1 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium text-pink-500",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

