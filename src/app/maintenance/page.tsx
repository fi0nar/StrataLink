"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MaintenancePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    try {
      // In a real app, this would be an API call
      setTimeout(() => {
        setFormSubmitted(true)
        setFormError(false)
      }, 1000)
    } catch (error) {
      setFormError(true)
    }
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setFormError(false)
    // Reset form fields
    const form = document.getElementById("maintenance-form") as HTMLFormElement
    if (form) form.reset()
  }

  const maintenanceRequests = [
    {
      id: "REQ-2024-001",
      title: "Leaky Faucet",
      location: "Bathroom sink",
      description: "The bathroom sink faucet is dripping constantly.",
      status: "In Progress",
      date: "May 10, 2024",
      updates: [
        { date: "May 10, 2024", note: "Request received and assigned to maintenance team." },
        { date: "May 12, 2024", note: "Technician scheduled for May 15th between 1-3 PM." },
      ],
    },
    {
      id: "REQ-2024-002",
      title: "Light Fixture",
      location: "Kitchen ceiling",
      description: "The light fixture in the kitchen is flickering and sometimes doesn't turn on.",
      status: "Completed",
      date: "May 3, 2024",
      updates: [
        { date: "May 3, 2024", note: "Request received and assigned to maintenance team." },
        { date: "May 4, 2024", note: "Technician scheduled for May 5th between 9-11 AM." },
        { date: "May 5, 2024", note: "Replaced light fixture. Issue resolved." },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance Requests</h1>

      <Tabs defaultValue="new" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new">New Request</TabsTrigger>
          <TabsTrigger value="history">Request History</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Maintenance Request</CardTitle>
              <CardDescription>Please provide details about the issue you're experiencing.</CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your maintenance request has been submitted successfully. Our team will review it shortly.
                  </AlertDescription>
                  <Button onClick={resetForm} variant="outline" className="mt-4">
                    Submit Another Request
                  </Button>
                </Alert>
              ) : formError ? (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>There was a problem submitting your request. Please try again.</AlertDescription>
                  <Button onClick={resetForm} variant="outline" className="mt-4">
                    Try Again
                  </Button>
                </Alert>
              ) : (
                <form id="maintenance-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue-title">Issue Title</Label>
                      <Input id="issue-title" placeholder="Brief description of the issue" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select required>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="bathroom">Bathroom</SelectItem>
                          <SelectItem value="bedroom">Bedroom</SelectItem>
                          <SelectItem value="living-room">Living Room</SelectItem>
                          <SelectItem value="balcony">Balcony</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select required>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency - Requires immediate attention</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="normal">Normal - Within a few days</SelectItem>
                        <SelectItem value="low">Low - When convenient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide as much detail as possible about the issue"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="access-instructions">Access Instructions (Optional)</Label>
                    <Textarea
                      id="access-instructions"
                      placeholder="Any special instructions for accessing your unit"
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-preference">Preferred Contact Method</Label>
                    <Select required>
                      <SelectTrigger id="contact-preference">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
              )}
            </CardContent>
            {!formSubmitted && !formError && (
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" form="maintenance-form">
                  Submit Request
                </Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Request History</CardTitle>
              <CardDescription>View and track the status of your previous maintenance requests.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{request.title}</h3>
                        <p className="text-sm text-muted-foreground">{request.location}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            request.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : request.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {request.status}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">Submitted: {request.date}</span>
                      </div>
                    </div>

                    <p className="text-sm mb-4">{request.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Updates:</h4>
                      <div className="space-y-2">
                        {request.updates.map((update, index) => (
                          <div key={index} className="text-sm border-l-2 border-primary pl-3 py-1">
                            <span className="font-medium">{update.date}:</span> {update.note}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
            <CardDescription>For urgent maintenance issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Building Manager</h4>
                <p className="text-sm">John Smith</p>
                <p className="text-sm">
                  <a href="tel:+11234567890" className="text-primary hover:underline">
                    (123) 456-7890
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold">After Hours Emergency</h4>
                <p className="text-sm">
                  <a href="tel:+18001234567" className="text-primary hover:underline">
                    1-800-123-4567
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
            <CardDescription>Regular building maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Garbage Collection:</span>
                <span className="text-sm font-medium">Mon, Wed, Fri</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Recycling Collection:</span>
                <span className="text-sm font-medium">Tuesday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Hallway Cleaning:</span>
                <span className="text-sm font-medium">Weekdays</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pool Maintenance:</span>
                <span className="text-sm font-medium">Thursday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Landscaping:</span>
                <span className="text-sm font-medium">Tuesday, Friday</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Tips</CardTitle>
            <CardDescription>Keep your unit in top condition</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Check and replace HVAC filters every 3 months</li>
              <li>Test smoke and carbon monoxide detectors monthly</li>
              <li>Clean range hood filters regularly</li>
              <li>Check for leaks under sinks and around toilets</li>
              <li>Keep drains clear by using drain guards</li>
              <li>Report any signs of water damage immediately</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
