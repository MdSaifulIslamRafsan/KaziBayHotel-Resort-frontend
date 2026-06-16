"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const VideoOverview = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-12 flex flex-col items-center justify-center">
      {/* Thumbnail */}
      <div className="relative w-full h-[80vh] overflow-hidden shadow-xl cursor-pointer">
        <Image
          src="/images/footer-bg.jpg"
          alt="Hotel Video Thumbnail"
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Ripple */}
          <span className="absolute h-20 w-20 rounded-full bg-primary/20 animate-ping" />

          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary shadow-xl hover:scale-105 transition"
          >
            <Play className="w-6 h-6 ml-1 text-black" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video Overview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoOverview;
