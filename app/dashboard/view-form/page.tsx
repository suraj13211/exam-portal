import Navbar from "@/components/navbar"
import { FileText } from "lucide-react"

export default function ViewForm() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center mb-8">View Form</h1>

          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Student Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Name:</p>
                  <p>SURAJ PASWAN</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Roll Number:</p>
                  <p>11700224110</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Registration Number:</p>
                  <p>241170110502 OF 2024-2025</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Course:</p>
                  <p>B.Tech-IT</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Semester:</p>
                  <p>1</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Form Status</h2>
              <div className="flex items-center gap-2 text-green-600">
                <FileText size={20} />
                <p>Form Submitted Successfully</p>
              </div>
            </div>

            <div className="flex justify-center">
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
