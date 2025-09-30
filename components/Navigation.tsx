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
    <nav className="fixed top-0 w-full bg-red-100/95 backdrop-blur-md border-b border-red-300 z-50 smooth-transition">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold font-montserrat text-primaryBlack">
              Mighty<span className="text-primaryBlue font-montserrat">Fences</span>
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className={`smooth-transition ${
                location === "/services"
                  ? "text-primaryBlue font-semibold"
                  : "text-foreground hover:text-primaryBlue"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`smooth-transition ${
                location === "/about"
                  ? "text-primaryBlue font-semibold"
                  : "text-foreground hover:text-primaryBlue"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`smooth-transition ${
                location === "/contact"
                  ? "text-primaryBlue font-semibold"
                  : "text-foreground hover:text-primaryBlue"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8037697747"
              className="flex items-center text-primaryBlue hover:text-primary-glow smooth-transition"
            >
              <Phone className="w-4 h-4 mr-2 text-primaryBlue" />
              <span className="font-semibold text-primaryBlack">(803) 769-7747</span>
            </a>
            <Link href="/contact">
              <Button
                variant="default"
                className="border-2 border-primaryBlue text-white bg-primaryBlue hover:bg-primaryBlue/90 hover:text-white smooth-transition"
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
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-red-100 border-t border-red-300 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/services"
                    ? "text-primaryBlue font-semibold"
                    : "text-foreground hover:text-primaryBlue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/about"
                    ? "text-primaryBlue font-semibold"
                    : "text-foreground hover:text-primaryBlue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 smooth-transition ${
                  location === "/contact"
                    ? "text-primaryBlue font-semibold"
                    : "text-foreground hover:text-primaryBlue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2 border-t border-border">
                <a
                  href="tel:8037697747"
                  className="flex items-center text-primaryBlue font-semibold mb-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (803) 769-7747
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primaryBlue text-white hover:bg-primaryBlue/90">
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
