import CheckoutForm from "@/components/checkout/CheckoutForm";
import SharedBanner from "@/components/shared/SharedBanner";

const CheckoutPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <SharedBanner
        title="Checkout"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Checkout" },
        ]}
      />

      <section className="container py-12 lg:py-14 px-4 md:px-6 lg:px-8">

        <CheckoutForm />

      </section>
    </main>
  )
}

export default CheckoutPage;