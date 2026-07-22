"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

type FeaturedProjectProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  highlights: string[];
  github: string;
  reverse?: boolean;
};

export default function FeaturedProject({
  number,
  title,
  description,
  image,
  tech,
  highlights,
  github,
  reverse = false,
}: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        grid
            items-center
            gap-20
            rounded-[32px]
            border
            border-cyan-500/15
            bg-slate-900/35
            p-8
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-cyan-400/40
            hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]
            lg:grid-cols-2
            lg:p-12
            ${
            reverse
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }
        `}
    >
      {/* Project Banner */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 shadow-xl backdrop-blur-xl"
      >
        <Image
          src={image}
          alt={title}
          width={900}
          height={550}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020817] via-[#020817]/50 to-transparent" />

        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Cyan Glow */}
        <div className="absolute inset-0 bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/5" />


      </motion.div>

      {/* Project Content */}
      <div>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 backdrop-blur-md"
        >
            <span className="text-lg">⭐</span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Featured Project
            </span>
        </motion.div>

        <span className="absolute -left-2 -top-10 select-none text-8xl font-black text-white/5 lg:text-9xl">
          {number}
        </span>

        <h3 className="mt-3 text-4xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => (
            <TechBadge
              key={item}
              name={item}
            />
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true}}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-cyan-500/15
                bg-slate-900/50
                px-5
                py-4
                backdrop-blur-lg
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-slate-900/80
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >
              <CheckCircle2
                size={20}
                className="text-cyan-400"
              />

              <span className="font-medium text-slate-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* GitHub Button */}
        <ProjectButtons github={github} />
      </div>
    </motion.div>
  );
}