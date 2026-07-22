"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type ProjectButtonsProps = {
  github: string;
};

export default function ProjectButtons({
  github,
}: ProjectButtonsProps) {
  return (
    <div className="mt-8">

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link
          href={github}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
        >
          <FaGithub className="text-lg" />

          <span className="font-medium">
            View Source Code
          </span>
        </Link>
      </motion.div>

    </div>
  );
}