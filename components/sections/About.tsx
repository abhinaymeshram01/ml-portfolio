"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
  Brain,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

const stats = [
  {
    number: "12+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "2+",
    label: "Deployments",
  },
  {
    number: "100%",
    label: "Passion",
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Scikit-learn",
  "FastAPI",
  "Docker",
  "SQL",
  "Power BI",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="font-semibold tracking-widest text-blue-400">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Turning Data into Intelligent Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm a Machine Learning Engineer passionate about building
            AI-powered applications using Python, Scikit-learn,
            FastAPI, Docker, and modern cloud technologies.
            I enjoy solving real-world problems through data,
            automation, and scalable machine learning systems.
          </p>
        </motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
          >
            <div className="space-y-10">

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Brain className="mt-1 text-cyan-400" size={28} />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Machine Learning
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Building predictive models using Scikit-learn,
                    XGBoost, CatBoost and feature engineering.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Code2 className="mt-1 text-blue-400" size={28} />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend Development
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Deploying ML models with FastAPI, Docker,
                    REST APIs and production-ready workflows.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Database className="mt-1 text-indigo-400" size={28} />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Data Analytics
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Performing EDA, SQL analysis,
                    dashboard development and business insights.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Rocket className="mt-1 text-cyan-300" size={28} />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Continuous Learning
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Continuously improving my skills by building
                    projects and exploring modern AI technologies.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">

              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                >
                  <h3 className="text-4xl font-bold text-cyan-400">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* Skills */}
            <div className="mt-12">

              <h3 className="mb-6 text-2xl font-semibold text-white">
                Core Skills
              </h3>

              <div className="flex flex-wrap gap-4">

                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}