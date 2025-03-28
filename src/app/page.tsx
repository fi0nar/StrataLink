import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to StrataSync</h1>
      <p className="text-lg text-center max-w-xl">
        Your smart solution for managing strata meetings, repairs, notices and resident updates.
      </p>
    </main>
  )
}