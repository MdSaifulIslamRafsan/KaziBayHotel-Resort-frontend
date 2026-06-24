"use client";

import TestimonialCard from "../Card/TestimonialCard";
import SectionHeader from "../shared/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// import { ChevronLeft, ChevronRight } from "lucide-react";
export const testimonials = [
  {
    id: 1,
    name: "Amanda Nicole",
    role: "CEO, AB Tech",
    image: "/images/testimonials/user-1.jpg",
    rating: 5,
    review:
      "I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!",
  },
  {
    id: 2,
    name: "Sarah Taylor",
    role: "CEO, AB Tech",
    image: "/images/testimonials/user-2.jpg",
    rating: 5,
    review:
      "The staff was incredibly welcoming and the resort exceeded every expectation. A truly memorable stay.",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    role: "CEO, AB Tech",
    image: "/images/testimonials/user-3.jpg",
    rating: 5,
    review:
      "Amazing experience with luxurious rooms and breathtaking views. I would definitely come back again.",
  },
  {
    id: 4,
    name: "Michael Scott",
    role: "Marketing Director",
    image: "/images/testimonials/user-4.jpg",
    rating: 5,
    review:
      "Exceptional service, beautiful atmosphere, and delicious food. Everything was perfect.",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-12 lg:py-8 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader subtitle="Testimonials" title="What Our Guests Say" />
        <div className="relative">
          {/* Custom Navigation */}

          {/* <button className="testimonial-prev h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 z-20 -translate-y-1/2">
                        <ChevronLeft size={20} />
                    </button>

                    <button className="testimonial-next h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 right-0 z-20 -translate-y-1/2">
                        <ChevronRight size={20} />
                    </button> */}

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="!h-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="!h-full flex items-stretch"
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
