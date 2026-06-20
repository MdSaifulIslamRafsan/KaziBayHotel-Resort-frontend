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