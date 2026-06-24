
export interface RoomImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export interface RoomSliderProps {
  images: RoomImage[];
}