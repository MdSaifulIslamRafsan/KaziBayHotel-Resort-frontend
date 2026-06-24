import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ModalProps } from "@/types/GalleryType";
import { useState } from "react";
import Image from "next/image";
const ImageModal = ({ images, initialIndex, onClose }: ModalProps) => {
  console.log({ images, initialIndex, onClose });
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted hover:text-foreground/70 transition"
      >
        <X size={32} />
      </button>

      {/* Image Container */}
      <div className="relative w-full max-w-4xl">
        <div className="relative aspect-[16/8] 2xl:aspect-video bg-black rounded-lg overflow-hidden">
          <Image
            src={currentImage?.src}
            alt={currentImage?.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-muted hover:text-primary transition"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-muted hover:text-primary transition"
        >
          <ChevronRight size={40} />
        </button>

        {/* Image Info */}
        <div className="mt-4 text-muted text-center">
          <p className="text-sm text-muted">
            {currentIndex + 1} / {images?.length}
          </p>
          <p className="text-lg font-light mt-1">
            {currentImage?.title || currentImage?.alt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
