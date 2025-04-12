import Image from "next/image"
import Link from "next/link"
import { FileText, CreditCard, FileCheck, GraduationCap, FileEdit } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <header className="p-4 flex items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="RCCIIT Logo" width={60} height={60} className="bg-white rounded-full p-1" />
          <div>
            <h1 className="text-white text-2xl font-bold">RCC Institute of Information Technology</h1>
            <p className="text-white text-sm">A Unit of Autonomous Society of Higher Education, Govt. of West Bengal</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-white text-5xl font-bold mb-2">
            <span className="text-white">RCCIIT </span>
            <span className="text-yellow-300">Exam Portal</span>
          </h2>
          <h3 className="text-white text-4xl font-bold mb-8">(AUTONOMOUS)</h3>
          <p className="text-white text-xl max-w-4xl mx-auto">
            Streamline your exam form submissions and fee payments with our secure, user-friendly online portal.
            Experience hassle-free academic management at your fingertips.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Link
            href="/login"
            className="bg-yellow-button text-black font-bold py-4 px-8 rounded-full text-xl flex items-center gap-2"
          >
            Enter Exam Portal <span className="text-2xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-lg text-center card-shadow">
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Form Submission</h3>
            <p className="text-gray-600">Simple online form filling with intuitive interface.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center card-shadow">
            <div className="flex justify-center mb-4">
              <CreditCard className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fees Payment</h3>
            <p className="text-gray-600">Secure payment options with instant confirmation.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center card-shadow">
            <div className="flex justify-center mb-4">
              <FileCheck className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Admit Cards</h3>
            <p className="text-gray-600">Instant admit card generation and download.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center card-shadow">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Results</h3>
            <p className="text-gray-600">Quick access to semester and exam results.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center card-shadow">
            <div className="flex justify-center mb-4">
              <FileEdit className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Paper Review</h3>
            <p className="text-gray-600">Review your answer scripts and marks.</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-white">
        <p>© 2024 RCC Institute of Information Technology. All Rights Reserved.</p>
        <p className="text-sm">Built with ❤️ for Juniors by Sagnik, Swapnendu & Sayan</p>
      </footer>
    </div>
  )
}
