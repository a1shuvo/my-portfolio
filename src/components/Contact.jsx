import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiChatAlt,
  HiCheckCircle,
  HiMail,
  HiPhone,
  HiXCircle,
} from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1500)); // Mock async
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-tr from-indigo-50 via-white to-pink-50 min-h-[70vh] flex flex-col items-center justify-center px-6 sm:px-4 md:px-6 lg:px-8 py-20"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-12 sm:mb-16 border-b-4 border-indigo-400 inline-block pb-2 text-center select-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-8 sm:p-10 md:p-16 flex flex-col md:flex-row gap-10 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        {/* Left: Contact Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          variants={itemVariants}
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            I'm always open to discussing new projects, freelance opportunities,
            or just to say hello. Feel free to reach out using any of the
            options below or send me a message directly.
          </p>

          <div className="grid grid-cols-1 gap-5 max-w-md">
            <ContactCard
              Icon={HiMail}
              title="Email"
              contact="a1shuvosaha@gmail.com"
              href="mailto:a1shuvosaha@gmail.com"
            />
            <ContactCard
              Icon={HiPhone}
              title="Phone"
              contact="+880 1725062049"
              href="tel:+8801725062049"
            />
            <ContactCard
              Icon={HiChatAlt}
              title="WhatsApp"
              contact="+880 1725 062049"
              href="https://wa.me/8801725062049"
              isExternal
            />
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div className="flex-1" variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                disabled={submitting}
              />
              {errors.name && (
                <p className="mt-1 text-red-600 text-sm" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                disabled={submitting}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-1"
              >
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full rounded-lg border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                disabled={submitting}
              />
              {errors.message && (
                <p className="mt-1 text-red-600 text-sm" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submission status */}
            {submitError && (
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <HiXCircle className="w-6 h-6" /> {submitError}
              </div>
            )}
            {submitted && (
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <HiCheckCircle className="w-6 h-6" /> Thank you! Your message
                has been sent.
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-live="polite"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactCard({ Icon, title, contact, href, isExternal }) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-shadow shadow-md hover:shadow-lg cursor-pointer"
      aria-label={`Contact via ${title}`}
    >
      <div className="p-3 sm:p-4 rounded-full bg-indigo-600 text-white text-2xl sm:text-3xl flex items-center justify-center shadow-md">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-indigo-700">
          {title}
        </h3>
        <p className="text-gray-800 text-sm sm:text-lg">{contact}</p>
      </div>
    </a>
  );
}
