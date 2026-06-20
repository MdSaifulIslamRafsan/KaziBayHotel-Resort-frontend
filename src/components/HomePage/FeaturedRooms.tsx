"use client";
import SectionHeader from "../shared/SectionHeader";
import RoomCard from "../Card/RoomCard";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const rooms = [
    {
        id: 1,
        name: "Deluxe Ocean Suite",
        images: [
            "/images/rooms/room-1.jpg",
            "/images/rooms/room-1-2.jpg",
            "/images/rooms/room-1-3.jpg",
        ],
        price: 180,
        rating: 4.9,
        description:
            "Elegant suite featuring panoramic ocean views and premium amenities.",
        guests: 2,
        bed: "King Bed",
        size: "450 sqft",
    },
    {
        id: 2,
        name: "Presidential Villa",
        images: [
            "/images/rooms/room-2.jpg",
            "/images/rooms/room-2-2.jpg",
            "/images/rooms/room-2-3.jpg",
        ],
        price: 350,
        rating: 5.0,
        description:
            "Luxury villa with private pool, spacious living area and oceanfront view.",
        guests: 4,
        bed: "2 King Beds",
        size: "950 sqft",
    },
    {
        id: 3,
        name: "Garden View Room",
        images: [
            "/images/rooms/room-3.jpg",
            "/images/rooms/room-3-2.jpg",
            "/images/rooms/room-3-3.jpg",
        ],
        price: 120,
        rating: 4.8,
        description:
            "Comfortable room surrounded by lush greenery and tranquil ambiance.",
        guests: 2,
        bed: "Queen Bed",
        size: "320 sqft",
    },
    {
        id: 4,
        name: "Family Suite",
        images: [
            "/images/rooms/room-4.jpg",
            "/images/rooms/room-4-2.jpg",
            "/images/rooms/room-4-3.jpg",
        ],
        price: 240,
        rating: 4.7,
        description:
            "Perfect for families with spacious bedrooms and premium facilities.",
        guests: 5,
        bed: "2 Queen Beds",
        size: "650 sqft",
    },
    {
        id: 5,
        name: "Honeymoon Suite",
        images: [
            "/images/rooms/room-5.jpg",
            "/images/rooms/room-5-2.jpg",
            "/images/rooms/room-5-3.jpg",
        ],
        price: 220,
        rating: 4.9,
        description:
            "Romantic suite designed for couples with breathtaking sunset views.",
        guests: 2,
        bed: "King Bed",
        size: "500 sqft",
    },
    {
        id: 6,
        name: "Executive Room",
        images: [
            "/images/rooms/room-6.jpg",
            "/images/rooms/room-6-2.jpg",
            "/images/rooms/room-6-3.jpg",
        ],
        price: 160,
        rating: 4.8,
        description:
            "Modern executive room ideal for business and leisure travelers.",
        guests: 2,
        bed: "King Bed",
        size: "400 sqft",
    },
];

const FeaturedRooms = () => {
    return (
        <section className="pt-12 lg:py-12 px-4 md:px-6 lg:px-8 bg-background">
            <div className="container mx-auto">
                <SectionHeader
                    subtitle="Featured Rooms"
                    title="Our Most Popular Rooms"
                />

                {/* Mobile Slider */}
                <div className="block lg:hidden relative">
                    {/* Custom Navigation */}

                    <button className="testimonial-prev h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 z-20 -translate-y-1/2">
                        <ChevronLeft size={20} />
                    </button>

                    <button className="testimonial-next h-12 w-12 rounded-full border border-border bg-primary text-muted flex items-center justify-center absolute top-1/2 right-0 z-20 -translate-y-1/2">
                        <ChevronRight size={20} />
                    </button>
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
                        {rooms.map((room) => (
                            <SwiperSlide key={room.id}>
                                <RoomCard room={room} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>

                {/* Explore More */}
                <div className="flex justify-center mt-12">
                    <Button
                        size="lg"
                        className="rounded-full px-10"
                    >
                        Explore More Rooms
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;