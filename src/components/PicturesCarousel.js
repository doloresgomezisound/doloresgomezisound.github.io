import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import images from "../data/fotos.json";

const PicturesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { translations } = useLanguage();

    const goToPrevious = (e) => {
        e.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e) => {
        e.stopPropagation();
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative h-80 mb-6 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-between z-10 px-4" onClick={openModal}>
                    <button onClick={goToPrevious} className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
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
                    <button onClick={goToNext} className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
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
                </div>

                <div className="h-full w-full cursor-pointer">
                    <img
                        src={process.env.PUBLIC_URL + images[currentIndex]}
                        alt={`Gallery ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer rounded-md overflow-hidden border-2 ${index === currentIndex ? "border-blue-500" : "border-transparent"
                            }`}
                        //onClick={() => goToSlide(index)}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={process.env.PUBLIC_URL + src || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-auto object-cover aspect-video"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-screen" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-0 right-0 bg-black/50 text-white p-2 rounded-full -mt-12 -mr-12"
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
                        <img
                            src={process.env.PUBLIC_URL + images[currentIndex]}
                            alt={`Gallery ${currentIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PicturesCarousel;
