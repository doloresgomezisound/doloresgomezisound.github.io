"use client"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, toggleLanguage, translations } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-sm font-medium"
      aria-label={language === "en" ? translations.switchES : translations.switchEN}
    >
      {language === "en" ? "ES 🇪🇸" : "EN 🇬🇧"}
    </button>
  )
}
