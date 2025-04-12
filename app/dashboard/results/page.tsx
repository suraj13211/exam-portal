import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Results() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-4xl">
          <table className="w-full">
            <thead>
              <tr>
                <th>SL. NO.</th>
                <th>Semester</th>
                <th>Date of Publication</th>
                <th>Grade Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Semester 1</td>
                <td>11/4/2025</td>
                <td>
                  <Link href="/dashboard/results/grade-card">
                    <button className="view-grade-button">View Grade Card</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
