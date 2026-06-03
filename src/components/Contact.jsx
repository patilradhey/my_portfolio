import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contactme.png";

// ─── Replace these with your actual EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID      = "service_nilh94m";
const EMAILJS_TEMPLATE_NOTIFY = "template_ldshg27"; // email sent TO YOU
const EMAILJS_TEMPLATE_REPLY  = "template_f3gi2tc";  // thank-you TO SENDER
const EMAILJS_PUBLIC_KEY      = "u-zyVnlH1izcLgtGC";
// ──────────────────────────────────────────────────────────────────────────────

const Contact = ({ darkMode }) => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_first_name: formData.firstName,
      from_last_name:  formData.lastName,
      from_name:       `${formData.firstName} ${formData.lastName}`,
      from_email:      formData.email,
      from_phone:      formData.phone,
      message:         formData.message,
      reply_to:        formData.email,
    };

    try {
      // 1. Notify YOU about the new message
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_NOTIFY,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send thank-you reply to the SENDER
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_REPLY,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputClass = `w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base
    border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
    transition-all outline-none`;

  const inputStyle = {
    backgroundColor: darkMode ? "#374151" : "#faede3",
    borderColor:     darkMode ? "#4b5563" : "#d1d5db",
    color:           darkMode ? "white"   : "#1f2937",
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1" data-aos="fade-right">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={inputStyle}
                className={inputClass}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={inputStyle}
                className={inputClass}
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              className={`${inputClass} mb-3 sm:mb-4`}
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              className={`${inputClass} mb-3 sm:mb-4`}
            />

            {/* Message */}
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={inputStyle}
              className={`${inputClass} mb-4 sm:mb-6 resize-none`}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg
                text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25
                hover:scale-[1.02] transition-all disabled:opacity-70
                disabled:cursor-not-allowed disabled:scale-100"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {/* Feedback messages */}
            {status === "success" && (
              <p className="mt-4 text-center text-sm font-medium text-green-500">
                ✅ Message sent! Check your inbox for a confirmation email.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm font-medium text-red-500">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;