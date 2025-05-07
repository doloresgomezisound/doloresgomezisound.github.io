import React from "react"
import { useLanguage } from "../contexts/LanguageContext"

import films from "../data/films.json"

export default function CVTab() {
  const { translations } = useLanguage()

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://drive.google.com/file/d/1XCW-f1J7RDNZYmYZxgInEyJmtnXaXMTs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {translations.downloadCV}
        </a>

        <a
          href="https://www.imdb.com/es/name/nm15900889/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          {translations.imdb}
        </a>
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 mb-6">{translations.works}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {films.map((film) => (
          <div
            key={film.id}
            className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="sm:w-2/5 md:w-1/3 lg:w-1/4 h-48 flex items-center justify-center bg-gray-50">
              <img
                src={process.env.PUBLIC_URL + film.posterUrl}
                alt={`${film.title} poster`}
                className="w-auto max-h-full object-contain"
                style={{ maxWidth: "90%" }}
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-700">{film.title}</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-sm text-gray-500">{translations.year}</p>
                  <p className="text-gray-700">{film.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{translations.type}</p>
                  <p className="text-gray-700">{translations[film.type]}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">{translations.role}</p>
                  <p className="text-gray-700">{translations[film.role]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
