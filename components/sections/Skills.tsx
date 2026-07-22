"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SkillCard from "@/components/skills/SkillCard";
import { skills } from "@/components/skills/skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold tracking-[0.25em] text-blue-400 uppercase">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of technologies, frameworks, and tools I use to
            build machine learning models, develop scalable APIs, analyze
            data, and deploy production-ready AI applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <p className="text-xl leading-9 text-slate-400">
            Passionate about building{" "}
            <span className="font-semibold text-cyan-400">
              Machine Learning
            </span>{" "}
            solutions, creating{" "}
            <span className="font-semibold text-cyan-400">
              AI-powered applications
            </span>
            , and delivering{" "}
            <span className="font-semibold text-cyan-400">
              production-ready systems
            </span>{" "}
            using modern technologies, cloud-native deployment, and clean
            software engineering practices.
          </p>
        </motion.div>

      </Container>

      {/* Bottom Gradient Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-[#020817]" />
    </section>
  );
}