"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

import { contacts } from "@/components/contact/contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-[#020817] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[180px]" />

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
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you have an exciting Machine Learning project,
            freelance opportunity, collaboration, or just want to
            connect, I'd love to hear from you.
          </p>

        </motion.div>

        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-6"
          >

            {contacts.map((item) => (

              <ContactCard
                key={item.title}
                title={item.title}
                value={item.value}
                link={item.link}
                icon={item.icon}
              />

            ))}

          </motion.div>

          {/* Right */}
          <ContactForm />

        </div>

      </Container>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/5 to-[#020817]" />

    </section>
  );
}