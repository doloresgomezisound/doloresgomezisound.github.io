"use client"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, toggleLanguage, translations } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-secondary"
      aria-label={language === "en" ? translations.switchES : translations.switchEN}
    >
      {language === "en" ? "ES 🇪🇸" : "EN 🇬🇧"}
    </button>
  )
}
