"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home as HomeIcon,
  Building,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const quickServices = [
  {
    icon: HomeIcon,
    title: "Residential Fencing",
    description: "Stylish and secure fencing solutions for your home.",
    link: "/services",
  },
  {
    icon: Building,
    title: "Commercial Fencing",
    description: "Reliable and professional security solutions.",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Wood, vinyl, aluminum, and chain-link built to last.",
    link: "/services",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />

        {/* Quick Services Overview */}
        <section className="py-20 bg-gradient-to-b from-primaryRed/10 via-white to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primaryBlack mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primaryRed to-primaryYellow bg-clip-text text-transparent">
                  Fencing Services
                </span>
              </h2>
              <p className="text-lg text-primaryBlack/80 max-w-2xl mx-auto font-medium">
                Expert fence installation and repair services tailored to your
                needs — residential or commercial.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {quickServices.map((service, index) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-300 border border-primaryRed/20 rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primaryRed/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primaryRed/20 transition">
                      <service.icon className="w-8 h-8 text-primaryYellow" />
                    </div>
                    <h3 className="text-xl font-bold text-primaryBlack mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primaryBlack/70 mb-4">
                      {service.description}
                    </p>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="border-primaryRed text-primaryRed hover:bg-primaryRed hover:text-white transition"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-primaryRed text-white hover:bg-primaryRed transition font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primaryBlue/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primaryBlack">
                  Why Columbia Trusts{" "}
                  <span className="bg-gradient-to-r from-primaryRed to-primaryRed bg-clip-text text-transparent">
                    MightyFences
                  </span>
                </h2>
                <p className="text-lg text-primaryBlack/80 font-medium">
                  With over 25 years of experience, we’ve built our reputation
                  on trust, craftsmanship, and customer satisfaction.
                </p>

                <div className="space-y-4">
                  {[
                    "Licensed & Insured Professional Team",
                    "Premium Materials & Expert Craftsmanship",
                    "Free Estimates & Transparent Pricing",
                    "24/7 Emergency Fence Repair Services",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primaryRed flex-shrink-0" />
                      <span className="text-primaryBlack font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-primaryRed text-white hover:bg-primaryRed transition px-8 py-6 text-lg rounded-xl"
                    >
                      Learn About Us
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primaryRed text-primaryRed hover:bg-primaryRed hover:text-white transition px-8 py-6 text-lg rounded-xl"
                    >
                      Get Free Estimate
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
                {[
                  { number: "500+", label: "Happy Customers" },
                  { number: "25+", label: "Years Experience" },
                  { number: "100%", label: "Licensed & Insured" },
                  { number: "5★", label: "Customer Rating" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-primaryRed/20 p-6 rounded-xl shadow-md 
                    hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primaryRed mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primaryBlack font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
