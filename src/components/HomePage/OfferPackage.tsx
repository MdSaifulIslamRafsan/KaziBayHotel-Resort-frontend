import OfferCard from "../Card/OfferCard"
import SectionHeader from "../shared/SectionHeader";
export const offers = [
    {
        id: 1,
        title: "Honeymoon Escape Package",
        image: "/images/rooms/room-1.jpg",
        rating: 4.9,
        price: 350,
        discount: 20,
        expiry: "31 Aug",
        description:
            "Discover amazing savings and special packages tailored to make your stay unforgettable.",
    },
    {
        id: 2,
        title: "Corporate Retreat Package",
        image: "/images/rooms/room-1.jpg",
        rating: 4.8,
        price: 299,
        discount: 25,
        expiry: "15 Sep",
        description:
            "Enjoy premium business facilities with luxury accommodation and exclusive benefits.",
    },
    {
        id: 3,
        title: "Family Vacation Package",
        image: "/images/rooms/room-1.jpg",
        rating: 4.9,
        price: 420,
        discount: 15,
        expiry: "10 Sep",
        description:
            "Create unforgettable memories with family-friendly amenities and experiences.",
    },
    {
        id: 4,
        title: "Weekend Getaway Package",
        image: "/images/rooms/room-1.jpg",
        rating: 4.7,
        price: 250,
        discount: 30,
        expiry: "05 Oct",
        description:
            "Escape the routine and enjoy a relaxing luxury weekend stay.",
    },
];

const OfferPackage = () => {
    return (
        <div className="mx-auto container px-4 md:px-6 lg:px-8 pt-12 lg:py-8 bg-backgroun">
            <SectionHeader
                subtitle="Special Offers"
                title="Exclusive Deals"
            />
            <div className="space-y-8">
                {offers?.map((offer, index) => (
                    <OfferCard
                        key={offer.id}
                        offer={offer}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    )
}

export default OfferPackage