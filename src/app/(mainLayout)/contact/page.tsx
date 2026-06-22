import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SharedBanner from "@/components/shared/SharedBanner";

const contactPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <SharedBanner
        title="Contact Us"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-14">
        <div className="overflow-hidden rounded-xl border h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
};

export default contactPage;
