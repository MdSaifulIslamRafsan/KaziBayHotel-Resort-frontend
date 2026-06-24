import RoomCard from "@/components/Card/RoomCard";
import RoomSlider from "@/components/RoomDetailsPage/Roomslider";
import SectionHeader from "@/components/shared/SectionHeader";
// import SharedBanner from "@/components/shared/SharedBanner";
const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean Suite",
    images: [
      "/images/rooms/room-1.jpg",
      "/images/rooms/room-1-2.jpg",
      "/images/rooms/room-1-3.jpg",
    ],
    price: 180,
    rating: 4.9,
    description:
      "Elegant suite featuring panoramic ocean views and premium amenities.",
    guests: 2,
    bed: "King Bed",
    size: "450 sqft",
  },
  {
    id: 2,
    name: "Presidential Villa",
    images: [
      "/images/rooms/room-2.jpg",
      "/images/rooms/room-2-2.jpg",
      "/images/rooms/room-2-3.jpg",
    ],
    price: 350,
    rating: 5.0,
    description:
      "Luxury villa with private pool, spacious living area and oceanfront view.",
    guests: 4,
    bed: "2 King Beds",
    size: "950 sqft",
  },
  {
    id: 3,
    name: "Garden View Room",
    images: [
      "/images/rooms/room-3.jpg",
      "/images/rooms/room-3-2.jpg",
      "/images/rooms/room-3-3.jpg",
    ],
    price: 120,
    rating: 4.8,
    description:
      "Comfortable room surrounded by lush greenery and tranquil ambiance.",
    guests: 2,
    bed: "Queen Bed",
    size: "320 sqft",
  },
  {
    id: 4,
    name: "Family Suite",
    images: [
      "/images/rooms/room-4.jpg",
      "/images/rooms/room-4-2.jpg",
      "/images/rooms/room-4-3.jpg",
    ],
    price: 240,
    rating: 4.7,
    description:
      "Perfect for families with spacious bedrooms and premium facilities.",
    guests: 5,
    bed: "2 Queen Beds",
    size: "650 sqft",
  },
];

const RoomDetailsPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* <SharedBanner
        title="Room Details"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Room Details" }]}
      /> */}
      <RoomSlider></RoomSlider>
      <section className="container mx-auto py-12 lg:py-14 px-4 md:px-6 lg:px-8">
        <SectionHeader
          subtitle="Similar Rooms"
          title="Discover Related Accommodations"
        />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RoomDetailsPage;
