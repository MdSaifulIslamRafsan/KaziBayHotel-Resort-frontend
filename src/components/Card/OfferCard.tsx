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
            className={`grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all border-1 border-border duration-500 group $
      ${reverse
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
        >
            {/* Content */}
            <div className="relative order-2 md:order-none flex flex-col justify-center p-8 lg:p-10 ">



                <h3 className="text-3xl font-serif leading-tight mb-4">
                    {offer.title}
                </h3>

                <div className="flex items-center gap-2 mb-5">
                  <RatingStars rating={offer?.rating}></RatingStars>
                    <span>{offer.rating}</span>
                    <span className="text-foreground/70">Reviews</span>
                </div>

                <p className="text-foreground/70 leading-7 mb-6">
                    {offer.description}
                </p>

                <div className="flex items-end gap-4 mb-8">
                    <span className="text-4xl font-semibold">
                        ${offer.price}
                    </span>

                    <span className="text-sm text-foreground/60">
                        Expiry: {offer.expiry}
                    </span>
                </div>

                <Button
                    variant="default"
                    className="w-fit rounded-full px-12 py-4 text-sm font-medium"
                >
                    View Offer
                    <ArrowRight />
                </Button>
            </div>

            {/* Image */}
            <div className="order-1  md:order-none relative min-h-[350px] overflow-hidden">
                <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className={`inline-flex w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium mb-5 text-muted absolute top-4 ${reverse ? "left-4" : "right-4"}  `}>
                    {offer.discount}% OFF
                </span>
            </div>
        </div>
    );
};

export default OfferCard;