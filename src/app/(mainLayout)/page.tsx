import Banner from "@/components/HomePage/Banner";
import BannerForm from "@/components/HomePage/BannerForm";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import FeaturedRooms from "@/components/HomePage/FeaturedRooms";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OurFacilities from "@/components/HomePage/OurFacilities";
import VideoOverview from "@/components/HomePage/VideoOverview";
import AboutUs from "@/components/shared/AboutUs";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Banner></Banner>
      <BannerForm></BannerForm>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <FeaturedRooms></FeaturedRooms>
      <CoreFeatures></CoreFeatures>
      <OurFacilities></OurFacilities>
      <VideoOverview></VideoOverview>
      <HowItWorks></HowItWorks>
    </>
  );
}
