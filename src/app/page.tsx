import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-7xl md:text-9xl font-bold text-center mb-8 text-primary">
        StrataLink
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-foreground/80">
        Your comprehensive strata management solution
      </p>
      <div className="flex gap-4">
        <a
          href="/dashboard"
          className="px-6 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
        <a
          href="/contact"
          className="px-6 py-3 text-lg font-medium rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
