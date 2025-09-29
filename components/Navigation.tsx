"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 smooth-transition">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold font-montserrat text-primaryBlack  ">Mighty    <span className="text-primaryRed font-montserrat">  decksand fences</span></div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className={`smooth-transition ${
                location === "/services"
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`smooth-transition ${
                location === "/about"
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`smooth-transition ${
                location === "/contact"
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8037697747"
              className="flex items-center text-primary hover:text-primary-glow smooth-transition"
            >
              <Phone className="w-4 h-4 mr-2 text-primaryRed" />
              <span className="font-semibold text-primaryRed">(803) 769-7747</span>
            </a>
            <Link href="/contact">
              <Button
                variant="default"
                className="border-2 border-primaryBlack text-primaryBlack bg-primaryYellow hover:bg-primaryBlack hover:text-white smooth-transition"
              >
                Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/services"
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/about"
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/contact"
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2 border-t border-border">
                <a
                  href="tel:8037697747"
                  className="flex items-center text-primary font-semibold mb-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (803) 769-7747
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-hero-gradient">
                    Free Estimate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
