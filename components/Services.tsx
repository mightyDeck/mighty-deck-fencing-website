import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building,
  Shield,
  Hammer,
  Wrench,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import privacyFence from "@/assets/privacy-fence.jpg";
import commercialFence from "@/assets/commercial-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Fencing",
    description:
      "Beautiful and functional fencing solutions for your home, from privacy fences to decorative borders.",
    image: privacyFence,
    features: [
      "Privacy Fences",
      "Picket Fences",
      "Pool Fencing",
      "Garden Borders",
    ],
  },
  {
    icon: Building,
    title: "Commercial Fencing",
    description:
      "Professional-grade security and boundary solutions for businesses and industrial properties.",
    image: commercialFence,
    features: [
      "Chain Link",
      "Security Fencing",
      "Access Gates",
      "Perimeter Control",
    ],
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description:
      "High-quality wood, vinyl, aluminum, and chain link options to match any style and budget.",
    image: vinylFence,
    features: ["Wood Fencing", "Vinyl Fencing", "Aluminum Rails", "Chain Link"],
  },
];

const additionalServices = [
  {
    icon: Hammer,
    title: "Custom Design",
    description: "Tailored solutions for unique requirements",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Keep your fence looking and working like new",
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "Satisfaction guaranteed on all installations",
  },
];
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-primaryBlack font-semibold text-sm tracking-wide uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Complete Fencing Solutions for{" "}
            <span className="bg-hero-gradient bg-clip-text textprimaryRed">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-primaryBlack max-w-3xl mx-auto">
            From residential privacy fences to commercial security solutions, we
            provide expert installation and premium materials for lasting
            results.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-elegant smooth-transition cursor-pointer animate-scale-in border-0 soft-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    //@ts-ignore
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground p-2 rounded-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Heading → black */}
                  <h3 className="text-xl font-bold text-black group-hover:text-red-600 smooth-transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button → red bg + black text */}
                  <Button
                    className="w-full bg-red-600 text-black border-2 border-red-600 hover:bg-black hover:text-white smooth-transition"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className="text-center p-6 rounded-xl hover:bg-muted smooth-transition animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="bg-primaryRed p-3 rounded-full w-fit mx-auto mb-4">
                <service.icon className="w-6 h-6 text-red" />
              </div>
              {/* Heading → black */}
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-primaryBlack text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-red-600 text-black border-2 border-red-600 hover:bg-black hover:text-white text-lg px-8 py-6"
            >
              Get Your Free Quote Today
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No obligation • Professional consultation • Fast response
          </p>
        </div>
      </div>
    </section>
  );
};
