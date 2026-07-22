"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <p className="mb-4 font-semibold text-blue-400">
        👋 Hello, I'm
      </p>

      <h1 className="mt-4 text-6xl font-extrabold leading-tight tracking-tight text-white lg:text-7xl">
        Abhinay
        <br />

        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Meshram
        </span>
      </h1>

      <h2 className="mt-6 text-3xl font-semibold text-slate-200">
        Machine Learning Engineer
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        I build intelligent AI-powered applications using Machine Learning,
        Deep Learning, FastAPI, Docker, and modern cloud technologies.
        Passionate about solving real-world problems with AI and Data Science.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Button
          size="lg"
          className="rounded-xl bg-blue-600 px-8 py-6 text-base font-semibold shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
        >
          View Projects
        </Button>

        <Link href="/Abhinay_ML_resume.pdf" target="_blank" download>
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl border-blue-500 bg-transparent px-8 py-6 text-base text-white hover:bg-blue-500/10"
        >
          Download Resume
        </Button>
        </Link>
      </div>
    </motion.div>
  );
}