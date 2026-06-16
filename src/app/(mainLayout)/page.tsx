import Banner from "@/components/HomePage/Banner";
import BannerForm from "@/components/HomePage/BannerForm";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OurFacilities from "@/components/HomePage/OurFacilities";
import AboutUs from "@/components/shared/AboutUs";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Banner></Banner>
      <BannerForm></BannerForm>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <CoreFeatures></CoreFeatures>
      <OurFacilities></OurFacilities>
      <HowItWorks></HowItWorks>
    </>
  );
}
