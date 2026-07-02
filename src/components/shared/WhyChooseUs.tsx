"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Luxury Accommodation",
  "Private Island Experience",
  "24/7 Premium Service",
  "World Class Dining",
];

const WhyChooseUs = () => {
  return (
    <section className="mx-auto container px-4 md:px-10 lg:px-20 pt-12 lg:py-12 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Why We're the Best Place for Your Vacation"
            align="start"
          />

          <p className="text-foreground/60 leading-relaxed">
            Your safety and well-being are our highest priorities. We follow
            strict cleaning protocols, enhanced security measures, and
            round-the-clock monitoring to ensure you enjoy complete peace and
            luxury during your stay.
          </p>

          {/* Feature badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((item, i) => (
              <Badge
                key={i}
                className="px-4 py-2 bg-primary/5 hover:bg-primary/15 text-foreground text-sm rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                {item}
              </Badge>
            ))}
          </div>

          {/* small highlight line */}
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-primary" />
            These characteristics prioritize comfort and quality.
          </div>

          <Button size="lg" className="mt-4">
            Explore More <ArrowRight />
          </Button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/rooms/room-1.jpg"
            alt="Luxury Resort"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          {/* overlay badge */}
          <div className="absolute bottom-4 right-4 bg-primary/5 backdrop-blur-md px-4 py-3 rounded-xl shadow-md text-center">
            <p className="text-lg font-bold text-muted">4k+</p>
            <p className="text-xs text-muted/60">Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
