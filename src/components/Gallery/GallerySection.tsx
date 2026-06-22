"use client";
import { useState } from "react";
import Image from "next/image";
import SharedBanner from "../shared/SharedBanner";
import { GalleryImage, RoomType } from "@/types/GalleryType";
import ImageModal from "./ImageModal";
// import { Eye } from 'lucide-react';

// Mock data
const ROOM_TYPES: RoomType[] = [
  {
    id: "all",
    label: "All Gallery",
    description: "Explore all luxury resort moments",
  },
  {
    id: "deluxe",
    label: "Deluxe Rooms",
    description: "Comfortable rooms with modern amenities",
  },
  {
    id: "suite",
    label: "Suite Rooms",
    description: "Spacious suites with premium features",
  },
  {
    id: "standard",
    label: "Standard Rooms",
    description: "Cozy rooms perfect for travelers",
  },
  {
    id: "penthouse",
    label: "Penthouse",
    description: "Luxury suites with breathtaking views",
  },
];

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Deluxe Room with Ocean View",
    roomType: "deluxe",
    title: "Deluxe Ocean View",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    alt: "Luxury Suite Bedroom",
    roomType: "suite",
    title: "Suite Bedroom",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    alt: "Standard Room Interior",
    roomType: "standard",
    title: "Standard Room",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Living Area",
    roomType: "penthouse",
    title: "Penthouse Suite",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    alt: "Deluxe Bathroom",
    roomType: "deluxe",
    title: "Deluxe Spa Bath",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    alt: "Suite with Pool View",
    roomType: "suite",
    title: "Suite Pool View",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    alt: "Standard Room Comfort",
    roomType: "standard",
    title: "Standard Comfort",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Terrace",
    roomType: "penthouse",
    title: "Penthouse Terrace",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Terrace",
    roomType: "penthouse",
    title: "Penthouse Terrace",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Terrace",
    roomType: "penthouse",
    title: "Penthouse Terrace",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Terrace",
    roomType: "penthouse",
    title: "Penthouse Terrace",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    alt: "Penthouse Terrace",
    roomType: "penthouse",
    title: "Penthouse Terrace",
  },
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<
    "deluxe" | "suite" | "standard" | "penthouse" | "all"
  >("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeTab === "all" ? true : img.roomType === activeTab,
  );

  return (
    <section className="w-full min-h-screen bg-background">
      {/* Banner */}
      <SharedBanner
        title="Resort Gallery"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* Tab System */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-5 border-b border-border">
          {ROOM_TYPES?.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveTab(room?.id)}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-all relative ${
                activeTab === room.id ? "text-primary font-semibold" : ""
              }`}
            >
              {room.label}
              {activeTab === room.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Room Type Description */}
        {/* <div className="mb-8">
                    <p className="text-foreground text-sm md:text-base max-w-2xl">
                        {ROOM_TYPES.find((r) => r.id === activeTab)?.description}
                    </p>
                </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[150px] gap-6">
          {filteredImages.map((image, index) => {
            const spanClass =
              index % 6 === 0
                ? "lg:col-span-6 lg:row-span-2"
                : index % 6 === 1
                  ? "lg:col-span-3 lg:row-span-2"
                  : index % 6 === 2
                    ? "lg:col-span-3 lg:row-span-1"
                    : index % 6 === 3
                      ? "lg:col-span-3 lg:row-span-1"
                      : index % 6 === 4
                        ? "lg:col-span-4 lg:row-span-2"
                        : "lg:col-span-8 lg:row-span-2";
            return (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-lg bg-muted cursor-pointer ${spanClass}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover bg-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300" />

                {/* Room Type Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-muted text-lg font-semibold text-center mb-2">
                    {image.title}
                  </p>
                  {/* <Eye className="text-muted w-6 h-6" /> */}
                </div>

                {/* Border effect on hover */}
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={filteredImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </section>
  );
};

export default GallerySection;
