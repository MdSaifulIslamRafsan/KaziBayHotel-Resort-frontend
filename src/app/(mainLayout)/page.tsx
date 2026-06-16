import Banner from "@/components/HomePage/Banner";
import BannerForm from "@/components/HomePage/BannerForm";
import CoreFeatures from "@/components/HomePage/CoreFeatures";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OurFacilities from "@/components/HomePage/OurFacilities";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <BannerForm></BannerForm>
      <CoreFeatures></CoreFeatures>
      <OurFacilities></OurFacilities>
      <HowItWorks></HowItWorks>
    </>

  );
}
