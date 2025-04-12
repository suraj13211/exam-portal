import Image from "next/image"
import Link from "next/link"
import { FileText, CreditCard, FileCheck, GraduationCap, FileEdit } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-blue flex flex-col">
      {/* Header */}
      <header className="p-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
        <Image
          src="/logo.png"
          alt="RCCIIT Logo"
          width={60}
          height={60}
          className="bg-white rounded-full p-1"
        />
        <div className="text-center md:text-left">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            RCC Institute of Information Technology
          </h1>
          <p className="text-white text-xs md:text-sm">
            A Unit of Autonomous Society of Higher Education, Govt. of West Bengal
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-10 px-2">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">
            RCCIIT <span className="text-yellow-300">Exam Portal</span>
          </h2>
          <h3 className="text-white text-2xl md:text-4xl font-bold mb-6">(AUTONOMOUS)</h3>
          <p className="text-white text-base md:text-xl max-w-3xl mx-auto">
            Streamline your exam form submissions and fee payments with our secure, user-friendly
            online portal. Experience hassle-free academic management at your fingertips.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mb-10">
          <Link
            href="/login"
            className="bg-yellow-button text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-lg md:text-xl flex items-center gap-2"
          >
            Enter Exam Portal <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-2">
          {[
            {
              icon: <FileText className="w-10 h-10 text-blue-500" />,
              title: "Form Submission",
              desc: "Simple online form filling with intuitive interface.",
            },
            {
              icon: <CreditCard className="w-10 h-10 text-green-500" />,
              title: "Fees Payment",
              desc: "Secure payment options with instant confirmation.",
            },
            {
              icon: <FileCheck className="w-10 h-10 text-purple-500" />,
              title: "Admit Cards",
              desc: "Instant admit card generation and download.",
            },
            {
              icon: <GraduationCap className="w-10 h-10 text-yellow-500" />,
              title: "Results",
              desc: "Quick access to semester and exam results.",
            },
            {
              icon: <FileEdit className="w-10 h-10 text-red-500" />,
              title: "Paper Review",
              desc: "Review your answer scripts and marks.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center card-shadow flex flex-col items-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white text-sm md:text-base">
        <p>© 2024 RCC Institute of Information Technology. All Rights Reserved.</p>
        <p className="mt-1 text-xs md:text-sm">
          Built with ❤️ for Juniors by Sagnik, Swapnendu & Sayan
        </p>
      </footer>
    </div>
  )
}
