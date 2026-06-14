// app/gallery/page.tsx

import GallerySection from "@/components/Gallery/GallerySection";



export const metadata = {
    title: 'Gallery | LumaStay',
    description: 'Explore our rooms and suites at LumaStay',
};

const GalleryPage = () => {
    return (
        <main className="w-full">
            <GallerySection />
        </main>
    );
}
export default GalleryPage;