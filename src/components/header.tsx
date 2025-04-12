"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "../lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Documents", href: "/documents" },
    { name: "Amenities", href: "/amenities" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">StrataLink</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary/10"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button
            onClick={() => handleNavigation("/login")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Login
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:bg-primary/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background">
          <div className="container py-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors mb-1",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-primary/20 mt-4">
              <Button
                onClick={() => handleNavigation("/login")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
