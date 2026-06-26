import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";


const AboutUs = () => {
  return (
    <section className="mx-auto container px-4 md:px-6 lg:px-8 pt-12 lg:py-8 bg-background">
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 2xl:gap-20">
        {/* Left Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/resort/about.jpg"
            alt="Luxury Resort"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Right Content */}
        <div className="space-y-4">
          <SectionHeader
            subtitle="About Our Resort"
            title="Where Luxury Meets Nature"
            align="start"
          />
          <p className="text-foreground/60 leading-relaxed text-base md:text-lg">
            Escape to a world where comfort meets nature. Our resort offers a
            serene beachfront experience with modern luxury, world-class
            hospitality, and unforgettable views. Whether you're here for
            relaxation or adventure, we ensure every moment feels special.
          </p>

          <p className="text-foreground/60 leading-relaxed text-base md:text-lg">
            We believe in creating memories that last a lifetime — from sunrise
            over the ocean to candle-lit dinners under the stars.
          </p>

          <Button  size="lg" className="mt-4">
            Explore More <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
