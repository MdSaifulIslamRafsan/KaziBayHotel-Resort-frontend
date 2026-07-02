import BlogCard from "@/components/Card/BlogCard";
import SharedBanner from "@/components/shared/SharedBanner";

const blogs = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    title: "Your Journey Starts With Us",
    description:
      "From eco-friendly resorts and sustainable stays to personalized services, our platform makes every trip memorable and stress-free.",
    date: "19 Oct, 2025",
    comments: 3,
    slug: "your-journey-starts-with-us",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    title: "Where Stay Feels Special",
    description:
      "Our carefully curated hotels and resorts combine world-class comfort, seamless service, and thoughtful amenities for every guest.",
    date: "17 Oct, 2025",
    comments: 3,
    slug: "where-stay-feels-special",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    title: "From Click To Comfort",
    description:
      "From the moment you book to the day you check out, we focus on creating an experience built around convenience and comfort.",
    date: "15 Oct, 2025",
    comments: 3,
    slug: "from-click-to-comfort",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.jpg",
    title: "Luxury Redefined For Travelers",
    description:
      "Discover exceptional accommodations, premium facilities, and unforgettable hospitality designed for modern travelers.",
    date: "12 Oct, 2025",
    comments: 5,
    slug: "luxury-redefined-for-travelers",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.jpg",
    title: "Relax, Recharge, Reconnect",
    description:
      "Escape the busy routine and enjoy peaceful destinations that help you relax, recharge, and reconnect with what matters most.",
    date: "10 Oct, 2025",
    comments: 4,
    slug: "relax-recharge-reconnect",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.jpg",
    title: "Smart Travel Made Simple",
    description:
      "Find the perfect stay, compare options effortlessly, and manage your bookings with confidence through our platform.",
    date: "08 Oct, 2025",
    comments: 2,
    slug: "smart-travel-made-simple",
  },
];

const ServicesPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <SharedBanner
        title="Our Blog"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="container mx-auto py-12 lg:py-12 px-4 md:px-10 lg:px-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3  gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog?.id} blog={blog}></BlogCard>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
