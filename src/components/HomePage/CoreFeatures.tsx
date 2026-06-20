"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionHeader from "../shared/SectionHeader";
import { Headset, ShieldCheck, Waves } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Waves,
    title: "Ocean View Experience",
    description:
      "Wake up to breathtaking sea views and enjoy peaceful surroundings throughout your stay.",
    image: "/images/OceanViewExperience.png",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "24/7 Security",
    description:
      "Your safety is our priority with round-the-clock security and monitored premises.",
    image: "/images/Security.png",
  },
  {
    id: 3,
    icon: Headset,
    title: "Guest Support",
    description:
      "Our dedicated team is available anytime to ensure a comfortable and memorable experience.",
    image: "/images/GuestSupport.png",
  },
];

export const CoreFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const currentImage = features[activeFeature]?.image;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [activeFeature]);

  return (
    <section className="pt-12 lg:py-12 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader subtitle="CORE FEATURES" title="Discover Our Features" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-start">
          {/* Left Side - Features List */}
          <div className=" space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "w-full text-left border border-border p-8 rounded-2xl transition-all duration-300 shadow-sm group",
                    activeFeature === index
                      ? "bg-primary/10 shadow-2xl"
                      : "bg-background",
                  )}
                >
                  <div className="lg:flex gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 mb-2 lg:mb-0 rounded-full  flex items-center justify-center flex-shrink-0 transition-colors",
                        activeFeature === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground group-hover:bg-primary/10",
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3
                        className={cn(
                          "text-lg lg:text-xl font-semibold mb-2 transition-colors",
                          activeFeature === index
                            ? "text-foreground"
                            : "text-foreground",
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side - Dynamic Image */}
          <div className=" relative h-full">
            <div className="relative rounded-3xl w-full h-[320px] sm:h-[400px] lg:h-full overflow-hidden shadow-xl  bg-muted">
              <Image
                src={currentImage}
                alt={`${features[activeFeature].title}`}
                fill
                className="object-cover  transition-all duration-500 h-full"
                // sizes="(max-width: 1024px) 100vw, 700px"
                priority
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-md">
                  <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4">
                    FEATURE HIGHLIGHT
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
