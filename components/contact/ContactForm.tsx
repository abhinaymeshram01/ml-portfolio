"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.from_name ||
      !form.from_email ||
      !form.subject ||
      !form.message
    ) {
      toast.warning("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="rounded-[32px] border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-xl"
    >
      <h3 className="mb-8 text-3xl font-bold text-white">
        Send a Message
      </h3>

      {/* Name */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Full Name
        </label>

        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project discussion..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Message
        </label>

        <textarea
          rows={6}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: loading ? 1 : 1.03,
        }}
        whileTap={{
          scale: loading ? 1 : 0.97,
        }}
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <FaPaperPlane />

        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}