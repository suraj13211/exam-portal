"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import { Download, FileCheck, User, Lock } from "lucide-react"

export default function AdmitCard() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/AdmitCard_Suraj.pdf" // Put this PDF in your /public folder
    link.download = "AdmitCard_Suraj.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-3xl">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center justify-center gap-4 mb-6">
            <FileCheck size={32} />
            <h1 className="text-3xl font-bold">Admit Card</h1>
          </div>
          <p className="text-center text-gray-600 mb-8">Academic Year 2024-2025</p>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <User size={24} className="text-blue-500" />
                <h2 className="text-2xl font-bold">SURAJ PASWAN</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-medium">Roll Number:</p>
                  <p className="font-semibold">11700224110</p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium">Registration No:</p>
                  <p className="font-semibold">241170110502 OF 2024-2025</p>
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

            {/* Fixed Student Photo */}
            <div className="w-full md:w-40 flex justify-center">
              <div className="border-2 border-blue-300 rounded-md p-1">
                <Image
                  src="/suraj-photo.jpg" // Place this photo in your public folder
                  alt="Suraj Paswan"
                  width={150}
                  height={180}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-md flex items-center gap-2"
              onClick={handleDownload}
            >
              <Download size={20} />
              Download Admit Card
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t text-center flex items-center justify-center gap-2 text-gray-600">
            <Lock size={16} />
            <p>Confidential Document | For Examination Purposes Only</p>
          </div>
        </div>
      </main>
    </div>
  )
}
