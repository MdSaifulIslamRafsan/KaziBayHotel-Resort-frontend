import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageSquare } from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

type Blog = {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    comments: number;
    slug: string;
};

type BlogCardProps = {
    blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <Card className="overflow-hidden rounded-3xl border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg py-0">
            {/* Image */}
            <div className="relative aspect-[4/2] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            <CardContent className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>{blog.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>{blog.comments} Comments</span>
                    </div>
                </div>

                <div className="my-3 h-px bg-border" />

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="mb-3 text-foreground/70 line-clamp-2 leading-8">
                    {blog.description}
                </p>

                {/* Read More */}
                <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary transition-all hover:gap-3"
                >
                    Read More
                </Link>
            </CardContent>
        </Card>
    );
};

export default BlogCard;