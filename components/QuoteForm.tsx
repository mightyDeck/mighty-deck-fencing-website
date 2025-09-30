"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// Define the shape of the form data
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
  message: string;
  consent: boolean;
}

export const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
    consent: false,
  });

  const [showModal, setShowModal] = useState(false);

  // ✅ handleChange handles text, textarea, and checkbox
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

      // Show modal
      setShowModal(true);

      // Auto-close after 5s
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
      toast.error("Something went wrong!");
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
          <InputField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <InputField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <InputField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            type="tel"
          />
          <InputField
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
          />
          <InputField
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Address"
            className="col-span-2"
          />
          <TextAreaField
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="col-span-2"
          />

          {/* <div className="flex items-start space-x-4 text-sm col-span-2">
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
          </div> */}
          <div className="flex items-start space-x-4 text-xs col-span-2">
  <input
    name="consent"
    type="checkbox"
    checked={formData.consent}
    onChange={handleChange}
    className="mt-1"
    required
  />
  <span className="text-[9px] text-gray-600">
    By checking this box, I consent to receive SMS/text messages via
    automated technology from Mighty Fences for appointment reminders,
    follow-ups, order confirmations, and other notifications. Message
    frequency may vary. Standard messaging & data rates may apply. Reply
    STOP to opt-out. For assistance email admin@mightyfences.com.
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

// ✅ Input field component
type InputFieldProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    className={`border-b p-2 focus:outline-none focus:border-red-600 placeholder-gray-700 ${className}`}
    required
  />
);

// ✅ Textarea component
type TextAreaFieldProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={2}
    className={`border-b p-2 focus:outline-none focus:border-red-600 placeholder-gray-700 ${className}`}
    required
  />
);
