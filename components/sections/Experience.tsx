"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import TimelineItem from "@/components/experience/TimelineItem";
import { experiences } from "@/components/experience/experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[160px]" />

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
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My journey from Information Technology to Machine Learning,
            building production-ready AI applications and continuously
            improving through hands-on projects and modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto max-w-6xl space-y-16">

          {experiences.map((experience, index) => (

            <TimelineItem
              key={experience.year}
              year={experience.year}
              title={experience.title}
              company={experience.company}
              description={experience.description}
              skills={experience.skills}
              index={index}
            />

          ))}

        </div>

      </Container>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-[#020817]" />

    </section>
  );
}