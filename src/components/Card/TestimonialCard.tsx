import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import RatingStars from "../shared/RatingStars";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    rating: number;
    review: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const [imgSrc, setImgSrc] = useState(testimonial?.image);

  return (
    <Card className="h-full w-full flex flex-col border border-border bg-transparent rounded-2xl shadow-md">
      <CardContent className="flex flex-col flex-1 w-full">
        {/* Top */}
        <div className="flex items-center justify-between mb-3">
          <FaQuoteLeft className="text-muted-foreground text-5xl" />

          <RatingStars rating={4.3}></RatingStars>
        </div>

        {/* Review */}
        <p className="text-foreground/70 leading-6 flex-1 min-h-32 lg:min-h-[100px]">
          {testimonial?.review}
        </p>

        {/* User */}
        <div className="flex items-center gap-4 mt-8">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={imgSrc}
              alt={testimonial?.name}
              fill
              className="object-cover"
              onError={() => setImgSrc("/images/avatar-profile.png")}
            />
          </div>

          <div>
            <h4 className=" md:text-lg ">{testimonial?.name}</h4>
            <p className="text-foreground/70">{testimonial?.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
