'use client'
import React, { useState } from 'react';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const page: React.FC = () => {
  // State to handle form data
  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can implement your form submission logic here (e.g., send data to API)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grey-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        {/* Page Header */}
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        {/* Contact Info Section */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div className="sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 Music School Lane</p>
            <p>City, State, ZIP</p>
          </div>
          <div className="sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="sm:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@musicschool.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            {/* Name Input */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="w-full mt-4 sm:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
