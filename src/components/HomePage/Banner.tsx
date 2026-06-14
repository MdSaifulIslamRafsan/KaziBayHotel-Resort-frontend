
import React from "react";
import BannerForm from "./BannerForm";


const Banner = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">

      {/*  Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/banner.mp4" type="video/mp4" />
      </video>

      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6">

          {/* Text Content */}
          <div className="text-muted text-center space-y-4 mb-8 max-w-4xl mx-auto">

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Find Your Perfect Luxury Resort Stay
            </h1>

            <p className="text-muted-foreground md:text-lg">
              Discover handpicked resorts and hotels with world-class comfort,
              breathtaking views, and unforgettable experiences. Book your dream getaway in seconds.
            </p>

          </div>

          {/* Search Form */}
          <BannerForm></BannerForm>

        </div>
      </div>

    </section>
  );
};

export default Banner;