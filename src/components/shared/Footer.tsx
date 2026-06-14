import Link from "next/link";
import { Facebook, Headphones, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
const contactItems = [
  {
    icon: Mail,
    text: "reservation@luxestay.com",
  },
  {
    icon: Phone,
    text: "+880 1XXX-XXXXXX",
  },
  {
    icon: Headphones,
    text: "24/7 Guest Support",
  },
  {
    icon: MapPin,
    text: "Dhaka, Bangladesh",
  },
];
export default function Footer() {
  return (
    <footer className="relative border-t border-border text-muted">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={1200}
          height={400}
          src="/images/footer-bg.jpg"
          alt="footer bg"
          className="h-full w-full  bg-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-14 pb-8 ">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary tracking-wide">
              LuxeStay Resort
            </h3>

            <p className="text-muted/70 leading-relaxed">
              Experience luxury, comfort, and breathtaking views.
              Book your perfect stay and enjoy world-class hospitality
              crafted for unforgettable moments.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">

              {/* Facebook */}
              <Link
                href="#"
                className="group p-2 rounded-full bg-muted/5 hover:bg-[#1877F2]/10 transition"
              >
                <Facebook
                  size={20}
                  className="text-muted/70 group-hover:text-[#1877F2] transition"
                />
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="group p-2 rounded-full bg-muted/5 hover:bg-[#d62976]/10  transition"
              >
                <Instagram
                  size={20}
                  className="text-muted/70 group-hover:text-[#E4405F] transition"
                />
              </Link>

              {/* Twitter / X */}
              <Link
                href="#"
                className="group p-2 rounded-full bg-muted/5 hover:bg-[#1DA1F2]/10 transition"
              >
                <Twitter
                  size={20}
                  className="text-muted/70 group-hover:text-[#1DA1F2] transition"
                />
              </Link>

              {/* YouTube */}
              <Link
                href="#"
                className="group p-2 rounded-full bg-muted/5 hover:bg-[#FF0000]/10 transition"
              >
                <Youtube
                  size={20}
                  className="text-muted/70 group-hover:text-[#FF0000] transition"
                />
              </Link>

            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-muted/70">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-primary">Rooms & Suites</Link></li>
              <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link href="/offers" className="hover:text-primary">Special Offers</Link></li>
            </ul>
          </div>

          {/* Support / Legal (Amenities replaced) */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2 text-muted/70">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/cancellation" className="hover:text-primary">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <ul className="space-y-3 text-muted/70">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={index} className="flex items-center gap-2">
                    <Icon size={20} className="text-muted/60" />
                    <span className="pb-1">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-muted/10 pt-6 text-center text-sm text-muted/60">
          <p>
            © {new Date().getFullYear()} LuxeStay Resort. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}