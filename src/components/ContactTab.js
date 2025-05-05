"use client"

import { useLanguage } from "../contexts/LanguageContext"


export default function ContactTab() {
  const { translations } = useLanguage()

  return (
    <div>
      <h3 className="text-2xl font-semibold text-blue-800 mb-6">{translations.getInTouch}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-4">
            {translations.contactText}
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-700 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{translations.basedIn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
