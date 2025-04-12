import Navbar from "@/components/navbar"

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">SURAJ PASWAN</h1>
          <p className="text-center text-gray-500 mb-8">it2024082@rcciit.org.in</p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium">Registration Number:</p>
                <p className="font-semibold">241170110502 OF 2024-2025</p>
              </div>

              <div>
                <p className="text-gray-600 font-medium">Class Roll No:</p>
                <p className="font-semibold">IT2024082</p>
              </div>

              <div>
                <p className="text-gray-600 font-medium">Roll Number:</p>
                <p className="font-semibold">11700224110</p>
              </div>

              <div>
                <p className="text-gray-600 font-medium">Course:</p>
                <p className="font-semibold">B.Tech-IT</p>
              </div>

              <div>
                <p className="text-gray-600 font-medium">Semester:</p>
                <p className="font-semibold">1</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
