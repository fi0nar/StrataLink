export default function ResourcesPage() {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-gray-800">📁 Strata Resources</h1>
  
          {/* PDF Link Section */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Documents</h2>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a
                  href="/assets/bylaws.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-800"
                >
                  Download Strata Bylaws (PDF)
                </a>
              </li>
            </ul>
          </div>
  
          {/* Image Preview Section */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Meeting Notice</h2>
            <img
              src="/assets/meeting-notice.jpg"
              alt="Strata Meeting Notice"
              className="w-full rounded-lg border border-gray-200 shadow-md"
            />
          </div>
        </div>
      </main>
    )
  }
  