"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/roofing", label: "Roofing" },
    { href: "/solar", label: "Solar" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
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
          <nav className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center justify-center font-poppins font-semibold text-[18px] leading-none transition-colors ${
                    isActive
                      ? "bg-gradient-to-b from-[#4981C2] to-[#63CDF6] bg-clip-text text-transparent"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
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
