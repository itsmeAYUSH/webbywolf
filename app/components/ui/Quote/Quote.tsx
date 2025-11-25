"use client";
import React, { useState } from "react";
import { robotoCondensed, inter } from "../../../fonts";

type FormState = {
  name: string;
  email: string;
  phone: string;
  timeframe: string;
  size: string;
  quantity: string;
  project: string;
};

export default function Quote() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    size: "",
    quantity: "",
    project: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "E-mail is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid e-mail.";
    if (form.phone && form.phone.trim().length < 6)
      e.phone = "Enter a valid phone number.";
    if (!form.timeframe) e.timeframe = "Please choose a time frame.";
    if (!form.size) e.size = "Please choose a size.";
    if (!form.quantity) e.quantity = "Please choose a quantity.";
    if (!form.project.trim()) e.project = "Please describe your project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k: keyof FormState, v: string) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // simulate async submit
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    // In real app, send `form` to API here
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <h1
        className={`${robotoCondensed.className} text-[42px] text-center`}
        style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
      >
        Request a Quote
      </h1>

      <form onSubmit={handleSubmit} className="mt-10" noValidate>
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name */}
          <label className="block">
            <span className="text-sm text-gray-700">Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.name ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder=""
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-sm text-gray-700">E-mail</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.email ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder=""
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </label>

          {/* Phone Number */}
          <label className="block">
            <span className="text-sm text-gray-700">Phone Number</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.phone ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder=""
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </label>

          {/* Time Frame */}
          <label className="block">
            <span className="text-sm text-gray-700">
              Time Frame<span className="text-red-500 ml-1">*</span>
            </span>
            <select
              value={form.timeframe}
              onChange={(e) => onChange("timeframe", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.timeframe ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-invalid={!!errors.timeframe}
            >
              <option value="">Choose Time Frame</option>
              <option>Immediately</option>
              <option>1–2 weeks</option>
              <option>2–4 weeks</option>
              <option>1–3 months</option>
            </select>
            {errors.timeframe && (
              <p className="mt-1 text-xs text-red-500">{errors.timeframe}</p>
            )}
          </label>

          {/* Size */}
          <label className="block">
            <span className="text-sm text-gray-700">
              Size<span className="text-red-500 ml-1">*</span>
            </span>
            <select
              value={form.size}
              onChange={(e) => onChange("size", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.size ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-invalid={!!errors.size}
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Custom</option>
            </select>
            {errors.size && (
              <p className="mt-1 text-xs text-red-500">{errors.size}</p>
            )}
          </label>

          {/* Quantity */}
          <label className="block">
            <span className="text-sm text-gray-700">
              Quantity<span className="text-red-500 ml-1">*</span>
            </span>
            <select
              value={form.quantity}
              onChange={(e) => onChange("quantity", e.target.value)}
              className={`mt-2 w-full rounded-md border ${
                errors.quantity ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-invalid={!!errors.quantity}
            >
              <option value="">Choose Quantity</option>
              <option>1</option>
              <option>2–10</option>
              <option>10–50</option>
              <option>50+</option>
            </select>
            {errors.quantity && (
              <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>
            )}
          </label>
        </div>

        {/* Project Description (full width) */}
        <div className="mt-6">
          <label className="block">
            <span className="text-sm text-gray-700">
              Please Describe Your Project
              <span className="text-red-500 ml-1">*</span>
            </span>
            <textarea
              value={form.project}
              onChange={(e) => onChange("project", e.target.value)}
              rows={6}
              className={`mt-2 w-full rounded-md border ${
                errors.project ? "border-red-400" : "border-gray-200"
              } bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder="Choose a project type"
              aria-invalid={!!errors.project}
            />
            {errors.project && (
              <p className="mt-1 text-xs text-red-500">{errors.project}</p>
            )}
          </label>
        </div>

        {/* Terms and submit */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            By submitting this form you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition"
          >
            <span className="mr-3">
              {submitting ? "Sending..." : "Loerum Ipsum"}
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          {submitted && (
            <p className="mt-4 text-sm text-green-600">
              Thanks — your quote request has been submitted.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
