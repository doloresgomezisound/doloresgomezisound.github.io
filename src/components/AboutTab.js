import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutTab() {
  const { translations } = useLanguage();

  return (
    <>
      <div className="p-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">{translations.aboutMe}</h3>
          <p className="text-gray-700 mb-4">
            {translations.aboutMe1}
            <br/>
            <br />
            {translations.aboutMe2}
            <br />
            <br />
            {translations.aboutMe3}
            <br />
            <br />
            {translations.aboutMe4}
            <br />
            <br />
            {translations.aboutMe5}
          </p>
        </div>
      </div>
      <div className="mt-8 h-64 overflow-hidden rounded-lg">
        <img
          src={process.env.PUBLIC_URL + "/images/fotos/cover.jpeg"}
          alt="Film production scene"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
