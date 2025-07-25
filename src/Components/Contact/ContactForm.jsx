import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Info Card */}
        <div className="bg-green-50 rounded-xl p-8 shadow">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <p className="text-gray-700 mb-6">
            Everunity Services <br />
            Plot No. 24, Ring Road, <br />
            Pratap Nagar, Nagpur - 440022 <br />
            India
          </p>

          <h4 className="text-lg font-semibold mb-2">Quick Contact</h4>
          <p className="text-gray-700 mb-1">
            Email:{" "}
            <a
              href="mailto:sales@everunityservices.com"
              className="text-green-600"
            >
              sales@everunityservices.com
            </a>
          </p>
          <p className="text-gray-700 mb-1">Phone: +91 9067734445</p>

          <h4 className="text-lg font-semibold mt-6 mb-2">Opening Hours</h4>
          <p className="text-gray-700 mb-1">From Monday - Friday</p>
          <p className="text-gray-700 mb-6">8 am to 7 pm</p>

          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition">
            <FaArrowRight />
            Request A Quote
          </button>
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Complete control over products allows us to ensure our customers
            receive the best quality, price, and service.
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select Your Services</option>
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Consulting</option>
              </select>
            </div>

            <textarea
              rows="4"
              placeholder="Additional Details!"
              className="border border-green-500 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition"
            >
              <FaArrowRight />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
