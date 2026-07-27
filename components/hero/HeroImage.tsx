"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="flex w-full justify-center lg:justify-end"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="
          relative
          flex
          h-[320px]
          w-[320px]
          items-center
          justify-center
          sm:h-[380px]
          sm:w-[380px]
          md:h-[450px]
          md:w-[450px]
          lg:h-[500px]
          lg:w-[500px]
        "
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
        <div
          className="
            absolute
            h-[280px]
            w-[280px]
            rounded-full
            bg-blue-500/20
            blur-3xl
            sm:h-[340px]
            sm:w-[340px]
            md:h-[400px]
            md:w-[400px]
            lg:h-[450px]
            lg:w-[450px]
          "
        />

        {/* Rotating Ring */}
        <motion.div
          className="
            absolute
            h-[290px]
            w-[290px]
            rounded-full
            border
            border-blue-500/40
            sm:h-[350px]
            sm:w-[350px]
            md:h-[420px]
            md:w-[420px]
            lg:h-[430px]
            lg:w-[430px]
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Profile Image */}
        <div
          className="
            relative
            h-[230px]
            w-[230px]
            overflow-hidden
            rounded-full
            border-4
            border-blue-500/30
            bg-slate-900
            shadow-[0_0_80px_rgba(59,130,246,0.35)]
            sm:h-[280px]
            sm:w-[280px]
            md:h-[330px]
            md:w-[330px]
            lg:h-[350px]
            lg:w-[350px]
          "
        >
          <Image
            src="/Photo-removebg-preview.png"
            alt="Abhinay Meshram"
            fill
            priority
            sizes="(max-width: 768px) 230px, (max-width: 1024px) 330px, 350px"
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}