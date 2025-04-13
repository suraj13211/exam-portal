import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Results() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-4 w-full max-w-4xl shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border">SL. NO.</th>
                  <th className="px-4 py-2 border">Semester</th>
                  <th className="px-4 py-2 border">Date of Publication</th>
                  <th className="px-4 py-2 border">Grade Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border text-center">1</td>
                  <td className="px-4 py-2 border text-center">Semester 1</td>
                  <td className="px-4 py-2 border text-center">11/4/2025</td>
                  <td className="px-4 py-2 border text-center">
                    <Link href="/dashboard/results/grade-card">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">
                        View Grade Card
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
