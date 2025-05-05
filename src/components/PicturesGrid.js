import { useState, useRef, useEffect } from "react"

export default function PicturesTab({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  const openModal = (index) => {
    previousFocusRef.current = document.activeElement
    setSelectedImage(index)
  }

  const closeModal = () => {
    if (previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
    setSelectedImage(null)
  }

  const goToNext = () => {
    setSelectedImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrevious = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedImage === null) return

    if (e.key === "ArrowRight") {
      goToNext()
      e.preventDefault()
    } else if (e.key === "ArrowLeft") {
      goToPrevious()
      e.preventDefault()
    } else if (e.key === "Escape") {
      closeModal()
      e.preventDefault()
    }
  }

  // Focus the modal when it opens
  useEffect(() => {
    if (selectedImage !== null && modalRef.current) {
      // Small delay to ensure the modal is rendered before focusing
      setTimeout(() => {
        modalRef.current.focus()
      }, 50)
    }
  }, [selectedImage])

  return (
    <div>
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-modal="true"
          role="dialog"
          aria-label={`Image ${selectedImage + 1} of ${images.length}`}
          style={{ outline: "none" }}
        >
          <div className="relative max-w-4xl max-h-screen w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-0 right-0 bg-black/50 text-white p-2 rounded-full z-10"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-r-full z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-l-full z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>

            {/* Main image */}
            <img
              src={images[selectedImage]}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}
