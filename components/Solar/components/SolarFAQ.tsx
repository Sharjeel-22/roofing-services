"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { faqItems } from "../constants"

export function SolarFAQ() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)



  const toggleExpanded = (index: number) => {
    console.log("[v0] Clicked item:", index, "Current expanded:", expandedItem)
    const newExpandedItem = expandedItem === index ? null : index
    console.log("[v0] Setting expanded to:", newExpandedItem)
    setExpandedItem(newExpandedItem)
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Solar Resources & FAQs</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => {
              const isExpanded = expandedItem === index
              console.log("[v0] Item", index, "isExpanded:", isExpanded)

              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex items-start justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <p className="text-gray-800 text-sm leading-relaxed pr-4 flex-1">{item.question}</p>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-300 flex items-center justify-center">
                      <ChevronDown
                        className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                      <p className="text-gray-600 text-sm leading-relaxed pt-3">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </main>
  )
}
