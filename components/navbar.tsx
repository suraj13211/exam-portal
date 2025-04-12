import Image from "next/image"
import Link from "next/link"
import { Home, User, LogOut } from "lucide-react"

export default function Navbar() {
  return (
    <div className="bg-[#4169e1] p-4 flex items-center justify-between">
      <Link href="/dashboard">
        <div className="flex items-center">
          <Image src="/logo.png" alt="RCCIIT Logo" width={60} height={60} className="bg-white rounded-full p-1" />
        </div>
      </Link>

      <div className="flex gap-4">
        <Link href="/dashboard" className="nav-button">
          <Home size={20} />
          Home
        </Link>
        <Link href="/profile" className="nav-button">
          <User size={20} />
          Profile
        </Link>
        <Link href="/" className="sign-out-button">
          <LogOut size={20} />
          Sign Out
        </Link>
      </div>
    </div>
  )
}
