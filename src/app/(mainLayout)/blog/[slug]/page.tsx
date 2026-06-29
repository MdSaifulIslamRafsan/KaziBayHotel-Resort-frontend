import SharedBanner from "@/components/shared/SharedBanner";
import { CalendarDays, User } from "lucide-react";
import rehypeRaw from "rehype-raw"
import Markdown from "react-markdown"


const blog = {
  id: 1,
  title: "Your Journey Starts With Us",
  slug: "your-journey-starts-with-us",
  image:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop",
  date: "19 Oct, 2025",
  author: "Admin",
  tags: ["Travel", "Hotel", "Resort"],
  content: `
Traveling is more than reaching a destination. It's about experiencing comfort, discovering new places, and creating unforgettable memories.

## Why Choose Premium Stays?

Premium accommodations provide exceptional comfort and personalized experiences.

> Great hospitality is not just about providing a place to stay.

## Comfort Meets Convenience

Every detail is designed to make your journey stress-free.

### Key Benefits

- Luxury Rooms
- Premium Facilities
- Easy Booking
- 24/7 Support

![Luxury Resort](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200)
`,
};

const BlogDetailsPage = () => {
    return (
        <main className="min-h-screen bg-background ">
            <SharedBanner
                title={blog.title}
                image={blog.image}
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: blog.title },
                ]}
            />

            <section className="container mx-auto py-12 lg:py-14 px-4 md:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>{blog?.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>{blog?.author}</span>
                    </div>


                </div>

                {/* Title */}
                <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
                    {blog?.title}
                </h1>

                {/* Rich Text Content */}
                <Markdown rehypePlugins={[rehypeRaw]}>
                    {blog?.content}
                </Markdown>

                {/* Tags */}
                <div className="mt-12 flex flex-wrap gap-3">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border px-4 py-2 text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BlogDetailsPage;