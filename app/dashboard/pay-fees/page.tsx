import Navbar from "@/components/navbar"
import { CreditCard } from "lucide-react"

export default function PayFees() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center mb-8">Pay Exam Fees</h1>

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
              <h2 className="font-semibold mb-2">Fee Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Examination Fee</p>
                  <p>₹1,500</p>
                </div>
                <div className="flex justify-between">
                  <p>Late Fee</p>
                  <p>₹0</p>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                  <p>Total Amount</p>
                  <p>₹1,500</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-green-600 text-white py-3 px-6 rounded-md flex items-center gap-2">
                <CreditCard size={20} />
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
