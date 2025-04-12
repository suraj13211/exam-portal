import Navbar from "@/components/navbar"
import Link from "next/link"
import { FileText, CreditCard, FileCheck, BarChart } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Welcome to Your Dashboard, <span className="text-yellow-300">SURAJ PASWAN</span>!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* View Form */}
          <Link href="/dashboard/view-form">
            <div className="dashboard-card hover:shadow-xl transition">
              <div className="text-blue-600 mb-3">
                <FileText size={40} />
              </div>
              <h2 className="text-xl font-bold text-blue-600 mb-1">View Form</h2>
              <p className="text-gray-600 text-sm">Click to view your submitted form.</p>
            </div>
          </Link>

          {/* Pay Exam Fees */}
          <Link href="/dashboard/pay-fees">
            <div className="dashboard-card hover:shadow-xl transition">
              <div className="text-green-600 mb-3">
                <CreditCard size={40} />
              </div>
              <h2 className="text-xl font-bold text-green-600 mb-1">Pay Exam Fees</h2>
              <p className="text-gray-600 text-sm">Proceed with secure payment for exams.</p>
            </div>
          </Link>

          {/* Download Admit Card */}
          <Link href="/dashboard/admit-card">
            <div className="dashboard-card hover:shadow-xl transition">
              <div className="text-red-600 mb-3">
                <FileCheck size={40} />
              </div>
              <h2 className="text-xl font-bold text-red-600 mb-1">Download Admit Card</h2>
              <p className="text-gray-600 text-sm">Get your admit card instantly.</p>
            </div>
          </Link>

          {/* View Results */}
          <Link href="/dashboard/results">
            <div className="dashboard-card hover:shadow-xl transition">
              <div className="text-purple-600 mb-3">
                <BarChart size={40} />
              </div>
              <h2 className="text-xl font-bold text-purple-600 mb-1">View Results</h2>
              <p className="text-gray-600 text-sm">Check your semester results.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
