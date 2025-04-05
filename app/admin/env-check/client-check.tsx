"use client"

import { useState } from "react"

// Define a proper type for the connection status
type ConnectionStatus = {
  database?: {
    success: boolean
    message: string
    details?: string
    error?: string
  }
  email?: {
    success: boolean
    message: string
    details?: string
    error?: string
  }
  storage?: {
    success: boolean
    message: string
    details?: string
    error?: string
  }
  auth?: {
    success: boolean
    message: string
    details?: string
    error?: string
  }
  error?: boolean
  message?: string
  timestamp?: string
} | null

export default function ClientEnvCheck() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>(null)
  const [loading, setLoading] = useState(false)

  const testConnections = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/test-connection")
      const data = await response.json()
      setConnectionStatus(data)
    } catch (error) {
      setConnectionStatus({
        error: true,
        message: error instanceof Error ? error.message : "Failed to test connections",
      })
    } finally {
      setLoading(false)
    }
  }

  // Check client-side environment variables
  const clientEnvVars = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    mapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  }

  return (
    <div className="mt-8">
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Client-side Environment Check</h2>
        <p className="mb-4">This component runs in the browser and can access NEXT_PUBLIC_ environment variables.</p>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Client Environment Variables</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              NEXT_PUBLIC_API_URL:{" "}
              {clientEnvVars.apiUrl ? (
                <span className="text-green-600 font-medium">Available</span>
              ) : (
                <span className="text-red-600 font-medium">Not available</span>
              )}
            </li>
            <li>
              NEXT_PUBLIC_MAPS_API_KEY:{" "}
              {clientEnvVars.mapsApiKey ? (
                <span className="text-green-600 font-medium">Available</span>
              ) : (
                <span className="text-red-600 font-medium">Not available</span>
              )}
            </li>
          </ul>
        </div>

        <button
          onClick={testConnections}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Testing..." : "Test API Connections"}
        </button>

        {connectionStatus && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Connection Test Results</h3>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(connectionStatus, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

