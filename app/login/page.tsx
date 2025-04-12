"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials here
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-blue flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to RCCIIT Exam Portal</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your Email (cse2024xxx@rcciit.org.in)"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Reset Password / Generate New Password
          </a>
        </div>
      </div>
    </div>
  )
}
