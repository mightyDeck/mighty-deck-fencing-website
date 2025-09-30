import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Star, StarHalf, StarOutline } from "lucide-react";

const services = [
  "Residential Fencing",
  "Commercial Fencing",
  "Privacy Fences",
  "Chain Link Fencing",
  "Vinyl Fencing",
  "Wood Fencing",
  "Fence Repairs",
  "Gate Installation",
];

const serviceAreas = [
    <>
    Serving Columbia & <br /> Surrounding Areas
  </>,
  // "Surrounding Areas",
  // "Irmo, SC",
  // "West Columbia, SC",
  // "Cayce, SC",
  // "Forest Acres, SC",
  // "Springdale, SC",
  // "Pine Ridge, SC",
];

export const Footer = () => {
  return (
    <footer className=" text-primaryBlack">
      {/* <footer className="bg-primaryRed/10 text-primaryBlack"> */}
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Mighty <span className="text-primaryRed">Fences</span>
              </h3>
              <p className="text-primaryBlack mb-4">
                Columbia's premier fence installation company, serving the
                community with quality craftsmanship.
              </p>

              {/* Rating */}
                {/* <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primaryRed text-primaryRed" />
                    ))}
                  </div>
                  <span className="text-sm text-primaryBlack">5.0 Rating</span>
                </div> */}

                <div className="flex items-center space-x-2 mb-4">
  <div className="flex">
    {[...Array(4)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primaryYellow text-primaryYellow" />
    ))}
    <StarHalf className="w-4 h-4 fill-primaryYellow text-primaryYellow" />
  </div>
  <span className="text-sm text-primaryBlack">4.9 Rating</span>
</div>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-primaryBlue text-white border-2 border-primaryBlue hover:bg-white hover:text-primaryBlue"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primaryBlack">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primaryBlack hover:text-primaryRed smooth-transition text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primaryBlack">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-primaryBlack text-sm">{area}</span>
                </li>
              ))}
            </ul>
            {/* <p className="text-xs text-black mt-4">*Free estimates within 25 miles</p> */}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primaryBlack">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primaryRed flex-shrink-0" />
                <div>
                  <a
                    href="tel:8037697747"
                    className="text-primaryBlack font-semibold hover:text-primaryRed smooth-transition"
                  >
                    (803) 769-7747
                  </a>
                  {/* <p className="text-xs text-primaryBlack">Available 24/7</p> */}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primaryRed flex-shrink-0" />
                <div>
                  <a
                    href="mailto:admin@mightydecksandfences.com"
                    className="text-primaryBlack hover:text-primaryRed smooth-transition text-sm"
                  >
                    admin@mightydecksandfences.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primaryRed flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primaryBlack text-sm">
                    Serving Columbia & <br /> Surrounding Areas
                  </p>
                </div>
              </div> */}
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-primaryBlue/40  rounded-lg">
            {/* <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg"> */}
            {/* <div className="mt-6 p-4 bg-primaryRed/10 rounded-lg"> */}
              <h5 className="font-semibold text-sm mb-2 text-primaryBlack">Business Hours</h5>
              <div className="text-xs text-primaryBlack space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primaryRed/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primaryBlack">
              © 2025 Mighty Decks And Fences. All rights reserved. Licensed & Insured.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-primaryBlack hover:text-primaryRed smooth-transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primaryBlack hover:text-primaryRed smooth-transition"
              >
                Terms of Service
              </a>
              {/* <div className="text-primaryBlack">License #ABC123456</div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
