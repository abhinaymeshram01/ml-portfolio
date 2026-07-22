"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  icon: LucideIcon;
  color: {
        text: string;
        bg: string;
        border: string;
        glow: string;
    };
  skills: string[];
};

export default function SkillCard({
  title,
  icon: Icon,
  color,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`group rounded-3xl border bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${color.border} ${color.glow}`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color.bg} ${color.text}`}
      >
        <Icon size={30} />
      </motion.div>

      {/* Title */}
      <h3 className="mb-5 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{
              scale: 1.08,
            }}
            className={`rounded-full border ${color.border} ${color.bg} px-4 py-2 text-sm font-medium ${color.text} transition-all duration-300 hover:scale-105`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}