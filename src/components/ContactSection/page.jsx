"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setCaptchaToken("");
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("EmailJS is not configured yet.");
      return;
    }

    if (!recaptchaSiteKey) {
      setStatus("reCAPTCHA site key is missing.");
      return;
    }

    if (!captchaToken) {
      setStatus("Please complete the CAPTCHA.");
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("EmailJS Full Error:", error);

      setStatus(
        error?.text
          ? `EmailJS error: ${error.text}`
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 px-4 py-12 sm:px-10 sm:py-16 md:px-20 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold text-white">Get in touch</h2>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-300">
          Want to connect, collaborate, or ask about my work? Fill out the form
          below and I will get back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-3xl space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full rounded border border-gray-600 bg-gray-800 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-white"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded border border-gray-600 bg-gray-800 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-white"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            className="w-full rounded border border-gray-600 bg-gray-800 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-white"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            rows="6"
            onChange={handleChange}
            className="w-full rounded border border-gray-600 bg-gray-800 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-white"
            required
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={(token) => setCaptchaToken(token || "")}
            onExpired={() => setCaptchaToken("")}
          />

          {status && (
            <p className="rounded border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="rounded border border-gray-300 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}