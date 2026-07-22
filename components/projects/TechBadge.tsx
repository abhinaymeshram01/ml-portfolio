"use client";

import { motion } from "framer-motion";

type TechBadgeProps = {
  name: string;
};

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
    >
      {name}
    </motion.span>
  );
}