"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import CertificateCard from "@/components/certificates/CertificateCard";
import { certificates } from "@/components/certificates/certificateData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-20 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[160px]" />

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
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Professional Certifications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Certifications that demonstrate my practical knowledge in
            Machine Learning, Artificial Intelligence, Python, Data
            Science, and modern analytics technologies.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-10 lg:grid-cols-2">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
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
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <CertificateCard
                title={certificate.title}
                issuer={certificate.issuer}
                year={certificate.year}
                image={certificate.image}
                pdf={certificate.pdf}
                skills={certificate.skills}
              />
            </motion.div>

          ))}

        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-lg leading-8 text-slate-400">
            I believe continuous learning is essential in Artificial
            Intelligence. These certifications reflect my commitment to
            mastering modern Machine Learning, Data Science, and software
            engineering practices.
          </p>
        </motion.div>

      </Container>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/5 to-[#020817]" />

    </section>
  );
}