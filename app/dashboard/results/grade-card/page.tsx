import Navbar from "@/components/navbar"
import Image from "next/image"
import { Download } from "lucide-react"

export default function GradeCard() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-4xl">
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

          <div className="border border-black">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2">
                    <strong>Name:</strong> SURAJ PASWAN
                  </td>
                  <td className="p-2" colSpan={2}></td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2">
                    <strong>Registration No:</strong> 241170110502 OF 2024-2025
                  </td>
                  <td className="p-2" colSpan={2}>
                    <strong>Roll No:</strong> 11700224110
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-2" colSpan={3}>
                    <strong>Program:</strong> B.Tech-IT
                  </td>
                </tr>
                <tr className="border-b border-black bg-gray-100">
                  <th className="border-r border-black p-2 w-1/4 text-center">Subject Code</th>
                  <th className="border-r border-black p-2 w-2/4 text-center">Subjects Offered</th>
                  <th className="border-r border-black p-2 w-1/12 text-center">Letter Grade</th>
                  <th className="border-r border-black p-2 w-1/12 text-center">Points</th>
                  <th className="border-r border-black p-2 w-1/12 text-center">Credits</th>
                  <th className="p-2 w-1/12 text-center">Credit Points</th>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-ESC-PH-101</td>
                  <td className="border-r border-black p-2 text-center">Physics</td>
                  <td className="border-r border-black p-2 text-center">D</td>
                  <td className="border-r border-black p-2 text-center">5</td>
                  <td className="border-r border-black p-2 text-center">4</td>
                  <td className="p-2 text-center">20</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-BSC-M-101</td>
                  <td className="border-r border-black p-2 text-center">Mathematics - I A</td>
                  <td className="border-r border-black p-2 text-center">C</td>
                  <td className="border-r border-black p-2 text-center">6</td>
                  <td className="border-r border-black p-2 text-center">4</td>
                  <td className="p-2 text-center">24</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-ESC-EE-101</td>
                  <td className="border-r border-black p-2 text-center">Basic Electrical Engineering</td>
                  <td className="border-r border-black p-2 text-center">D</td>
                  <td className="border-r border-black p-2 text-center">5</td>
                  <td className="border-r border-black p-2 text-center">4</td>
                  <td className="p-2 text-center">20</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-HSMC-101</td>
                  <td className="border-r border-black p-2 text-center">UHV – II Understanding Harmony</td>
                  <td className="border-r border-black p-2 text-center">A</td>
                  <td className="border-r border-black p-2 text-center">8</td>
                  <td className="border-r border-black p-2 text-center">2</td>
                  <td className="p-2 text-center">16</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-ESC-ME-192</td>
                  <td className="border-r border-black p-2 text-center">Workshop/ Manufacturing Practices</td>
                  <td className="border-r border-black p-2 text-center">E</td>
                  <td className="border-r border-black p-2 text-center">9</td>
                  <td className="border-r border-black p-2 text-center">2</td>
                  <td className="p-2 text-center">18</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-BSC-PH-191</td>
                  <td className="border-r border-black p-2 text-center">Physics Laboratory</td>
                  <td className="border-r border-black p-2 text-center">E</td>
                  <td className="border-r border-black p-2 text-center">9</td>
                  <td className="border-r border-black p-2 text-center">1</td>
                  <td className="p-2 text-center">9</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-ESC-EE-191</td>
                  <td className="border-r border-black p-2 text-center">Basic Electrical Engineering Laboratory</td>
                  <td className="border-r border-black p-2 text-center">E</td>
                  <td className="border-r border-black p-2 text-center">9</td>
                  <td className="border-r border-black p-2 text-center">1</td>
                  <td className="p-2 text-center">9</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center">RCC-AU-182</td>
                  <td className="border-r border-black p-2 text-center">NSS & Yoga</td>
                  <td className="border-r border-black p-2 text-center">O</td>
                  <td className="border-r border-black p-2 text-center">0</td>
                  <td className="border-r border-black p-2 text-center">0</td>
                  <td className="p-2 text-center">0</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-2 text-center" colSpan={3}></td>
                  <td className="border-r border-black p-2 text-center font-bold">Total</td>
                  <td className="border-r border-black p-2 text-center font-bold">18</td>
                  <td className="p-2 text-center font-bold">116</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-2" colSpan={6}>
                    <strong>SGPA:</strong> 6.4
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-2" colSpan={6}>
                    <strong>Result:</strong> P
                  </td>
                </tr>
                <tr>
                  <td className="p-2" colSpan={6}>
                    <strong>Publication Date:</strong> 11/4/2025
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-8">
            <div></div>
            <div className="text-center">
              <div className="mb-2">
                <Image src="/signature.png" alt="Signature" width={100} height={40} />
              </div>
              <p className="text-sm">Controller of Examinations</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
  <div className="relative w-full max-w-4xl aspect-[210/297]">
    <Image
      src="/grade.jpg"
      alt="Grade Card"
      fill
      className="rounded-lg shadow-md object-contain"
    />
  </div>
</div>

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
        </div>
      </main>
    </div>
  )
}