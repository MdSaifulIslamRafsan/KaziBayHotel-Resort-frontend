import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    Users,
    BedDouble,
    Expand,
    Star,
} from "lucide-react";

const RoomCard = ({ room }) => {
    return (
        <Card className="group py-0 overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500">

            {/* Image */}
            <div className="relative h-60 overflow-hidden">
                {/* Default image */}
                <Image
                    src={room?.images?.[0]}
                    alt={room?.name}
                    fill
                    className="object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-110 h-full"
                />

                {/* Hover image */}
                <Image
                    src={room?.images?.[1]}
                    alt={room?.name}
                    fill
                    className="object-cover absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-110 h-full"
                />


                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    ${room?.price} / Night
                </div>
            </div>

            {/* Content */}
            <CardContent className="px-4 pb-4 space-y-4">
                <div>
                    <h3 className="text-2xl font-serif font-semibold">
                        {room?.name}
                    </h3>

                    <p className="text-foreground/70 mt-2">
                        {room?.description}
                    </p>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{room?.guests} Guests</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BedDouble size={16} />
                        <span>{room?.bed}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Expand size={16} />
                        <span>{room?.size}</span>
                    </div>
                </div>

                <Button className="w-full rounded-full">
                    View Details
                </Button>
            </CardContent>
        </Card>);
}
export default RoomCard;