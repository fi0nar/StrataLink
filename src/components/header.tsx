"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"
import { Menu, X, User, Bell } from "lucide-react"
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Strata Portal</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "nav-link",
                  pathname === item.href ? "active" : ""
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-secondary/80">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleNavigation("/profile")} className="hover:bg-secondary/80">
            <User className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button onClick={() => handleNavigation("/login")} className="bg-primary hover:bg-primary/90">
            Login
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hover:bg-secondary/80">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "nav-link w-full text-left mb-1",
                  pathname === item.href ? "active" : ""
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t mt-4">
              <Button onClick={() => handleNavigation("/login")} className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
