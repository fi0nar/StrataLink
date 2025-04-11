"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"

export default function AmenitiesPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const amenities = [
    {
      id: "party-room",
      name: "Party Room",
      description: "Perfect for hosting gatherings and celebrations with friends and family.",
      image: "/images/party-room.jpg",
      capacity: "30 people",
      hours: "9:00 AM - 11:00 PM",
      fee: "$50 per booking",
      features: ["Kitchen access", "Audio system", "Seating for 30", "TV and HDMI connection"],
    },
    {
      id: "gym",
      name: "Fitness Center",
      description: "State-of-the-art fitness equipment for cardio and strength training.",
      image: "/images/gym.jpg",
      capacity: "15 people",
      hours: "5:00 AM - 11:00 PM",
      fee: "Free",
      features: ["Cardio machines", "Free weights", "Yoga mats", "Water station"],
    },
    {
      id: "pool",
      name: "Swimming Pool",
      description: "Indoor heated pool with dedicated lap swimming times and leisure area.",
      image: "/images/pool.jpg",
      capacity: "25 people",
      hours: "6:00 AM - 10:00 PM",
      fee: "Free",
      features: ["Heated pool", "Hot tub", "Changing rooms", "Shower facilities"],
    },
    {
      id: "rooftop",
      name: "Rooftop Terrace",
      description: "Scenic outdoor space with BBQ facilities and lounge seating.",
      image: "/images/rooftop.jpg",
      capacity: "40 people",
      hours: "9:00 AM - 10:00 PM",
      fee: "$25 per booking",
      features: ["BBQ grills", "Lounge seating", "Fire pit", "Panoramic views"],
    },
  ]

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking process
    setTimeout(() => {
      setBookingSuccess(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Building Amenities</h1>

      <Tabs defaultValue="browse">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="browse">Browse Amenities</TabsTrigger>
          <TabsTrigger value="calendar">Booking Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity) => (
              <Card key={amenity.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={amenity.image || "/placeholder.svg"} alt={amenity.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{amenity.name}</CardTitle>
                  <CardDescription>{amenity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span>{amenity.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hours:</span>
                      <span>{amenity.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Booking Fee:</span>
                      <span>{amenity.fee}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-muted-foreground">Features:</span>
                      <ul className="list-disc pl-5 mt-1">
                        {amenity.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Book Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      {bookingSuccess ? (
                        <div className="text-center py-4">
                          <div className="flex justify-center mb-4">
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                          </div>
                          <DialogHeader>
                            <DialogTitle>Booking Confirmed!</DialogTitle>
                            <DialogDescription>
                              Your booking for the {amenity.name} has been confirmed.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 space-y-2 text-left border rounded-md p-4 bg-secondary/50">
                            <div className="flex justify-between">
                              <span className="font-medium">Amenity:</span>
                              <span>{amenity.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Date:</span>
                              <span>{date?.toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Time:</span>
                              <span>7:00 PM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Fee:</span>
                              <span>{amenity.fee}</span>
                            </div>
                          </div>
                          <DialogFooter className="mt-6">
                            <Button onClick={() => setBookingSuccess(false)}>Close</Button>
                          </DialogFooter>
                        </div>
                      ) : (
                        <>
                          <DialogHeader>
                            <DialogTitle>Book {amenity.name}</DialogTitle>
                            <DialogDescription>
                              Select your preferred date and time to book this amenity.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleBooking}>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="date">Select Date</Label>
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  className="border rounded-md p-3"
                                  disabled={(date) =>
                                    date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                                  }
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="start-time">Start Time</Label>
                                  <Select>
                                    <SelectTrigger id="start-time">
                                      <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="9">9:00 AM</SelectItem>
                                      <SelectItem value="12">12:00 PM</SelectItem>
                                      <SelectItem value="15">3:00 PM</SelectItem>
                                      <SelectItem value="18">6:00 PM</SelectItem>
                                      <SelectItem value="19">7:00 PM</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="end-time">End Time</Label>
                                  <Select>
                                    <SelectTrigger id="end-time">
                                      <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="12">12:00 PM</SelectItem>
                                      <SelectItem value="15">3:00 PM</SelectItem>
                                      <SelectItem value="18">6:00 PM</SelectItem>
                                      <SelectItem value="21">9:00 PM</SelectItem>
                                      <SelectItem value="22">10:00 PM</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="guests">Number of Guests</Label>
                                <Input
                                  id="guests"
                                  type="number"
                                  min="1"
                                  max={Number.parseInt(amenity.capacity)}
                                  defaultValue="1"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="purpose">Purpose of Booking</Label>
                                <Textarea id="purpose" placeholder="Brief description of your event or usage" />
                              </div>

                              <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Booking Information</AlertTitle>
                                <AlertDescription>
                                  Booking fee: {amenity.fee}. Cancellations must be made at least 24 hours in advance.
                                </AlertDescription>
                              </Alert>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Confirm Booking</Button>
                            </DialogFooter>
                          </form>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Amenity Booking Calendar</CardTitle>
              <CardDescription>View availability and make reservations for building amenities.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-md p-3" />
                </div>

                <div className="md:w-1/2 border rounded-md p-4">
                  <h3 className="font-medium mb-4">
                    Bookings for {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  </h3>

                  <div className="space-y-3">
                    <div className="p-3 border rounded-md bg-secondary/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Party Room</p>
                          <p className="text-sm text-muted-foreground">7:00 PM - 10:00 PM</p>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Booked</span>
                      </div>
                      <p className="text-sm mt-1">Booked by: Unit 502</p>
                    </div>

                    <div className="p-3 border rounded-md bg-secondary/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Rooftop Terrace</p>
                          <p className="text-sm text-muted-foreground">12:00 PM - 3:00 PM</p>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Booked</span>
                      </div>
                      <p className="text-sm mt-1">Booked by: Unit 301</p>
                    </div>

                    <div className="p-3 border rounded-md">
                      <p className="text-center text-muted-foreground">
                        All other amenities are available for booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Amenity Rules</CardTitle>
                <CardDescription>Important guidelines for using building amenities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Bookings can be made up to 60 days in advance</li>
                  <li>Residents are responsible for cleaning after use</li>
                  <li>Noise levels must be kept reasonable after 10:00 PM</li>
                  <li>Damage to amenities will result in repair charges</li>
                  <li>Guests must be accompanied by residents at all times</li>
                  <li>Cancellations must be made at least 24 hours in advance</li>
                  <li>Maximum booking duration is 4 hours per amenity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Your upcoming amenity reservations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Party Room</p>
                        <p className="text-sm">May 28, 2024</p>
                        <p className="text-sm text-muted-foreground">7:00 PM - 10:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Rooftop Terrace</p>
                        <p className="text-sm">June 15, 2024</p>
                        <p className="text-sm text-muted-foreground">4:00 PM - 8:00 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
