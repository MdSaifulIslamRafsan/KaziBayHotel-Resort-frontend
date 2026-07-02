"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "../Modal/ImageModal";
import { RoomImage, RoomSliderProps } from "@/types/RoomDetailsType";

const RoomSlider = ({ images }: RoomSliderProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );



  return (
    <section className="w-full py-12 lg:py-12 mt-3">
      {/* Slider Container */}
      <div className="relative bg-muted rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="room-slider"
        >
          {images.map((room, index) => (
            <SwiperSlide key={room.id}>
              <div
                onClick={() => setSelectedImageIndex(index)}
                className="relative group h-96 md:h-[420px] lg:h-96 overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-muted mb-3">
                    {room.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="testimonial-prev h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 z-20 left-1/6 -translate-y-1/2">
          <ChevronLeft size={20} />
        </button>

        <button className="testimonial-next h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 right-1/6 z-20 -translate-y-1/2">
          <ChevronRight size={20} />
        </button>
      </div>
      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </section>
  );
};

export default RoomSlider;
