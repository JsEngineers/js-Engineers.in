"use client";

import { useState } from "react";
import Button from "../../components/ui/Button";
import { COMPANY } from "../../constants/company";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Electrical",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    // Create WhatsApp message
    const whatsappMessage = `
New Service Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Service: ${formData.service}

Message:
${formData.message || "No message"}
`;

    const whatsappURL = `https://wa.me/${COMPANY.phone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };


  if (submitted) {

    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center shadow-sm">

        <div className="text-green-600 text-2xl mb-2">
          ✓
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Enquiry Sent Successfully
        </h3>

        <p className="text-sm text-gray-600">
          Our team will contact you shortly via phone or WhatsApp.
        </p>

      </div>
    );

  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Name */}
      <div>

        <label className="block text-sm font-medium mb-2">
          Full Name *
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Enter your full name"
        />

      </div>


      {/* Phone */}
      <div>

        <label className="block text-sm font-medium mb-2">
          Phone Number *
        </label>

        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Enter your phone number"
        />

      </div>


      {/* Email */}
      <div>

        <label className="block text-sm font-medium mb-2">
          Email (Optional)
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Enter your email"
        />

      </div>


      {/* Service */}
      <div>

        <label className="block text-sm font-medium mb-2">
          Service Required
        </label>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >

          <option>Electrical</option>
          <option>Telecom</option>
          <option>Satellite</option>

        </select>

      </div>


      {/* Message */}
      <div>

        <label className="block text-sm font-medium mb-2">
          Message
        </label>

        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Describe your requirement"
        />

      </div>


      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        fullWidth
        className="py-3 text-lg"
      >
        {loading ? "Sending..." : "Submit Enquiry"}
      </Button>

    </form>
  );

}
