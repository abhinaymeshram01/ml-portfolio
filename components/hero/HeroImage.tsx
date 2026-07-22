"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="relative flex h-[500px] w-[500px] items-center justify-center"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer Glow */}
        <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* Rotating Ring */}
        <motion.div
          className="absolute h-[430px] w-[430px] rounded-full border border-blue-500/40"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Image */}
        <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-blue-500/30 bg-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.35)]">
          <Image
            src="/Photo-removebg-preview.png"
            alt="Abhinay Meshram"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}