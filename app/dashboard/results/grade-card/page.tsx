import Navbar from "@/components/navbar"
import Image from "next/image"
import { Download } from "lucide-react"

export default function GradeCard() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="bg-white rounded-lg p-4 sm:p-8 w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold uppercase">RCC INSTITUTE OF INFORMATION TECHNOLOGY (AUTONOMOUS)</h1>
            <p className="text-sm">(Under Maulana Abul Kalam Azad University of Technology, West Bengal)</p>

            <div className="flex justify-center my-4">
              <Image src="/logo.png" alt="RCCIIT Logo" width={60} height={60} className="bg-white rounded-full p-1" />
            </div>

            <h2 className="text-lg font-bold mt-4">PROVISIONAL GRADE CARD</h2>
            <div className="border border-black mt-4 p-2">
              <p className="font-bold">1ST YEAR 1ST SEMESTER EXAMINATION OF 2024-2025</p>
            </div>
          </div>

          {/* ✅ Desktop Table View */}
          <div className="hidden sm:block border border-black overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead className="bg-gray-100">
                <tr className="border-b border-black">
                  <th className="border-r border-black p-2 text-center">Subject Code</th>
                  <th className="border-r border-black p-2 text-center">Subjects Offered</th>
                  <th className="border-r border-black p-2 text-center">Letter Grade</th>
                  <th className="border-r border-black p-2 text-center">Points</th>
                  <th className="border-r border-black p-2 text-center">Credits</th>
                  <th className="p-2 text-center">Credit Points</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["RCC-ESC-PH-101", "Physics", "D", 5, 4, 20],
                  ["RCC-BSC-M-101", "Mathematics - I A", "C", 6, 4, 24],
                  ["RCC-ESC-EE-101", "Basic Electrical Engineering", "D", 5, 4, 20],
                  ["RCC-HSMC-101", "UHV – II Understanding Harmony", "A", 8, 2, 16],
                  ["RCC-ESC-ME-192", "Workshop/ Manufacturing Practices", "E", 9, 2, 18],
                  ["RCC-BSC-PH-191", "Physics Laboratory", "E", 9, 1, 9],
                  ["RCC-ESC-EE-191", "Basic Electrical Engineering Laboratory", "E", 9, 1, 9],
                  ["RCC-AU-182", "NSS & Yoga", "O", 0, 0, 0],
                ].map(([code, subject, grade, points, credits, cp], i) => (
                  <tr key={i} className="border-b border-black">
                    <td className="border-r border-black p-2 text-center">{code}</td>
                    <td className="border-r border-black p-2 text-center">{subject}</td>
                    <td className="border-r border-black p-2 text-center">{grade}</td>
                    <td className="border-r border-black p-2 text-center">{points}</td>
                    <td className="border-r border-black p-2 text-center">{credits}</td>
                    <td className="p-2 text-center">{cp}</td>
                  </tr>
                ))}
                <tr className="border-b border-black font-bold">
                  <td colSpan={3} className="border-r border-black p-2 text-center"></td>
                  <td className="border-r border-black p-2 text-center">Total</td>
                  <td className="border-r border-black p-2 text-center">18</td>
                  <td className="p-2 text-center">116</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-2" colSpan={6}><strong>SGPA:</strong> 6.4</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-2" colSpan={6}><strong>Result:</strong> P</td>
                </tr>
                <tr>
                  <td className="p-2" colSpan={6}><strong>Publication Date:</strong> 11/4/2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ✅ Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {[
              ["RCC-ESC-PH-101", "Physics", "D", 5, 4, 20],
              ["RCC-BSC-M-101", "Mathematics - I A", "C", 6, 4, 24],
              ["RCC-ESC-EE-101", "Basic Electrical Engineering", "D", 5, 4, 20],
              ["RCC-HSMC-101", "UHV – II Understanding Harmony", "A", 8, 2, 16],
              ["RCC-ESC-ME-192", "Workshop/ Manufacturing Practices", "E", 9, 2, 18],
              ["RCC-BSC-PH-191", "Physics Laboratory", "E", 9, 1, 9],
              ["RCC-ESC-EE-191", "Basic Electrical Engineering Laboratory", "E", 9, 1, 9],
              ["RCC-AU-182", "NSS & Yoga", "O", 0, 0, 0],
            ].map(([code, subject, grade, points, credits, cp], i) => (
              <div key={i} className="border border-black rounded-md p-4 bg-white shadow">
                <p><strong>Subject Code:</strong> {code}</p>
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Letter Grade:</strong> {grade}</p>
                <p><strong>Points:</strong> {points}</p>
                <p><strong>Credits:</strong> {credits}</p>
                <p><strong>Credit Points:</strong> {cp}</p>
              </div>
            ))}

            {/* Summary */}
            <div className="bg-white border border-black p-4 rounded-md shadow">
              <p><strong>Total Credits:</strong> 18</p>
              <p><strong>Total Credit Points:</strong> 116</p>
              <p><strong>SGPA:</strong> 6.4</p>
              <p><strong>Result:</strong> P</p>
              <p><strong>Publication Date:</strong> 11/4/2025</p>
            </div>
          </div>

          {/* Signature */}
          <div className="flex justify-between mt-8">
            <div></div>
            <div className="text-center">
              <div className="mb-2">
                <Image src="/signature.png" alt="Signature" width={100} height={40} />
              </div>
              <p className="text-sm">Controller of Examinations</p>
            </div>
          </div>
        </div>

        {/* Grade Card Image (A4 View) */}
<div className="flex justify-center mt-8 w-full px-4">
  <div className="relative w-full max-w-4xl" style={{ aspectRatio: "210 / 297" }}>
    <Image
      src="/grade.jpg"
      alt="Grade Card"
      fill
      className="rounded-lg shadow-md object-contain"
      priority
    />
  </div>
</div>

        
        
        {/* Download PDF */}
        <div className="mt-8 flex justify-center">
          <a
            href="/grade-card.pdf"
            download
            className="bg-blue-500 text-white py-3 px-6 rounded-md flex items-center gap-2"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>
      </main>
    </div>
  )
}
