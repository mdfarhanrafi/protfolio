"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname= usePathname()
  const navLinks = [
    { href:"/", label: "HOME", active: true },
    { href:"/about", label: "ABOUT ME" },
    { href:"/works", label: "MY WORKS" },
  ]

  return (
    <nav className="fixed w-full z-50 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
          <Image 
            src="/logo.jpg"
            alt="AARONN"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${pathname === link.href ? "text-white" : "text-white/70"} font-extrabold hover:text-orange-500 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="rounded-full border-white/20 text-white bg-white/10">
              <Link href="/contact">CONTACT</Link> 
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-zinc-950 border-zinc-800">
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      link.active ? "text-white" : "text-white/70"
                    } text-lg hover:text-orange-500 transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  
                  className="border-white/20 text-white hover:bg-white/10 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

