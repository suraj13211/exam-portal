import Navbar from "@/components/navbar"
import { FileText } from "lucide-react"

export default function ViewForm() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-10">
            View Form
          </h1>

          <div className="space-y-8">
            {/* Student Details Section */}
            <section className="bg-gray-100 p-5 rounded-lg">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Student Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <p className="font-medium">SURAJ PASWAN</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Roll Number</p>
                  <p className="font-medium">11700224110</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Registration Number</p>
                  <p className="font-medium">241170110502 OF 2024-2025</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Course</p>
                  <p className="font-medium">B.Tech-IT</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Semester</p>
                  <p className="font-medium">1</p>
                </div>
              </div>
            </section>

            {/* Form Status Section */}
            <section className="bg-gray-100 p-5 rounded-lg">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Form Status</h2>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <FileText size={20} />
                <p>Form Submitted Successfully</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
