"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionHeader from "../shared/SectionHeader";
import {
  BedDouble,
  Wifi,
  Waves,
  ShieldCheck,
  Utensils,
  Trees,
} from "lucide-react";

const amenities = [
  {
    id: 1,
    icon: BedDouble,
    title: "Exclusive Suites",
    description:
      "Spacious and elegantly designed suites with premium finishes.",
  },
  {
    id: 2,
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with high-speed internet throughout the resort.",
  },
  {
    id: 3,
    icon: Waves,
    title: "Ocean View Infinity Pool",
    description:
      "Relax in our infinity pool overlooking breathtaking ocean views.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock security ensuring a safe and peaceful stay.",
  },
  {
    id: 5,
    icon: Utensils,
    title: "Fine Dining Restaurant",
    description: "Enjoy gourmet dishes prepared by world-class chefs.",
  },
  {
    id: 6,
    icon: Trees,
    title: "Eco-Friendly Environment",
    description:
      "Surrounded by nature with sustainable eco-friendly practices.",
  },
];

const OurFacilities = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          subtitle="OUR FACILITIES"
          title="Everything You Need for a Perfect Stay"
          className="mb-16"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-start">
          {/* Left Side - Sticky Cards */}
          <div className="">
            <div className="space-y-6">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;

                return (
                  <div
                    key={amenity.id}
                    className={cn(
                      "lg:sticky rounded-3xl border border-border shadow-sm p-8 cursor-pointer transition-all duration-500 bg-background",
                    )}
                    style={{
                      top: `${80 + index * 30}px`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="">
                      <div
                        className={cn(
                          "w-12 h-12 bg-primary text-muted rounded-full flex items-center justify-center text-2xl flex-shrink-0 transition-all mb-2 lg:mb-4",
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="pt-1 flex-1">
                        <h3
                          className={cn(
                            "text-lg lg:text-xl font-semibold mb-3 transition-colors",
                          )}
                        >
                          {amenity.title}
                        </h3>
                        <p className="leading-relaxed text-foreground/60">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sticky top-20 max-h-[600px] w-full h-[320px] rounded-3xl overflow-hidden sm:h-[400px] lg:h-full">
            <Image
              src={"/images/OceanViewExperience.png"}
              alt={"facilities-image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;
