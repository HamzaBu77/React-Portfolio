import React, { useState } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: replace with your actual send logic (EmailJS, API route, etc.)
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      setStatus("sent");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#eef2f8] px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="inline-block border-b-4 border-amber-500 pb-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Contact Me
          </h2>
          <p className="mt-4 text-slate-600">
            Have a project or question? Send me a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-slate-300/70 p-8 shadow-sm"
        >
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-sm font-semibold text-slate-900"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-md border border-slate-400 bg-slate-200/60 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-slate-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border border-slate-400 bg-slate-200/60 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-semibold text-slate-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full resize-none rounded-md border border-slate-400 bg-slate-200/60 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-amber-500 py-3.5 font-semibold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-center text-sm font-medium text-green-700">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm font-medium text-red-700">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};