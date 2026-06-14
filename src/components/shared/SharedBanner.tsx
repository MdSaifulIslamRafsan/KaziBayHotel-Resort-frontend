import { SharedBannerProps } from "@/types";


const SharedBanner = ({
    title,
    image = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=400&fit=crop",
    breadcrumb = [
        { label: "Home", href: "/" },
        { label: title },
    ],
}: SharedBannerProps) => {
    return (
        <div className="relative w-full h-96 overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                    backgroundImage: `url('${image}')`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">

                <h1 className="text-3xl md:text-5xl font-semibold text-muted mb-4 tracking-wide">
                    {title}
                </h1>

                <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    {breadcrumb.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {item.href ? (
                                <a
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-primary">{item.label}</span>
                            )}

                            {index !== breadcrumb.length - 1 && (
                                <span className="">/</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default SharedBanner;