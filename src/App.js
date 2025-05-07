"use client"

import { useState } from "react"
import Header from "./components/Header"
import AboutTab from "./components/AboutTab"
import CVTab from "./components/CVTab"
import PicturesTab from "./components/PicturesTab"
import ContactTab from "./components/ContactTab"
import { LanguageProvider } from "./contexts/LanguageContext"
import { useLanguage } from "./contexts/LanguageContext"
import { ThemeProvider } from "./contexts/ThemeContext"

// Tab navigation component
function TabNavigation({ activeTab, setActiveTab }) {
  const { translations } = useLanguage()

  const tabs = [
    { id: "about", label: translations.about },
    { id: "cv", label: translations.cv },
    { id: "pictures", label: translations.pictures },
    { id: "contact", label: translations.contact },
  ]

  return (
    <div className="border-b border-gray-200 mt-6">
      <nav className="flex w-full -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 md:py-4 px-2 md:px-6 flex-1 font-medium text-xs md:text-sm border-b-2 text-center ${
              activeTab === tab.id
                ? "border-gray-700 text-gray-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

// Main app component
function AppContent() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          {activeTab === "about" && <AboutTab />}
          {activeTab === "cv" && <CVTab />}
          {activeTab === "pictures" && <PicturesTab />}
          {activeTab === "contact" && <ContactTab />}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
