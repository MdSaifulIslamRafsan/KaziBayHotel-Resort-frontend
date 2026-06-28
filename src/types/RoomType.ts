export type TRoom = {
    id: number;
    name: string;
    images: string[];
    price: number;
    rating: number;
    description: string;
    guests: number;
    bed: string;
    size: string;
};

export type TOffer = {
    id: number;
    title: string;
    image: string;
    rating: number;
    price: number;
    discount: number;
    expiry: string;
    description: string;
};



// constants/roomsData.ts

export interface Room {
  id: string;
  name: string;
  pricePerNight: number;
  currency: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  size: string;
  bedType: string;
  category: string;
  view: string;
  description: string;
}

export interface Amenity {
  id: number;
  name: string;
  icon: string;
}

export interface CalendarDay {
  date: number;
  disabled: boolean;
  available: boolean;
  selected?: boolean;
}

// Default Room Data
export const ROOM_DATA: Room = {
  id: "room-001",
  name: "Deluxe Ocean View Suite",
  pricePerNight: 399,
  currency: "$",
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  size: "850",
  bedType: "Double",
  category: "Standard Class",
  view: "Sea View",
  description:
    "A luxury hotel room is designed to offer an unparalleled blend comfort, sophistication, and exclusive amenities. These accommodations often feature a spacious is layouts with carefully curated interiors that exude elegance and style. Guests can do the enjoy plush bedding, premium linens, and the modern furnishings that create a serene ambiance for relaxation. Many luxury rooms provide scenic views, ranging from the new city skylines to tranquil ocean vistas, accessible through private balconies floor ceiling windows.",
};

// Room Amenities
export const AMENITIES: Amenity[] = [
  { id: 1, name: "Free Wifi", icon: "wifi" },
  { id: 2, name: "Shower", icon: "shower" },
  { id: 3, name: "Airport transport", icon: "plane" },
  { id: 4, name: "Balcony", icon: "balcony" },
  { id: 5, name: "Refrigerator", icon: "wind" },
  { id: 6, name: "24/7 Support", icon: "phone" },
  { id: 7, name: "Work Desk", icon: "desk" },
  { id: 8, name: "Fitness Center", icon: "dumbbell" },
  { id: 9, name: "Swimming Pool", icon: "waves" },
];

// Amenities Details
export const AMENITIES_DETAILS: string[] = [
  "100% Eco Friendly",
  "24/7 Elevator Services",
  "24/7 Strong Security",
  "Comfortable Bed & Pillows",
  "Comfortable Seating",
  "Fireplace For Atmosphere",
];

// Calendar Data
export const CALENDAR_DATA = {
  jun2026: [
    { date: 25, disabled: true, available: false },
    { date: 26, disabled: true, available: false },
    { date: 27, disabled: false, available: true, selected: true },
    { date: 28, disabled: false, available: true, selected: true },
    { date: 29, disabled: true, available: false },
    { date: 30, disabled: true, available: false },
    { date: 31, disabled: true, available: false },
  ] as CalendarDay[],
  jul2026: [
    { date: 29, disabled: true, available: false },
    { date: 30, disabled: true, available: false },
    { date: 1, disabled: false, available: true },
    { date: 2, disabled: false, available: true },
    { date: 3, disabled: false, available: true },
    { date: 4, disabled: false, available: true },
    { date: 5, disabled: false, available: true },
  ] as CalendarDay[],
};

// Guest Options
export const GUEST_OPTIONS = [
  { label: "1 Guest", value: "1" },
  { label: "2 Guests", value: "2" },
  { label: "3 Guests", value: "3" },
  { label: "4 Guests", value: "4" },
];

// Room Options
export const ROOM_OPTIONS = [
  { label: "1 Room", value: "1" },
  { label: "2 Rooms", value: "2" },
  { label: "3 Rooms", value: "3" },
];

// Children Options
export const CHILDREN_OPTIONS = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
];

// Sample Multiple Rooms (for API responses later)
export const ROOMS_LIST: Room[] = [
  {
    id: "room-001",
    name: "Deluxe Ocean View Suite",
    pricePerNight: 399,
    currency: "$",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: "850",
    bedType: "Double",
    category: "Standard Class",
    view: "Sea View",
    description:
      "A luxury hotel room is designed to offer an unparalleled blend comfort, sophistication, and exclusive amenities.",
  },
  {
    id: "room-002",
    name: "Premium Beach Front Villa",
    pricePerNight: 599,
    currency: "$",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    size: "1200",
    bedType: "King",
    category: "Premium Class",
    view: "Beach View",
    description:
      "Experience ultimate luxury with our beachfront villas featuring private access to pristine sands.",
  },
  {
    id: "room-003",
    name: "Cozy Garden Studio",
    pricePerNight: 249,
    currency: "$",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: "450",
    bedType: "Single",
    category: "Economy Class",
    view: "Garden View",
    description:
      "Perfect for couples seeking an intimate retreat surrounded by lush tropical gardens.",
  },
];