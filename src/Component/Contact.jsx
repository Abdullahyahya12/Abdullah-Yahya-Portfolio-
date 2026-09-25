
import { useState } from "react";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const contactItems = [
    {
      id: 1,
      label: "GitHub",
      value: "github.com/Abdullahyahya12",
      href: "https://github.com/Abdullahyahya12",
      external: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.58c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      ),
    },

    {
      id: 2,
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-abdullah-60a4171a3",
      href: "https://www.linkedin.com/in/muhammad-abdullah-60a4171a3",
      external: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46Z" />
        </svg>
      ),
    },

    {
      id: 3,
      label: "Email",
      value: "mabdullah332w@gmail.com",
      href: "mailto:mabdullah332w@gmail.com",
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4 7 8 6 8-6"
          />
        </svg>
      ),
    },

    {
      id: 4,
      label: "Phone",
      value: "+92 322 1060997",
      href: "tel:+923221060997",
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.53-.36c.98.33 2.03.5 3.06.5a1.5 1.5 0 0 1 1.5 1.5v3.48A1.5 1.5 0 0 1 20 21.8C10.17 21.3 2.7 13.83 2.2 4A1.5 1.5 0 0 1 3.7 2.5h3.48a1.5 1.5 0 0 1 1.5 1.5c0 1.03.17 2.08.5 3.06a1.5 1.5 0 0 1-.36 1.53l-2.2 2.2Z"
          />
        </svg>
      ),
    },

    {
      id: 5,
      label: "Location",
      value: "Chunian, Punjab, Pakistan",
      href: null,
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-6.15 7-12a7 7 0 1 0-14 0c0 5.85 7 12 7 12Z"
          />
          <circle
            cx="12"
            cy="9"
            r="2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 sm:py-28 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/10" : "bg-indigo-200/30"
        }`}
        aria-hidden="true"
      />

      <div
        className={`pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/10" : "bg-blue-200/30"
        }`}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="contact-header mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              darkMode
                ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-400"
                : "border-indigo-200 bg-indigo-50 text-indigo-600"
            }`}
          >
            Contact
          </span>

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s Build Something{" "}
            <span className="text-indigo-500">Great</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-indigo-500" />

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project idea, freelance opportunity or collaboration in
            mind? Feel free to get in touch.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactItems.map((item) => {
              const cardContent = (
                <>
                  <div
                    className={`contact-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      darkMode
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.label}
                    </p>

                    <p
                      className={`mt-1 break-words text-sm leading-6 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`contact-info-card flex items-start gap-4 rounded-3xl border p-5 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900"
                      : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-white"
                  }`}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={item.id}
                  className={`contact-info-card flex items-start gap-4 rounded-3xl border p-5 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900"
                      : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-white"
                  }`}
                >
                  {cardContent}
                </div>
              );
            })}

            {/* Contact Note */}
            <div
              className={`contact-note rounded-3xl border p-6 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/40"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    darkMode
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                    />
                  </svg>
                </div>

                <div>
                  <h3
                    className={`text-sm font-semibold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Open to opportunities
                  </h3>

                  <p
                    className={`mt-1 text-sm leading-6 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    I&apos;m interested in learning, building projects and
                    collaborating on meaningful web development work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`contact-form-card rounded-[2rem] border p-6 sm:p-8 ${
              darkMode
                ? "border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20"
                : "border-slate-200 bg-white shadow-xl shadow-slate-200/50"
            }`}
          >
            <div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Send Me a Message
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Fill out the form below and I&apos;ll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className={`mb-2 block text-sm font-medium ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm outline-none ${
                    darkMode
                      ? "border-slate-800 bg-slate-950/70 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  } ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className={`mb-2 block text-sm font-medium ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm outline-none ${
                    darkMode
                      ? "border-slate-800 bg-slate-950/70 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  } ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className={`mb-2 block text-sm font-medium ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className={`w-full resize-none rounded-2xl border px-4 py-3.5 text-sm outline-none ${
                    darkMode
                      ? "border-slate-800 bg-slate-950/70 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  } ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {submitted && (
                <div
                  className={`contact-success rounded-2xl border px-4 py-3 text-sm ${
                    darkMode
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  Your message has been submitted successfully.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="contact-submit group flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="relative z-10">Send Message</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-10 rounded-3xl border p-5 text-center ${
            darkMode
              ? "border-slate-800 bg-slate-900/30 text-slate-500"
              : "border-slate-200 bg-slate-50 text-slate-500"
          }`}
        >
          <p className="text-xs leading-6 sm:text-sm">
            This contact form currently performs frontend validation only.
            Email delivery/backend integration can be added later.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
