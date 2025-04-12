"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    try {
      // In a real app, this would call the server action
      // await submitContactForm(formData)

      // Simulate form submission
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
    const form = document.getElementById("contact-form") as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Main Office</p>
                <a href="tel:+11234567890" className="text-primary hover:underline">
                  (123) 456-7890
                </a>
              </div>
              <div>
                <p className="font-medium">Emergency (24/7)</p>
                <a href="tel:+18001234567" className="text-primary hover:underline">
                  1-800-123-4567
                </a>
              </div>
              <div>
                <p className="font-medium">Building Manager</p>
                <a href="tel:+11234567891" className="text-primary hover:underline">
                  (123) 456-7891
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="font-medium">General Inquiries</p>
                <a href="mailto:info@strataportal.com" className="text-primary hover:underline">
                  info@strataportal.com
                </a>
              </div>
              <div>
                <p className="font-medium">Maintenance Requests</p>
                <a href="mailto:maintenance@strataportal.com" className="text-primary hover:underline">
                  maintenance@strataportal.com
                </a>
              </div>
              <div>
                <p className="font-medium">Building Manager</p>
                <a href="mailto:manager@strataportal.com" className="text-primary hover:underline">
                  manager@strataportal.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Office Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 text-sm text-muted-foreground">
                <p>Building manager on-site Monday through Friday.</p>
                <p>Emergency services available 24/7.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below to contact the management team.</CardDescription>
          </CardHeader>
          <CardContent>
            {formSubmitted ? (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Message Sent!</AlertTitle>
                <AlertDescription className="text-green-700">
                  Thank you for your message. Our team will get back to you within 1-2 business days.
                </AlertDescription>
                <Button onClick={resetForm} variant="outline" className="mt-4">
                  Send Another Message
                </Button>
              </Alert>
            ) : formError ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>There was a problem sending your message. Please try again.</AlertDescription>
                <Button onClick={resetForm} variant="outline" className="mt-4">
                  Try Again
                </Button>
              </Alert>
            ) : (
              <form id="contact-form" action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit Number</Label>
                    <Input id="unit" name="unit" placeholder="e.g. 301" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" placeholder="Your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select name="subject" required>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="maintenance">Maintenance Issue</SelectItem>
                      <SelectItem value="noise">Noise Complaint</SelectItem>
                      <SelectItem value="amenities">Amenities Question</SelectItem>
                      <SelectItem value="payment">Payment Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your inquiry"
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
                  <Select name="preferred-contact" required>
                    <SelectTrigger id="preferred-contact">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="either">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">Strata Management Office</p>
                <address className="not-italic">
                  <p>123 Strata Avenue</p>
                  <p>Building A, Suite 100</p>
                  <p>City, State 12345</p>
                </address>
                <div className="border rounded-md h-[200px] mt-4 bg-secondary/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Management Team</CardTitle>
              <CardDescription>Meet the people who keep our building running smoothly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                    <span className="text-xl font-bold">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Building Manager</p>
                    <p className="text-sm mt-1">
                      <a href="mailto:john@strataportal.com" className="text-primary hover:underline">
                        john@strataportal.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                    <span className="text-xl font-bold">SD</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Davis</p>
                    <p className="text-sm text-muted-foreground">Assistant Manager</p>
                    <p className="text-sm mt-1">
                      <a href="mailto:sarah@strataportal.com" className="text-primary hover:underline">
                        sarah@strataportal.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                    <span className="text-xl font-bold">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Mike Johnson</p>
                    <p className="text-sm text-muted-foreground">Maintenance Supervisor</p>
                    <p className="text-sm mt-1">
                      <a href="mailto:mike@strataportal.com" className="text-primary hover:underline">
                        mike@strataportal.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
