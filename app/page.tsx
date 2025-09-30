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

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "25+", label: "Years Experience" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "5★", label: "Customer Rating" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero />

        {/* Quick Services Section */}
        <section className="py-24 bg-gradient-to-b from-primaryRed/5 via-white to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-primaryRed to-primaryYellow bg-clip-text text-transparent">
                  Fencing Services
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Expert fence installation and repair services tailored to your
                needs — residential or commercial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {quickServices.map((service, index) => (
                <Card
                  key={service.title}
                  className="group border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-primaryRed/10 p-5 rounded-full w-fit mx-auto mb-5 group-hover:bg-primaryRed/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primaryYellow" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="border-primaryRed text-primaryRed hover:bg-primaryRed hover:text-white transition flex items-center justify-center gap-2 mx-auto"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button className="bg-primaryRed text-white hover:bg-primaryRed/90 font-semibold px-10 py-5 rounded-xl text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  Why Columbia Trusts{" "}
                  <span className="bg-gradient-to-r from-primaryRed to-primaryRed bg-clip-text text-transparent">
                    MightyFences
                  </span>
                </h2>
                <p className="text-lg text-gray-700 font-medium">
                  With over 25 years of experience, we’ve built our reputation
                  on trust, craftsmanship, and customer satisfaction.
                </p>

                <div className="space-y-3">
                  {[
                    "Licensed & Insured Professional Team",
                    "Premium Materials & Expert Craftsmanship",
                    "Free Estimates & Transparent Pricing",
                    "24/7 Emergency Fence Repair Services",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primaryRed flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/about">
                    <Button className="bg-primaryRed text-white hover:bg-primaryRed/90 px-8 py-5 rounded-xl text-lg font-semibold">
                      Learn About Us
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-primaryRed text-primaryRed hover:bg-primaryRed hover:text-white px-8 py-5 rounded-xl text-lg font-semibold"
                    >
                      Get Free Estimate
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primaryRed mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
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
