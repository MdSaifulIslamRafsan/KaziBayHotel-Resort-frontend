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
      <section className="container mx-auto  pt-12 lg:py-12 px-4 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-10 lg:px-20  py-12 lg:py-12">
        <div className="overflow-hidden rounded-xl border h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.984774044762!2d90.12226677527872!3d21.819519180035158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa7d000e1bcf81%3A0xcc95b7c24e7ed642!2sKazi%20Bay%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sbd!4v1782226741151!5m2!1sen!2sbd"
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
