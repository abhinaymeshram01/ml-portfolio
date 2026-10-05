"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
  Brain,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

const coreSkills = [
  "Python",
  "Generative AI",
  "Agentic AI",
  "LangGraph",
  "LangChain",
  "Google Gemini",
  "RAG",
  "FastAPI",
  "Docker",
  "Scikit-learn",
  "NLP",
  "AWS EC2",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold tracking-widest text-blue-400">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Building Intelligent AI Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm a Machine Learning Engineer focused on building practical
            Machine Learning, Generative AI, RAG, and Agentic AI applications.
            I enjoy turning ideas into useful AI systems using modern
            frameworks, APIs, vector databases, and deployment technologies.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] md:p-10"
          >
            <div className="space-y-10">
              {/* GenAI */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Brain
                  className="mt-1 shrink-0 text-cyan-400"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Generative & Agentic AI
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Building LLM-powered applications and agentic workflows
                    using LangGraph, LangChain, Google Gemini, prompt
                    engineering, and web search tools.
                  </p>
                </div>
              </motion.div>

              {/* RAG */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Database
                  className="mt-1 shrink-0 text-violet-400"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    RAG & AI Applications
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Developing retrieval-augmented applications using vector
                    embeddings, ChromaDB, FAISS, semantic search, document
                    processing, and similarity retrieval.
                  </p>
                </div>
              </motion.div>

              {/* Machine Learning */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Code2
                  className="mt-1 shrink-0 text-blue-400"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Machine Learning & NLP
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Building and evaluating machine learning models using
                    Scikit-learn with experience in classification, regression,
                    NLP, feature engineering, model evaluation, and SMOTE.
                  </p>
                </div>
              </motion.div>

              {/* Deployment */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4"
              >
                <Rocket
                  className="mt-1 shrink-0 text-cyan-300"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend & Deployment
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Turning AI and ML applications into usable systems with
                    FastAPI, Streamlit, Docker, Git, GitHub, and AWS EC2.
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
            {/* About Details */}
            <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur-xl md:p-10">
              <h3 className="text-2xl font-semibold text-white">
                What I Work With
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                My current focus is on building practical AI applications
                that combine machine learning with modern LLM technologies.
                I work across the complete application flow, from data and
                retrieval to model interaction, APIs, and deployment.
              </p>

              {/* Core Skills */}
              <div className="mt-10">
                <h4 className="mb-6 text-xl font-semibold text-white">
                  Core Skills
                </h4>

                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill) => (
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
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className="mt-10 border-t border-slate-800 pt-8">
                <h4 className="text-xl font-semibold text-white">
                  Current Focus
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  Continuously building and improving AI projects with a focus
                  on Generative AI, Agentic AI, RAG systems, research
                  automation, and production-oriented deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
