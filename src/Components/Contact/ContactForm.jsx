// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { FaArrowRight } from "react-icons/fa";

// const ContactForm = () => {
//   const form = useRef();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7fhdvbr", // ✅ Replace with your actual EmailJS service ID
//         "template_4t4o3rd", // ✅ Replace with your template ID
//         form.current,
//         "LoiQPdg84zCa5B92k" // ✅ Replace with your public key
//       )
//       .then(
//         () => {
//           setIsSubmitted(true);
//           form.current.reset();

//           // Optional: Hide the success message after a few seconds
//           setTimeout(() => {
//             setIsSubmitted(false);
//           }, 5000);
//         },
//         (error) => {
//           alert("Oops! Something went wrong.");
//           console.error(error);
//         }
//       );
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
//         {/* Left Info Card */}
//         <div className="bg-green-50 rounded-xl p-8 shadow">
//           <h3 className="text-xl font-bold mb-4">Our Location</h3>
//           <p className="text-gray-700 mb-6">
//             Everunity Services <br />
//             Plot No. 24, Ring Road, <br />
//             Pratap Nagar, Nagpur - 440022 <br />
//             India
//           </p>

//           <h4 className="text-lg font-semibold mb-2">Quick Contact</h4>
//           <p className="text-gray-700 mb-1">
//             Email:{" "}
//             <a
//               href="mailto:sales@everunityservices.com"
//               className="text-green-600"
//             >
//               sales@everunityservices.com
//             </a>
//           </p>
//           <p className="text-gray-700 mb-1">Phone: +91 9067734445</p>

//           <h4 className="text-lg font-semibold mt-6 mb-2">Opening Hours</h4>
//           <p className="text-gray-700 mb-1">From Monday - Friday</p>
//           <p className="text-gray-700 mb-6">8 am to 7 pm</p>

//           <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition">
//             <FaArrowRight />
//             Request A Quote
//           </button>
//         </div>

//         {/* Right Form */}
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
//           <p className="text-gray-600 mb-6">
//             Complete control over products allows us to ensure our customers
//             receive the best quality, price, and service.
//           </p>

//           {isSubmitted && (
//             <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-md border border-green-200">
//               ✅ Thank you! Your message has been sent successfully.
//             </div>
//           )}

//           <form ref={form} onSubmit={sendEmail} className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your Name"
//                 required
//                 className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="Your Email"
//                 required
//                 className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <select
//                 name="service"
//                 required
//                 className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option value="">Select Your Service</option>
//                 <option value="Residential Solar">Residential Solar</option>
//                 <option value="Commercial Solar">Commercial Solar</option>
//                 <option value="Consulting">Consulting</option>
//               </select>
//             </div>

//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message..."
//               required
//               className="border border-green-500 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition"
//             >
//               <FaArrowRight />
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          setShowPopup(true);

          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        (error) => {
          setIsSubmitting(false);
          alert("Oops! Something went wrong.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-white py-16 relative">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Thank You!
            </h2>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        {/* Info Card */}
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
          <p className="text-gray-700 mb-1">Monday - Friday</p>
          <p className="text-gray-700 mb-6">8 am to 7 pm</p>

          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-green-700 transition">
            <FaArrowRight />
            Request A Quote
          </button>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Complete control over products allows us to ensure our customers
            receive the best quality, price, and service.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                name="service"
                required
                className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Your Service</option>
                <option value="Residential Solar">Residential Solar</option>
                <option value="Commercial Solar">Commercial Solar</option>
                <option value="Consulting">Consulting</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              className="border border-green-500 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition min-h-[50px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5 inline-block" />
              ) : (
                <>
                  <FaArrowRight />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
