import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <section className="relative h-[500px] rounded-lg overflow-hidden mb-12">
        <Image src="/images/building-hero.jpg" alt="Modern apartment building" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to Your Strata Community</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Manage your property, connect with neighbors, and access important resources all in one place.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/dashboard">Resident Portal</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              <Link href="/contact">Contact Management</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>Latest updates from management</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="border-b pb-2">
                <span className="text-sm text-muted-foreground">May 15, 2024</span>
                <p className="font-medium">Pool maintenance scheduled for next week</p>
              </li>
              <li className="border-b pb-2">
                <span className="text-sm text-muted-foreground">May 10, 2024</span>
                <p className="font-medium">New recycling guidelines in effect</p>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">May 5, 2024</span>
                <p className="font-medium">Annual general meeting - Save the date</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm">
              <Link href="/announcements">View All</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common resident services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col">
                <Link href="/maintenance">
                  <span className="text-sm">Submit</span>
                  <span>Maintenance Request</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col">
                <Link href="/payments">
                  <span className="text-sm">Make a</span>
                  <span>Payment</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col">
                <Link href="/documents">
                  <span className="text-sm">Access</span>
                  <span>Documents</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col">
                <Link href="/amenities">
                  <span className="text-sm">Book</span>
                  <span>Amenities</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Events</CardTitle>
            <CardDescription>Upcoming activities</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="border-b pb-2">
                <span className="text-sm text-muted-foreground">May 20, 2024</span>
                <p className="font-medium">Rooftop Garden Opening</p>
                <p className="text-sm text-muted-foreground">6:00 PM - Rooftop</p>
              </li>
              <li className="border-b pb-2">
                <span className="text-sm text-muted-foreground">May 25, 2024</span>
                <p className="font-medium">Community BBQ</p>
                <p className="text-sm text-muted-foreground">12:00 PM - Courtyard</p>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">June 1, 2024</span>
                <p className="font-medium">Yoga in the Park</p>
                <p className="text-sm text-muted-foreground">9:00 AM - Community Garden</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm">
              <Link href="/events">View All Events</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">About Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Our strata community is designed to provide a comfortable, convenient, and connected living experience for
              all residents. With modern amenities, responsive management, and a focus on community building, we strive
              to make this more than just a place to live—it's a place to belong.
            </p>
            <p className="mb-4">
              The strata management team is dedicated to maintaining the property to the highest standards and
              addressing resident needs promptly and professionally.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/images/community-garden.jpg" alt="Community garden area" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
