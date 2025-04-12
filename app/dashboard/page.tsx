import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileText, PenToolIcon as Tool, Calendar, CreditCard } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Resident Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Unit Information</CardTitle>
            <CardDescription>Your property details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Unit Number:</span>
                <span className="font-medium">301</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Floor:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Square Footage:</span>
                <span className="font-medium">1,250 sq ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Parking Space:</span>
                <span className="font-medium">P45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Storage Unit:</span>
                <span className="font-medium">S22</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Financial Summary</CardTitle>
            <CardDescription>Your account status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Balance:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Payment Due:</span>
                <span className="font-medium">June 1, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Fees:</span>
                <span className="font-medium">$450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Payment:</span>
                <span className="font-medium">May 1, 2024</span>
              </div>
              <div className="mt-4">
                <Button asChild className="w-full">
                  <Link href="/payments">Make a Payment</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Maintenance Status</CardTitle>
            <CardDescription>Your recent requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Leaky Faucet</p>
                    <p className="text-sm text-muted-foreground">Bathroom sink</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Submitted: May 10, 2024</p>
              </div>

              <div className="border rounded-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Light Fixture</p>
                    <p className="text-sm text-muted-foreground">Kitchen ceiling</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Completed: May 5, 2024</p>
              </div>

              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/maintenance">New Request</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Annual fire alarm testing will take place on May 25th from 10:00 AM to 2:00 PM. Please plan accordingly.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common resident services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/maintenance" className="flex items-center">
                  <Tool className="mr-2 h-5 w-5" />
                  <span>Maintenance Request</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/documents" className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  <span>Documents</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/amenities" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Book Amenities</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 justify-start">
                <Link href="/payments" className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  <span>Make Payment</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Community activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary rounded-md p-2 text-center min-w-[60px]">
                  <div className="text-sm font-semibold">MAY</div>
                  <div className="text-xl font-bold">20</div>
                </div>
                <div>
                  <h4 className="font-semibold">Rooftop Garden Opening</h4>
                  <p className="text-sm text-muted-foreground">6:00 PM - Rooftop</p>
                  <p className="text-sm mt-1">
                    Join us for the grand opening of our rooftop garden with refreshments and live music.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary rounded-md p-2 text-center min-w-[60px]">
                  <div className="text-sm font-semibold">MAY</div>
                  <div className="text-xl font-bold">25</div>
                </div>
                <div>
                  <h4 className="font-semibold">Community BBQ</h4>
                  <p className="text-sm text-muted-foreground">12:00 PM - Courtyard</p>
                  <p className="text-sm mt-1">Annual community BBQ with games and activities for all ages.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary rounded-md p-2 text-center min-w-[60px]">
                  <div className="text-sm font-semibold">JUN</div>
                  <div className="text-xl font-bold">1</div>
                </div>
                <div>
                  <h4 className="font-semibold">Yoga in the Park</h4>
                  <p className="text-sm text-muted-foreground">9:00 AM - Community Garden</p>
                  <p className="text-sm mt-1">
                    Start your weekend with a relaxing yoga session led by a certified instructor.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
