import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div className="text-lg font-bold text-gray-900">
                SMARTER ROOF
                <br />
                <span className="text-xs font-normal">INC</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-500 font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
            <Link href="/roofing" className="text-gray-700 hover:text-blue-500">
              Roofing
            </Link>
            <Link href="/solar" className="text-gray-700 hover:text-blue-500">
              Solar
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-500">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>

          <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6">Get Estimate</Button>
        </div>
      </div>
    </header>
  )
}
