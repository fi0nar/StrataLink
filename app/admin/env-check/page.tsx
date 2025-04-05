import ClientEnvCheck from "./client-check"
import { headers } from "next/headers"

export default async function EnvCheckPage() {
  // This function checks if an environment variable exists
  // without exposing its actual value for security
  const checkEnvVar = (name: string) => {
    const value = process.env[name]
    return {
      name,
      exists: !!value,
      // For public variables, we can show a preview
      preview:
        name.startsWith("NEXT_PUBLIC_") && value
          ? `${value.substring(0, 4)}...${value.substring(value.length - 4)}`
          : null,
      type: name.startsWith("NEXT_PUBLIC_") ? "Client-side" : "Server-side",
    }
  }

  // Get the host from headers to display the current environment
  // In Next.js 15.2.4, headers() returns a Promise that needs to be awaited
  const headersList = await headers()
  const host = headersList.get("host") || "unknown"

  // Check all the environment variables we set up
  const envVars = [
    "DATABASE_URL",
    "AUTH_SECRET",
    "NEXTAUTH_URL",
    "NEXT_PUBLIC_MAPS_API_KEY",
    "STORAGE_ACCESS_KEY",
    "STORAGE_SECRET_KEY",
    "STORAGE_BUCKET",
    "EMAIL_SERVER_HOST",
    "EMAIL_SERVER_PORT",
    "EMAIL_SERVER_USER",
    "EMAIL_SERVER_PASSWORD",
    "EMAIL_FROM",
    "NEXT_PUBLIC_API_URL",
    "API_KEY",
  ].map(checkEnvVar)

  // Group variables by type
  const serverVars = envVars.filter((v) => v.type === "Server-side")
  const clientVars = envVars.filter((v) => v.type === "Client-side")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Environment Variables Check</h1>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Deployment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Current Host</p>
              <p>{host}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Node Environment</p>
              <p>{process.env.NODE_ENV || "Not set"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Server-side Environment Variables</h2>
          <p className="text-sm text-gray-500 mb-4">
            These variables are only accessible on the server and are not exposed to the client.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Variable Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {serverVars.map((variable) => (
                  <tr key={variable.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{variable.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {variable.exists ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Set
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Set
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Client-side Environment Variables</h2>
          <p className="text-sm text-gray-500 mb-4">
            These variables are accessible in the browser and must be prefixed with NEXT_PUBLIC_.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Variable Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preview
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clientVars.map((variable) => (
                  <tr key={variable.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{variable.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {variable.exists ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Set
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Set
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{variable.preview || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client-side component to test environment variables in the browser */}
        <ClientEnvCheck />
      </div>
    </div>
  )
}

