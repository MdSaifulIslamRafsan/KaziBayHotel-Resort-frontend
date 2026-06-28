import { ROOM_DATA } from "@/types/RoomType";

const RoomOverviewSection = () => {
    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Room Overview
            </h2>
            <p className="text-foreground/80 leading-relaxed max-w-4xl text-base">
                {ROOM_DATA.description}
            </p>
        </section>
    );
};

export default RoomOverviewSection