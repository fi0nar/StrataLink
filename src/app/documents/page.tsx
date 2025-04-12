import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, FileArchive, FileClock, FileQuestion } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  const documents = {
    building: [
      { name: "Strata Bylaws", date: "January 15, 2024", size: "1.2 MB", type: "pdf" },
      { name: "Building Rules and Regulations", date: "February 10, 2024", size: "850 KB", type: "pdf" },
      { name: "Resident Handbook", date: "March 5, 2024", size: "3.5 MB", type: "pdf" },
      { name: "Emergency Procedures", date: "April 20, 2024", size: "1.8 MB", type: "pdf" },
      { name: "Amenity Usage Guidelines", date: "May 1, 2024", size: "720 KB", type: "pdf" },
    ],
    financial: [
      { name: "Annual Budget 2024", date: "December 15, 2023", size: "1.5 MB", type: "pdf" },
      { name: "Financial Statement Q1 2024", date: "April 15, 2024", size: "2.1 MB", type: "pdf" },
      { name: "Strata Fee Schedule", date: "January 1, 2024", size: "450 KB", type: "pdf" },
      { name: "Reserve Fund Study", date: "November 10, 2023", size: "4.2 MB", type: "pdf" },
      { name: "Insurance Certificate", date: "February 28, 2024", size: "1.1 MB", type: "pdf" },
    ],
    meetings: [
      { name: "AGM Minutes - 2024", date: "March 15, 2024", size: "1.3 MB", type: "pdf" },
      { name: "Strata Council Meeting - April", date: "April 25, 2024", size: "980 KB", type: "pdf" },
      { name: "Strata Council Meeting - March", date: "March 28, 2024", size: "1.1 MB", type: "pdf" },
      { name: "Strata Council Meeting - February", date: "February 25, 2024", size: "1.2 MB", type: "pdf" },
      { name: "Strata Council Meeting - January", date: "January 30, 2024", size: "950 KB", type: "pdf" },
    ],
    forms: [
      { name: "Alteration Request Form", date: "January 5, 2024", size: "320 KB", type: "pdf" },
      { name: "Move In/Out Form", date: "January 5, 2024", size: "280 KB", type: "pdf" },
      { name: "Complaint Form", date: "January 5, 2024", size: "310 KB", type: "pdf" },
      { name: "Proxy Voting Form", date: "February 10, 2024", size: "250 KB", type: "pdf" },
      { name: "Pet Registration Form", date: "January 5, 2024", size: "290 KB", type: "pdf" },
    ],
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Documents & Resources</h1>

      <Tabs defaultValue="building" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="building">Building</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>

        {Object.entries(documents).map(([category, docs]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{category} Documents</CardTitle>
                <CardDescription>Access and download important {category} documents and resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {docs.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-md hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-md mr-3">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Updated: {doc.date} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={`/documents/${category}/${doc.name.toLowerCase().replace(/\s+/g, "-")}.${doc.type}`}
                        >
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download {doc.name}</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Archive</CardTitle>
            <CardDescription>Access historical documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/documents/archive/2023" className="flex items-center">
                  <FileArchive className="mr-2 h-4 w-4" />
                  <span>2023 Documents</span>
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/documents/archive/2022" className="flex items-center">
                  <FileArchive className="mr-2 h-4 w-4" />
                  <span>2022 Documents</span>
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/documents/archive/2021" className="flex items-center">
                  <FileArchive className="mr-2 h-4 w-4" />
                  <span>2021 Documents</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Recently added or updated documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Emergency Procedures", date: "April 20, 2024", category: "Building" },
                { name: "Strata Council Meeting - April", date: "April 25, 2024", category: "Meetings" },
                { name: "Financial Statement Q1 2024", date: "April 15, 2024", category: "Financial" },
              ].map((doc, index) => (
                <div key={index} className="flex items-center p-2 border-b last:border-0">
                  <FileClock className="h-4 w-4 mr-2 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.date} • {doc.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document FAQ</CardTitle>
            <CardDescription>Common questions about documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-start">
                  <FileQuestion className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <p className="text-sm font-medium">How do I request additional documents?</p>
                </div>
                <p className="text-xs text-muted-foreground ml-6">
                  Contact the strata manager via email or through the contact form.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start">
                  <FileQuestion className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <p className="text-sm font-medium">How often are financial documents updated?</p>
                </div>
                <p className="text-xs text-muted-foreground ml-6">
                  Financial statements are updated quarterly, and the annual budget is published in December.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start">
                  <FileQuestion className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <p className="text-sm font-medium">Can I submit forms electronically?</p>
                </div>
                <p className="text-xs text-muted-foreground ml-6">
                  Yes, you can download, fill out, and email forms to the strata manager.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
