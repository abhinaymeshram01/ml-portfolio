"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import FeaturedProject from "@/components/projects/FeaturedProject";
import { projects } from "@/components/projects/projectsData";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Machine Learning Portfolio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of real-world Machine Learning applications built
            using modern AI technologies, scalable backend systems, and
            production-ready deployment workflows.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-36">
          {projects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              number={`0${index + 1}`}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              highlights={project.highlights}
              github={project.github}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Want to Explore More?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Visit my GitHub profile to explore more Machine Learning,
            Data Science, and AI projects.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="https://github.com/abhinaymeshram01"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >
            <FaGithub className="text-2xl" />
            View More Projects
          </motion.a>
        </motion.div>

      </Container>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-[#020817]" />
    </section>
  );
}