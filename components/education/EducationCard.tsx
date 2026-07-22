"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

type EducationCardProps = {
  year: string;
  degree: string;
  institute: string;
  university: string;
  duration: string;
  description: string;
  subjects: string[];
};

export default function EducationCard({
  year,
  degree,
  institute,
  university,
  duration,
  description,
  subjects,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="rounded-[32px] border border-cyan-500/20 bg-slate-900/40 p-10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]"
    >
      {/* Top */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
            <FaGraduationCap className="text-3xl text-cyan-400" />
          </div>

          <div>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-300">
              {year}
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {degree}
            </h3>

            <p className="mt-2 text-lg text-cyan-400">
              {institute}
            </p>

            <p className="text-slate-400">
              {university}
            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            Duration
          </p>

          <p className="mt-1 font-semibold text-white">
            {duration}
          </p>
        </div>

      </div>

      {/* Description */}
      <p className="mt-8 text-lg leading-8 text-slate-400">
        {description}
      </p>

      {/* Subjects */}
      <div className="mt-10 flex flex-wrap gap-4">

        {subjects.map((subject) => (
          <motion.span
            key={subject}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            {subject}
          </motion.span>
        ))}

      </div>

    </motion.div>
  );
}