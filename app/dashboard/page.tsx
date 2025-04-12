import Navbar from "@/components/navbar"
import Link from "next/link"
import { FileText, CreditCard, FileCheck, BarChart } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Welcome to Your Dashboard, SURAJ PASWAN!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/dashboard/view-form">
            <div className="dashboard-card">
              <div className="text-blue-600 mb-2">
                <FileText size={40} />
              </div>
              <h2 className="dashboard-card-title text-blue-600">View Form</h2>
              <p className="dashboard-card-description">Click to view the form.</p>
            </div>
          </Link>

          <Link href="/dashboard/pay-fees">
            <div className="dashboard-card">
              <div className="text-green-600 mb-2">
                <CreditCard size={40} />
              </div>
              <h2 className="dashboard-card-title text-green-600">Pay Exam Fees</h2>
              <p className="dashboard-card-description">Click to pay exam fees.</p>
            </div>
          </Link>

          <Link href="/dashboard/admit-card">
            <div className="dashboard-card">
              <div className="text-red-600 mb-2">
                <FileCheck size={40} />
              </div>
              <h2 className="dashboard-card-title text-red-600">Download Admit Card</h2>
              <p className="dashboard-card-description">Click to download admit card.</p>
            </div>
          </Link>

          <Link href="/dashboard/results">
            <div className="dashboard-card">
              <div className="text-red-600 mb-2">
                <BarChart size={40} />
              </div>
              <h2 className="dashboard-card-title text-red-600">View Results</h2>
              <p className="dashboard-card-description">Click to view results.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
