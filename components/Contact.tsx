"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Call Us Today", details: "(803) 769-7747", subtitle: "Available 24/7 for emergencies" },
  { icon: Mail, title: "Email Us", details: "info@toprailfence-columbia.com", subtitle: "We respond within 24 hours" },
  { icon: MapPin, title: "Service Area", details: "Columbia & Surrounding Areas", subtitle: "Free estimates within 25 miles" },
  { icon: Clock, title: "Business Hours", details: "Mon-Fri: 7AM-6PM", subtitle: "Sat: 8AM-4PM, Sun: Emergency only" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", zipCode: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await res.json();

      // Show the modal
      setShowModal(true);

      // Optional: auto-close modal after 5 seconds
      setTimeout(() => setShowModal(false), 5000);

      // Reset form
      setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "", zipCode: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!"); // Simple fallback error
    }
  };

  return (
    <section id="contact" className="py-20 bg-primaryRed/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-primaryRed font-semibold text-sm tracking-wide uppercase mb-4">
            Get Your Free Estimate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlack mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primaryRed to-primaryRed bg-clip-text text-transparent">
              Property?
            </span>
          </h2>
          <p className="text-xl text-primaryBlack/80 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation estimate. Our experienced team is ready to help you find the perfect fencing solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="soft-shadow border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primaryBlack">
                  Request Your Free Estimate
                </CardTitle>
                <p className="text-primaryBlack/70">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {["firstName", "lastName"].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-sm font-medium text-primaryBlack mb-2"
                        >
                          {field === "firstName" ? "First Name *" : "Last Name *"}
                        </label>
                        <Input
                          id={field}
                          name={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          className="smooth-transition"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {["email", "phone"].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-sm font-medium text-primaryBlack mb-2"
                        >
                          {field === "email" ? "Email Address *" : "Phone Number *"}
                        </label>
                        <Input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "tel"}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          className="smooth-transition"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Address & ZIP */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-primaryBlack mb-2"
                      >
                        Property Address *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="smooth-transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-primaryBlack mb-2"
                      >
                        ZIP Code
                      </label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="smooth-transition"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primaryBlack mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your fencing needs, preferred materials, timeline, and any specific requirements..."
                      className="min-h-[120px] smooth-transition"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primaryRed hover:bg-primaryRed text-white hover:text-black text-lg py-6 smooth-transition"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Free Estimate
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-primaryBlack/70 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="soft-shadow border-0 hover:shadow-elegant smooth-transition animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0 bg-primaryRed/10">
                      <info.icon className="w-6 h-6 text-primaryRed" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primaryBlack mb-1">{info.title}</h3>
                      <p className="text-primaryBlack/80 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-primaryBlack/70">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Notice */}
            <Card className="bg-primaryRed/10 border border-primaryRed/20 soft-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-primaryBlack mb-2">Emergency Repairs?</h3>
                <p className="text-sm text-primaryBlack/70 mb-4">
                  We offer 24/7 emergency fence repair services for urgent situations.
                </p>
                <Button
                  className="w-full bg-primaryRed text-white hover:bg-primaryRed/90 hover:text-black border-primaryRed"
                  asChild
                >
                  <a href="tel:8037697747">Call Now: (803) 769-7747</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ✅ Fixed InputField with proper typing */
type InputFieldProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  className?: string;
};

const InputField = ({
  name,
  value,
  onChange,
  label,
  type = "text",
  className = "",
}: InputFieldProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-foreground mb-2"
    >
      {label}
    </label>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required
      className={`smooth-transition ${className}`}
    />
  </div>
);
