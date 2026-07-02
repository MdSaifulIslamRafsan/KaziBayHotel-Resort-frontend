"use client"
import BlogCard from "../Card/BlogCard"
import SectionHeader from "../shared/SectionHeader";
import { Button } from "../ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";

const blogs = [
    {
        id: 1,
        image: "/images/rooms/room-1.jpg",
        title: "Your Journey Starts With Us",
        description:
            "From eco-friendly resorts and sustainable stays to personalized services, our platform makes every trip memorable and stress-free.",
        date: "19 Oct, 2025",
        comments: 3,
        slug: "your-journey-starts-with-us",
    },
    {
        id: 2,
        image: "/images/rooms/room-1-2.jpg",
        title: "Where Stay Feels Special",
        description:
            "Our carefully curated hotels and resorts combine world-class comfort, seamless service, and thoughtful amenities for every guest.",
        date: "17 Oct, 2025",
        comments: 3,
        slug: "where-stay-feels-special",
    },
    {
        id: 3,
        image: "/images/rooms/room-1.jpg",
        title: "From Click To Comfort",
        description:
            "From the moment you book to the day you check out, we focus on creating an experience built around convenience and comfort.",
        date: "15 Oct, 2025",
        comments: 3,
        slug: "from-click-to-comfort",
    },
  
];

const Blogs = () => {
    return (
        <section className="container mx-auto px-4 md:px-10 lg:px-20 py-12 lg:py-8 bg-background">

            <SectionHeader
                subtitle="Latest Articles"
                title="Travel Tips & Stories"
            />

            {/* Mobile Slider */}
            <div className="block lg:hidden relative">
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
                    slidesPerView={1}
                    breakpoints={{
                        430: {
                            slidesPerView: 1.3,
                            spaceBetween: 24,
                        },
                        500: {
                            slidesPerView: 1.5,
                            spaceBetween: 24,
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog?.id}>
                            <BlogCard blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            {/* Explore More */}
            <div className="flex justify-center mt-12">
                <Button
                    size="lg"
                >
                    Explore More <ArrowRight />
                </Button>
            </div>


        </section>
    )
}

export default Blogs