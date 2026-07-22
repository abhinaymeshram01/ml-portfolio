"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/abhinaymeshram01",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abhinaymeshram01/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:abhinaymeshram01@gmail.com",
    label: "Email",
  },
  {
    icon: FaFileAlt,
    href: "/Abhinay_MLresume.pdf",
    label: "Resume",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#020817]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg shadow-blue-500/40"
          >
            AM
          </motion.div>

          {/* Name */}
          <h2 className="mt-6 text-4xl font-bold text-white">
            Abhinay Meshram
          </h2>

          <p className="mt-2 text-xl text-cyan-400">
            Machine Learning Engineer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Passionate about building intelligent Machine Learning
            solutions, scalable AI applications, and modern data-driven
            software using Python, FastAPI, Docker, and Cloud technologies.
          </p>

          {/* Social Icons */}
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6, scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    className="group flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                  >
                    <Icon
                      size={26}
                      className="text-slate-300 transition group-hover:text-cyan-300"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mx-auto mt-16 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-5"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-base font-medium text-slate-400 transition hover:text-cyan-400 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>

          {/* Bottom Divider */}
          <div className="mx-auto mt-16 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row"
          >

            {/* Left */}
            <div className="text-center lg:text-left">

              <p className="text-slate-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  Abhinay Meshram
                </span>
                . All rights reserved.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Built with ❤️ using Next.js, TypeScript & Tailwind CSS
              </p>

            </div>

            {/* Back To Top */}
            <motion.button
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/60 px-6 py-3 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />

              Back to Top
            </motion.button>

          </motion.div>

        </motion.div>

      </div>

    </footer>
  );
}