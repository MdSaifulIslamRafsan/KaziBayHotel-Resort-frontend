import Banner from "@/components/HomePage/Banner";
import BannerForm from "@/components/HomePage/BannerForm";
import Blogs from "@/components/HomePage/Blogs";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import FeaturedRooms from "@/components/HomePage/FeaturedRooms";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OfferPackage from "@/components/HomePage/OfferPackage";
import OurFacilities from "@/components/HomePage/OurFacilities";
import Testimonials from "@/components/HomePage/Testimonials";
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
      <OfferPackage></OfferPackage>
      <CoreFeatures></CoreFeatures>
      <OurFacilities></OurFacilities>
      <VideoOverview></VideoOverview>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
    </>
  );
}
