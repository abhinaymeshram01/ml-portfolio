"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import EducationCard from "@/components/education/EducationCard";
import { education } from "@/components/education/educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[170px]" />

      </div>

      <Container>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mb-24 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Academic Background
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My academic journey laid the foundation for software development,
            databases, programming, and analytical thinking, which later
            evolved into my passion for Machine Learning and Artificial
            Intelligence.
          </p>

        </motion.div>

        {/* Education Cards */}
        <div className="mx-auto max-w-6xl space-y-10">

          {education.map((item) => (

            <EducationCard
              key={item.year}
              year={item.year}
              degree={item.degree}
              institute={item.institute}
              university={item.university}
              duration={item.duration}
              description={item.description}
              subjects={item.subjects}
            />

          ))}

        </div>

      </Container>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/5 to-[#020817]" />

    </section>
  );
}