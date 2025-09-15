"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function SolarFAQ() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What's the cost difference between roof-only, roof + rack-mounted solar, or a Timberline Solar Roof?",
      answer:
        "Roof-only solar typically costs $15,000-25,000, roof + rack-mounted systems range from $20,000-35,000, while Timberline Solar Roof systems cost $30,000-50,000 depending on roof size and complexity.",
    },
    {
      question: "How big is a solar panel?",
      answer:
        "Standard residential solar panels are typically 65 inches by 39 inches (about 5.4 feet by 3.25 feet) and weigh around 40-50 pounds each.",
    },
    {
      question: "What are the benefits of going solar?",
      answer:
        "Solar energy reduces electricity bills, increases home value, provides energy independence, reduces carbon footprint, and offers long-term savings with minimal maintenance requirements.",
    },
    {
      question: "Can I get tax credits by switching to solar?",
      answer:
        "Yes, the federal solar Investment Tax Credit (ITC) allows you to deduct 30% of solar installation costs from federal taxes through 2032, with many states offering additional incentives.",
    },
    {
      question: "How much can solar panels save on my electricity bills?",
      answer:
        "Solar panels can reduce electricity bills by 70-100%, with average savings of $1,000-1,500 annually. Total savings over 20 years typically range from $20,000-40,000.",
    },
    {
      question: "How does solar power work?",
      answer:
        "Solar panels convert sunlight into DC electricity using photovoltaic cells. An inverter converts DC to AC electricity for home use, with excess power fed back to the grid or stored in batteries.",
    },
    {
      question: "How does solar feed back into the grid?",
      answer:
        "Through net metering, excess solar energy is automatically fed into the electrical grid. Your utility meter runs backward, giving you credits for the power you contribute.",
    },
    {
      question: "How long do solar panels last?",
      answer:
        "Solar panels typically last 25-30 years with minimal degradation. Most manufacturers offer 20-25 year warranties, and panels often continue producing electricity beyond their warranty period.",
    },
    {
      question: "What's the difference between grid-tied and off-grid solar?",
      answer:
        "Grid-tied systems connect to the utility grid for backup power and net metering. Off-grid systems use batteries for storage and operate independently, requiring more equipment and higher costs.",
    },
     {
      question: "Does extreme weather affect them?",
      answer:
        "Grid-tied systems connect to the utility grid for backup power and net metering. Off-grid systems use batteries for storage and operate independently, requiring more equipment and higher costs.",
    },
    {
      question: 'What are "time of use" rates?',
      answer:
        "Time of use rates charge different electricity prices based on when you use power. Solar generation during peak hours (when rates are highest) maximizes your savings and grid credits.",
    },
    {
      question: "What kind of warranty comes with my solar system?",
      answer:
        "Solar systems typically include 20-25 year panel warranties, 10-15 year inverter warranties, and 10-20 year installation workmanship warranties covering defects and performance guarantees.",
    },
    {
      question: 'Is solar really "free"?',
      answer:
        "Solar isn't free upfront, but many financing options require $0 down. Over time, energy savings often exceed system costs, making solar effectively free or profitable long-term.",
    },
    {
      question: "What happens if my solar panels or roof gets damaged?",
      answer:
        "Solar panels are covered by homeowner's insurance. Professional installation includes roof warranties, and reputable installers provide repair services for both panels and any roof work.",
    },
    {
      question: "Do solar panels work on cloudy days, at night, or in winter?",
      answer:
        "Panels produce 10-25% power on cloudy days and none at night. Winter production decreases but panels work efficiently in cold weather. Grid connection or batteries provide power when needed.",
    },
    {
      question: "How do I store solar energy?",
      answer:
        "Battery storage systems like Tesla Powerwall or Enphase batteries store excess solar energy for use during night or outages. Grid-tied systems use the grid as virtual storage through net metering.",
    },
    {
      question: "How efficient are solar panels today?",
      answer:
        "Modern solar panels are 18-22% efficient, with premium panels reaching 22-24%. Efficiency continues improving while costs decrease, making solar more attractive than ever.",
    },
    {
      question: "What are the common myths about solar?",
      answer:
        "Common myths include: solar doesn't work in cold/cloudy weather (false), panels damage roofs (false with proper installation), and solar is too expensive (costs have dropped 70% in recent years).",
    },
  ]

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
