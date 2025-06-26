"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    country: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center px-4 py-24 bg-[url(../../public/images/contact-bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#5886BF] mb-6">Contact Us Now!</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="col-span-1 p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
            />
            <textarea
              name="message"
              placeholder="Can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="col-span-full p-2 border rounded bg-blue-50 border-none mb-4 focus-within:outline-2 focus-within:outline-[#5886BF]"
              rows={4}
            />
            <button
              type="submit"
              className="col-span-full bg-[#5886BF] text-white py-2 px-4 rounded hover:bg-[#597da8] transition"
            >
              Submit your Details
            </button>
          </form>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">A Healthy Mind is a path to Inner Peace & Happiness</h2>
          <p className="text-base mb-2">
            In today’s environment & adversity we are facing, we all need to understand how to manage ourselves,
            our kids, our family, work stress and much more. It’s time to explore our innate personality, leverage
            our strengths & work on our holistic well-being.
          </p>
          <p className="text-base">
            Please share your details with us. Our counsellor will get in touch with you shortly. Don’t worry!
            We keep it highly confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
