import Image from /assets/meetingnotice.png
import Link from "next/link"
import { FileText, Calendar, Download, FileIcon, Info, Book, Clock } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Strata Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access important documents, meeting notices, and other resources for your strata property
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full py-3 px-4 pl-12 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
            <div className="absolute left-4 top-3.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">Documents</h3>
            </div>
            <p className="text-gray-600 mb-4">Access important strata documents including bylaws and regulations</p>
            <Link href="#documents" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
              View Documents <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">Meetings</h3>
            </div>
            <p className="text-gray-600 mb-4">View upcoming meeting schedules and access past meeting minutes</p>
            <Link href="#meetings" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
              View Meetings <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Info className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">Announcements</h3>
            </div>
            <p className="text-gray-600 mb-4">Stay updated with the latest announcements from your strata management</p>
            <Link href="#announcements" className="text-green-600 font-medium hover:text-green-800 flex items-center">
              View Announcements <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Documents Section */}
        <section id="documents" className="mb-16">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Document Card */}
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Strata Bylaws</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Official bylaws governing the strata corporation and property
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Updated: April 15, 2023</span>
                    </div>
                    <a
                      href="/assets/bylaws.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Document Card */}
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <FileIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Strata Plan</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Official strata plan showing unit entitlements and common property
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Updated: January 10, 2023</span>
                    </div>
                    <a
                      href="/assets/strata-plan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Notices Section */}
        <section id="meetings" className="mb-16">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Meeting Notices</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual General Meeting</h3>
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-purple-800 font-medium">May 15, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-purple-800 font-medium">7:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Join us for the Annual General Meeting where we will discuss the budget, elect new council members,
                    and address community concerns.
                  </p>
                </div>
                <div className="md:w-2/3 relative h-64 md:h-auto">
                  <Image
                    src="/assets/meeting-notice.jpg"
                    alt="Strata Meeting Notice"
                    className="rounded-lg border border-gray-200 shadow-md"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href="/assets/agm-notice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Meeting Notice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section id="announcements">
          <div className="flex items-center mb-6">
            <Info className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
          </div>

          <div className="space-y-4">
            {/* Announcement Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">Maintenance Schedule Update</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">
                The quarterly maintenance schedule has been updated. Please review the new schedule for upcoming
                maintenance in your building.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted: April 2, 2023</span>
                <a
                  href="/assets/maintenance-schedule.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center"
                >
                  View Details <span className="ml-1">→</span>
                </a>
              </div>
            </div>

            {/* Announcement Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">Updated Visitor Parking Rules</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Important</span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">
                Please note that visitor parking rules have been updated. Visitors must now register their vehicles
                online before parking.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted: March 15, 2023</span>
                <a
                  href="/parking-rules"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  View Details <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

