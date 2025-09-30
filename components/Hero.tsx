import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, Users } from "lucide-react";
import Link from "next/link";
import { QuoteForm } from "./QuoteForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-red-100 via-red-200 to-red-300 pt-7">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Award className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold text-sm tracking-wide uppercase text-primaryBlack">
                  Columbia's Premier Fence Company
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Professional <span className="bg-red-600 bg-clip-text text-transparent">Fence Installation</span> You Can Trust
              </h1>

              <p className="text-xl max-w-2xl leading-relaxed text-primaryBlack">
                Transform your property with premium fencing solutions. Our
                experienced team delivers exceptional craftsmanship for
                residential, commercial, and agricultural projects throughout
                Columbia and surrounding areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center font-bold text-primaryBlack">
                <Shield className="w-4 h-4 mr-2 text-primaryBlue" />
                Licensed & Insured
              </div>
              <div className="flex items-center font-bold text-primaryBlack">
                <Users className="w-4 h-4 mr-2 text-primaryBlue" />
                500+ Happy Customers
              </div>
              <div className="flex items-center font-bold text-primaryBlack">
                <Award className="w-4 h-4 mr-2 text-primaryBlue" />
                25+ Years Experience
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="border-2 border-primaryBlue bg-primaryBlue text-white hover:bg-primaryBlue/90 hover:text-white text-lg px-8 py-6"
                >
                  Get Free Estimate
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:8037697747" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (803) 769-7747
                </a>
              </Button>
            </div>
            <div className="text-sm font-bold text-black">Available 24/7 • Free Estimates • Same-Day Response</div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden elegant-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/20 to-transparent"></div>
              {/* You can add the hero image here if needed */}
            </div>

            {/* Right Form */}
            <div className="relative animate-slide-in-right mt-6">
              <QuoteForm /> {/* Reusable form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
