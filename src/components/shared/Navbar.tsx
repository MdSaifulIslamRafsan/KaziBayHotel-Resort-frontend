/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, LogOut } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasAnimated = useRef(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();


  useEffect(() => {
    const SCROLL_HIDE_THRESHOLD = 80;
    const SCROLL_STOP_DELAY = 300;

    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      const isAtTop = currentScrollY <= 10;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // ✅ RESET ONLY at TOP
      if (isAtTop) {
        hasAnimated.current = false;
        setShowNavbar(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // ✅ ONLY FIRST TIME animation
      if (
        !hasAnimated.current &&
        isScrollingDown &&
        currentScrollY > SCROLL_HIDE_THRESHOLD
      ) {
        setShowNavbar(false);

        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setShowNavbar(true);
        }, SCROLL_STOP_DELAY);

        hasAnimated.current = true;
      }

      lastScrollY.current = currentScrollY;
    };

    // ✅ IMPORTANT: set initial state correctly (no flicker on reload)
    const initialScrollY = window.scrollY;
    setScrolled(initialScrollY > 30);
    setShowNavbar(true);
    lastScrollY.current = initialScrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/room", label: "Room" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: any) => pathname === path;

  return (
    <header>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
          } ${scrolled
            ? "bg-primary/90 shadow-md backdrop-blur-md"
            : "backdrop-blur-sm shadow-md border-b border-border/30"
          }`}
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-20 flex py-2 items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 text-muted`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="w-24 sm:w-28 md:w-32 lg:w-36 2xl:w-40 h-auto"
              ></Image>
            </Link>
          </div>


          {/* Desktop Auth Buttons */}
          <div className="">
            <Link href="/room">
              <Button variant={!scrolled ? "default" : "secondary"}>Book</Button>
            </Link>
          </div>


        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed top-0 left-0 z-50 h-screen w-4/5 md:w-1/2 flex flex-col backdrop-blur-md bg-background/60 border-r border-border shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border py-2 px-5">
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="w-24 sm:w-28 md:w-32 lg:w-36 2xl:w-40 h-auto"
                  ></Image>
                </Link>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto flex flex-col gap-2 p-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 font-medium transition-all
              ${isActive(route.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                    }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border p-4">
              <Link href="/room">
                <Button className="w-full">Booking Now</Button>
              </Link>
            </div>

          </aside>
        </>
      )}
    </header>
  );
}
