"use client"

import { useLanguage } from "../contexts/LanguageContext"

import PicturesGrid from "./PicturesGrid"

import images from "../data/fotos.json"

export default function PicturesTab() {
  const { translations } = useLanguage()

  return (
    <div>
      <h3 className="text-2xl font-semibold text-blue-800 mb-6">{translations.gallery}</h3>
      <PicturesGrid images={images} />

      {/* <PicturesCarousel images={images} /> */}
    </div>
  )
}
