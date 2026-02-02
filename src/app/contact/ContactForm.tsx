"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  category: "",
  message: "",
};

const categoryOptions = [
  { value: "", label: "Select a category" },
  { value: "founders", label: "Founders & Entrepreneurs" },
  { value: "investment", label: "Investment Inquiries" },
  { value: "general", label: "General Inquiries" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message:
          "Thank you for reaching out. We will review your message and respond within 5-7 business days.",
      });

      setFormData(initialFormData);
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="font-display-whisper text-foreground/50 block mb-3"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-0 border-b border-border pb-4 text-foreground placeholder-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-500"
          placeholder="Your full name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="font-display-whisper text-foreground/50 block mb-3"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-0 border-b border-border pb-4 text-foreground placeholder-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-500"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Category Field */}
      <div>
        <label
          htmlFor="category"
          className="font-display-whisper text-foreground/50 block mb-3"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-0 border-b border-border pb-4 text-foreground focus:border-foreground focus:outline-none transition-colors duration-500 cursor-pointer"
        >
          {categoryOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-background text-foreground"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="font-display-whisper text-foreground/50 block mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full bg-transparent border-0 border-b border-border pb-4 text-foreground placeholder-foreground/30 focus:border-foreground focus:outline-none transition-colors duration-500 resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      {/* Submit Status Message */}
      {submitStatus.type && (
        <div
          className={`border-l-2 pl-6 py-4 ${
            submitStatus.type === "success"
              ? "border-foreground/50 text-foreground/70"
              : "border-red-500 text-red-600"
          }`}
        >
          <p className="font-body-refined text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-luxury text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
