export default function ResourcesPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Strata Resources</h1>
  
        <ul className="list-disc pl-6 space-y-3 text-blue-700">
          <li>
            <a href="/assets/bylaws.pdf" target="_blank" rel="noopener noreferrer" className="underline">
              Download Strata Bylaws (PDF)
            </a>
          </li>
          <li>
            <img
              src="/assets/meeting-notice.jpg"
              alt="Meeting Notice"
              className="w-80 rounded-lg border shadow"
            />
          </li>
        </ul>
      </div>
    );
  }
  