"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("api/quote", {
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
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zip: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!"); // Simple fallback error
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-neutral-800 to-neutral-700 p-[2px] rounded-xl shadow-lg w-full max-w-2xl">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white rounded-xl p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-primaryBlack mb-4">
          Get Your <span className="text-primaryRed font-bold">Free Estimate</span>
        </h2>

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
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-1 placeholder-gray-700"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-1 placeholder-gray-700"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-1 placeholder-gray-700"
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
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-1 placeholder-gray-700"
            required
          />
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            type="text"
            placeholder="Address"
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-2 placeholder-gray-700"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={2}
            className="border-b p-2 focus:outline-none focus:border-primaryRed col-span-2 placeholder-gray-700"
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
              By checking this box, I consent to receive SMS/text messages via
              automated technology from Mighty Fences for appointment reminders,
              follow-ups, order confirmations, and other notifications.
              Message frequency may vary. Standard messaging & data rates may
              apply. Reply STOP to opt-out. For assistance email
              admin@mightyfences.com.
            </span>
          </div>
          <div className="col-span-2">
            <Button
              type="submit"
              className="w-full border-2 hover:bg-primaryRed text-white border-primaryRed bg-primaryRed font-semibold py-3"
            >
              Request Estimate
            </Button>
          </div>
        </form>
      </div>

      {/* Modal Popup */}
      {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-transform duration-300 scale-90 animate-scaleUp">
            <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-green-100 animate-bounce">
              <CheckCircleIcon className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-2xl font-extrabold mb-2 text-gray-800">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Someone from our team will reach out to you soon.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )} */}

      {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center transform transition-transform duration-300 scale-90 animate-scaleUp">
            <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-green-100 animate-bounce">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-3xl font-extrabold mb-3 text-gray-800">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Someone from our team will reach out to you soon. We appreciate
              your patience!
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )} */}

      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50 animate-fadeIn">
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-12 max-w-2xl w-full text-center transform scale-90 animate-scaleUp">
      
      <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-green-200 animate-bounce shadow-lg">
        <CheckCircleIcon className="w-12 h-12 text-green-600" />
      </div>

      <h2 className="text-3xl font-extrabold mb-3 text-gray-900">
        Success!
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Your form has been submitted. Our team will reach out to you shortly.
      </p>

      <button
        onClick={() => setShowModal(false)}
        className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
      >
        Got it!
      </button>
    </div>
  </div>
)}



    </div>
  );
};

const InputField = ({ name, value, onChange, placeholder, type = "text", className = "" }) => (
  <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} className={`border-b p-2 focus:outline-none focus:border-red-600 placeholder-gray-700 ${className}`} required />
);
