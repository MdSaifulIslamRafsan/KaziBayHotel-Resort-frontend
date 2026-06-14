/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, User, LogOut, Sun, Moon } from 'lucide-react';

import { toast } from 'react-toastify';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasAnimated = useRef(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const user = {
    name: "Saiful Islam",
    role: "USER",
  };
  const handleLogout = async () => {
    try {
      // await logout();
      toast.success('Logged out successfully.');
      router.push('/auth/login');
    } catch (error: any) {
      toast.error(error?.message || 'Failed to logout. Please try again.');
    }

    // setIsLoading(true);
  };
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
      if (!hasAnimated.current && isScrollingDown && currentScrollY > SCROLL_HIDE_THRESHOLD) {
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
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: any) => pathname === path;

  return (
    <header>
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${showNavbar
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0"
      } ${scrolled
        ? "bg-primary/90 shadow-md backdrop-blur-md"
        : "bg-background/95 backdrop-blur"
      }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl font-bold transition-colors duration-300 
  ${scrolled ? "text-secondary" : "text-primary"}`}>Sunset Grove</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors duration-300
  ${isActive(route.href)
                  ? (scrolled ? "text-primary-foreground" : "text-primary")
                  : (scrolled ? "text-muted-foreground hover:text-primary-foreground" : "text-foreground hover:text-primary")
                }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <User size={16} />
                  {user.name || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {user.role === 'ADMIN' && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin/dashboard">Admin Dashboard</Link>
                  </DropdownMenuItem>
                )}
                {user.role === 'USER' && (
                  <DropdownMenuItem asChild>
                    <Link href="/user/reviews">My Reviews</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-500"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-primary ">Register</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-5 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 ${scrolled ? "text-primary-foreground" : "text-foreground"
              }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

    </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed top-0 right-0 z-50 h-screen w-[280px] bg-background border-l border-border shadow-xl md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <h3 className="font-bold text-lg text-primary">
                  Sunset Grove
                </h3>
                <p className="text-xs text-muted-foreground">
                  Resort & Booking
                </p>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 hover:bg-muted"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 p-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-all
              ${isActive(route.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                    }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            {/* User Section */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
              {user ? (
                <>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User size={18} />
                    </div>

                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.role}
                      </p>
                    </div>
                  </div>

                  {user.role === "USER" && (
                    <Link
                      href="/user/reviews"
                      onClick={() => setIsMenuOpen(false)}
                      className="mb-2 flex w-full rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                    >
                      Dashboard
                    </Link>
                  )}

                  {user.role === "ADMIN" && (
                    <Link
                      href="/admin/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="mb-2 flex w-full rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                    >
                      Admin Dashboard
                    </Link>
                  )}

                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-red-500"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
