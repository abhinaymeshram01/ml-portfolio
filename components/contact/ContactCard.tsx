"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type ContactCardProps = {
  title: string;
  value: string;
  link: string;
  icon: IconType;
};

export default function ContactCard({
  title,
  value,
  link,
  icon: Icon,
}: ContactCardProps) {
  const isClickable = link !== "#";

  const CardContent = (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
      }}
      className="group flex items-center gap-5 rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500/20">
        <Icon className="text-3xl text-cyan-400" />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>

        <p className="mt-2 break-all text-lg font-medium text-white transition-colors duration-300 group-hover:text-cyan-300">
          {value}
        </p>
      </div>
    </motion.div>
  );

  if (!isClickable) {
    return CardContent;
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {CardContent}
    </Link>
  );
}