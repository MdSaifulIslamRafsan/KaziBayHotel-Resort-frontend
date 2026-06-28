import { ROOM_DATA } from "@/types/RoomType";
import { Bath, Bed, DoorOpen, Maximize2, Tag, Users } from "lucide-react";

const RoomDetailsSpecifications = () => {
    const specs = [
        {
            id: 1,
            label: "Guests",
            value: ROOM_DATA.guests,
            icon: Users,
        },
        {
            id: 3,
            label: "Size",
            value: `${ROOM_DATA.size}ft²`,
            icon: Maximize2,
        },
        {
            id: 4,
            label: "Bed Type",
            value: ROOM_DATA.bedType,
            icon: Bed,
        },
        {
            id: 5,
            label: "Categories",
            value: ROOM_DATA.category,
            icon: Tag,
        },
        {
            id: 6,
            label: "Bedrooms",
            value: ROOM_DATA.bedrooms,
            icon: DoorOpen,
        },
        {
            id: 7,
            label: "Bathrooms",
            value: ROOM_DATA.bathrooms,
            icon: Bath,
        },
    ];

    return (
        <section>
            <div className="bg-card shadow-sm rounded-lg p-6 md:p-8 border border-border">
                <div className="space-y-5">
                    {specs.map((spec) => {
                        const Icon = spec.icon;
                        return (
                            <div key={spec.id} className="flex items-center flex-wrap gap-2">
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />

                                <p className="text-xs md:text-sm text-foreground/60 font-medium uppercase tracking-wide">
                                    {spec.label} :
                                </p>
                                <p className="text-foreground font-semibold text-base">
                                    {spec.value}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RoomDetailsSpecifications