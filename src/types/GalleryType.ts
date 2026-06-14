// Modal Component for Image Carousel
export interface ModalProps {
    images: GalleryImage[];
    initialIndex: number;
    onClose: () => void;
}
// Type definitions
export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    roomType: 'deluxe' | 'suite' | 'standard' | 'penthouse' | 'all';
    title?: string;
}

export interface RoomType {
    id: 'deluxe' | 'suite' | 'standard' | 'penthouse' | 'all';
    label: string;
    description: string;
}