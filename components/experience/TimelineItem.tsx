"use client";

import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

type TimelineItemProps = {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  index: number;
};

export default function TimelineItem({
  year,
  title,
  company,
  description,
  skills,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">

        {/* Dot */}
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
        >
          <FaCircle className="text-sm text-cyan-400" />
        </motion.div>

        {/* Vertical Line */}
        <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent" />

      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex-1 rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
      >

        {/* Year */}
        <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-300">
          {year}
        </span>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Company */}
        <p className="mt-2 text-cyan-400">
          {company}
        </p>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              {skill}
            </span>
          ))}

        </div>

      </motion.div>
    </motion.div>
  );
}