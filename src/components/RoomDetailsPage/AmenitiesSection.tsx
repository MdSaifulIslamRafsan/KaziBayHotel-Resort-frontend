import { cn } from "@/lib/utils";
import { AMENITIES, AMENITIES_DETAILS } from "@/types/RoomType";
import { Droplets, Dumbbell, Phone, Plane, SquareChartGantt, Trees, Waves, Wifi, Wind } from "lucide-react";

const AmenityIcon = ({ icon }: { icon: string }) => {
    const iconProps = "w-6 h-6 text-primary";
    const iconMap: { [key: string]: React.ReactNode } = {
        wifi: <Wifi className={iconProps} />,
        shower: <Droplets className={iconProps} />,
        plane: <Plane className={iconProps} />,
        balcony: <Trees className={iconProps} />,
        wind: <Wind className={iconProps} />,
        phone: <Phone className={iconProps} />,
        desk: <SquareChartGantt className={iconProps} />,
        dumbbell: <Dumbbell className={iconProps} />,
        waves: <Waves className={iconProps} />,
    };
    return <>{iconMap[icon] || null}</>;
};

const AmenitiesSection = () => {
    return (
        <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Room Amenities
            </h2>

            {/* Icons Grid */}
            <div className="grid  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 mb-12">
                {AMENITIES.map((amenity) => (
                    <div
                        key={amenity?.id}
                        className="flex items-center text-center p-2 gap-2 rounded-lg"
                    >
                        <AmenityIcon icon={amenity?.icon} />
                        <p className="text-foreground font-semibold text-sm sm:text-lg">{amenity?.name}</p>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default AmenitiesSection;