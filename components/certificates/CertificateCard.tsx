"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

type CertificateCardProps = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  pdf: string;
  skills: string[];
};

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  pdf,
  skills,
}: CertificateCardProps) {
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
      className="overflow-hidden rounded-[30px] border border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
    >
      {/* Certificate Image */}
      <div className="group relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

      </div>

      {/* Content */}
      <div className="p-8">

        {/* Issuer */}
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10">
            <FaAward className="text-cyan-400" />
          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              {issuer}
            </p>

            <p className="text-sm text-slate-500">
              Issued {year}
            </p>

          </div>

        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold leading-snug text-white">
          {title}
        </h3>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-3">

          {skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              {skill}
            </span>

          ))}

        </div>

        {/* Button */}
        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-10"
        >
          <Link
            href={pdf}
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            View Certificate

            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
}