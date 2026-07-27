"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        delay: 1,
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-200"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium tracking-widest uppercase text-slate-200">
          Scroll
        </span>

        <ChevronDown className="h-6 w-6 text-cyan-300" />
      </div>
    </motion.div>
  );
}