import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { TOffer } from "@/types/RoomType";
import RatingStars from "../shared/RatingStars";

type Props = {
  offer: TOffer;
  reverse?: boolean;
};

const OfferCard = ({ offer, reverse = false }: Props) => {
  return (
    <div
      className={`grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition-all border-1 border-border duration-500 group $
      ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      {/* Content */}
      <div className="relative order-2 md:order-none flex flex-col justify-center p-6 lg:p-8 ">
        <h3 className="text-xl font-semibold xl:text-3xl leading-tight mb-3 md:mb-5">
          {offer.title}
        </h3>

        <div className="flex items-center gap-2 mb-3 md:mb-5">
          <RatingStars rating={offer?.rating}></RatingStars>
          <span>{offer.rating}</span>
          <span className="text-foreground/70">Reviews</span>
        </div>

        <p className="text-foreground/70 leading-7 mb-3 md:mb-5">
          {offer.description}
        </p>

        <div className="flex items-end gap-4 mb-3 md:mb-8">
          <span className="text-2xl xl:text-4xl font-semibold">
            ${offer.price}
          </span>

          <span className="text-sm text-foreground/60">
            Expiry: {offer.expiry}
          </span>
        </div>

        <Button
          variant="default"
          className="w-fit"
        >
          View Offer
          <ArrowRight />
        </Button>
      </div>

      {/* Image */}
      <div className="order-1  md:order-none relative min-h-[350px] xl:min-h-[400px] 2xl:min-h-[450px] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <span
          className={`inline-flex w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium mb-5 text-muted absolute top-4 ${reverse ? "left-4" : "right-4"}  `}
        >
          {offer.discount}% OFF
        </span>
      </div>
    </div>
  );
};

export default OfferCard;
