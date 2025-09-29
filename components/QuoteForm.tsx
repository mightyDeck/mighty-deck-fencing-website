import { useState } from "react";
import { Button } from "@/components/ui/button";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-600 p-[2px] rounded-xl shadow-lg w-full max-w-2xl">
      <div className="bg-white rounded-xl p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-primaryBlack mb-4">
          Get Your  <span className="text-primaryYellow font-bold">Free Estimate</span>
        </h2>
       {/* <p className="text-sm text-muted-foreground mb-6 text-primaryBlack">
          All Fields Required
        </p>*/}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1 placeholder-gray-700"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1  placeholder-gray-700"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1  placeholder-gray-700"
            pattern="^[0-9]{10}$"
            title="Enter a valid 10-digit phone number"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1  placeholder-gray-700"
            required
          />
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            type="text"
            placeholder="Address"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-2 placeholder-gray-700"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={2}
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-2  placeholder-gray-700"
            required
          />

          <div className="flex items-start space-x-4 text-sm col-span-2">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <span>
             By checking this box, I consent and opt-on to receive SMS/text messages via automated technology from Mighty Dog Roofing for conversational purposes, appointment reminders, follow-up on cases, order confirmations, and other notifications. Message frequency may vary and standard messaging & data rates may apply. I acknowledge that I can opt out of ALL future messages at any time by replying STOP. For assistance email admin@mightydecksandfences.com.

            </span>
          </div>

          <div className="col-span-2">
            <Button
              type="submit"
              className="w-full border-2 border-primaryBlack bg-primaryYellow hover:bg-primaryBlack hover:text-white text-black font-semibold py-3"
            >
              Request Estimate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
