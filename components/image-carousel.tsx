"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample images - replace with your actual images
  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const openImage = (index: number) => {
    setSelectedImage(index)
    setIsOpen(true)
  }

  return (
    <div className="relative">
      <div className="relative h-80 overflow-hidden rounded-lg mb-4">
        <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-blue-500/20 hover:bg-blue-500/40 text-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-blue-500/20 hover:bg-blue-500/40 text-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight />
          </Button>
        </div>

        <div
          className="h-full w-full transition-transform duration-500 ease-in-out cursor-pointer"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onClick={() => openImage(currentIndex)}
        >
          <div className="flex h-full">
            {images.map((src, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {images.map((src, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              openImage(index)
            }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              width={150}
              height={100}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </Button>
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`Gallery image ${selectedImage + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
