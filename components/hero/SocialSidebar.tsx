"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:flex flex-col gap-5"
    >
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-slate-900/70 text-blue-400 shadow-lg shadow-blue-500/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-300 hover:shadow-cyan-500/30"
            aria-label={item.label}
          >
            <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}