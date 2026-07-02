import AboutUs from "@/components/shared/AboutUs";
import SharedBanner from "@/components/shared/SharedBanner";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <SharedBanner
        title="About Us"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <section className="container mx-auto pb-12 lg:py-12 px-4 md:px-10 lg:px-20">
        <AboutUs></AboutUs>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </main>
  );
};

export default AboutPage;
