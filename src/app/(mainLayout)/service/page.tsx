import FacilitiesCard from "@/components/Card/FacilitiesCard";
import SharedBanner from "@/components/shared/SharedBanner";
import {
  BedDouble,
  ShieldCheck,
  Trees,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
const amenities = [
  {
    id: 1,
    icon: BedDouble,
    title: "Exclusive Suites",
    description:
      "Spacious and elegantly designed suites with premium finishes.",
  },
  {
    id: 2,
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with high-speed internet throughout the resort.",
  },
  {
    id: 3,
    icon: Waves,
    title: "Ocean View Infinity Pool",
    description:
      "Relax in our infinity pool overlooking breathtaking ocean views.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock security ensuring a safe and peaceful stay.",
  },
  {
    id: 5,
    icon: Utensils,
    title: "Fine Dining Restaurant",
    description: "Enjoy gourmet dishes prepared by world-class chefs.",
  },
  {
    id: 6,
    icon: Trees,
    title: "Eco-Friendly Environment",
    description:
      "Surrounded by nature with sustainable eco-friendly practices.",
  },
];

const ServicesPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <SharedBanner
        title="Our Service"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Service" }]}
      />
      <section className="container mx-auto py-12 lg:py-12 px-4 md:px-10 lg:px-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <FacilitiesCard
              key={amenity?.id}
              amenity={amenity}
              index={index}
              showIndex
            ></FacilitiesCard>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
