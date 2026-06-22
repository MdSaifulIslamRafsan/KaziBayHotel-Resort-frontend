"use client";

import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import {
  BedDouble,
  Wifi,
  Waves,
  ShieldCheck,
  Utensils,
  Trees,
} from "lucide-react";
import FacilitiesCard from "../Card/FacilitiesCard";

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
    <section className="pt-12 lg:py-12 bg-background">
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
              {amenities.map((amenity, index) => (
                <FacilitiesCard
                  key={amenity?.id}
                  amenity={amenity}
                  index={index}
                ></FacilitiesCard>
              ))}
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
