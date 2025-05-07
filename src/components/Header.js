import React from "react";

import { useLanguage } from "../contexts/LanguageContext";

import LanguageToggle from "./LanguageToggle";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { translations } = useLanguage();

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-between mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700">
            <img
              src={process.env.PUBLIC_URL + "/images/fotos/7.jpg"}
              alt="Dolores Gomez Iwachiw"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight mb-2">
              DOLORES GOMEZ IWACHIW
            </h1>
            <h2 className="text-xl text-gray-600 mt-2">{translations.subtitle}</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
