import React from "react";

import { useLanguage } from "../contexts/LanguageContext";

import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { translations } = useLanguage();

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-between mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-700">
            <img
              src={process.env.PUBLIC_URL + "/images/fotos/7.jpg"}
              alt="Dolores Gomez Iwachiw"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-2">
              DOLORES
              <br />
              GOMEZ IWACHIW
            </h1>
            <a className="font-bold text-blue-500" href="mailto:doloresgomezisound@gmail.com">doloresgomezisound@gmail.com</a>
            <h2 className="text-xl text-blue-600 mt-2">{translations.subtitle}</h2>
          </div>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
}
