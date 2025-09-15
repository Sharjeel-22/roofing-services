import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Text */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              {/* Simplified logo container */}
              <Image
                src="/images/logo.png"
                alt="SMARTER ROOF Logo"
                width={197}
                height={70}
                className="rounded-[10px] object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="w-[55px] h-[27px] flex items-center justify-center font-poppins font-semibold text-[18px] leading-none bg-gradient-to-b from-[#4981C2] to-[#63CDF6] bg-clip-text text-transparent"
            >
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

          {/* Call to Action */}
          <Button className="text-white rounded-full h-[47px] w-[159px] px-[21px] py-[10px] bg-gradient-to-b from-[#4981C2] to-[#63CDF6] hover:opacity-90 transition-opacity">
            Get Estimate
          </Button>
        </div>
      </div>
    </header>
  )
}