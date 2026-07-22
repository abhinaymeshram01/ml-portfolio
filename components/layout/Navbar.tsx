"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const scrollPosition = window.scrollY + 200;

    let currentSection = "home";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        currentSection = section.id;
      }
    });

    setActiveSection((prev) =>
      prev !== currentSection ? currentSection : prev
    );


    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
    }, []);


  return (
    <header className="fixed inset-x-0 top-0 z-[999]">
      <Container>
        <nav className="flex h-20 items-center">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">

            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/40"
            >
              AM
            </motion.div>

            <div>
              <h1 className="font-bold text-white transition group-hover:text-cyan-300">
                Abhinay Meshram
              </h1>

              <p className="text-xs text-slate-400">
                Machine Learning Engineer
              </p>
            </div>

          </Link>

          <div className="ml-auto xl:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center">

            {/* Navigation */}
            <div className="hidden xl:flex items-center gap-8 ml-16">

              {navItems.map((item) => {
                const active =
                  activeSection === item.href.replace("#", "");

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={(e) => {
                      e.preventDefault();

                      const section = document.querySelector(item.href);

                      if (section) {
                        const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset -
                        90;

                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });

                        setActiveSection(item.href.replace("#", ""));
                      }
                    }}
                    className={`relative py-2 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-300"
                    }`}
                  >
                    {item.name}

                    {activeSection === item.href.replace("#", "") && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

            </div>

          </div>

        </nav>
      </Container>
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-[60] flex h-screen w-72 flex-col bg-[#07101f]/95 backdrop-blur-2xl border-l border-cyan-500/20 shadow-2xl xl:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 p-6">
                <h2 className="text-xl font-bold text-white">
                  Menu
                </h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-cyan-400"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation */}
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mt-8 flex flex-col px-6"
              >

                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.href.replace("#", "");

                  return (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                    >
                      <Link
                        href={item.href}
                        scroll={false}
                        onClick={(e) => {
                          e.preventDefault();

                          const section = document.querySelector(item.href);

                          if (section) {
                            const y =
                              section.getBoundingClientRect().top +
                              window.pageYOffset -
                              90;

                            window.scrollTo({
                              top: y,
                              behavior: "smooth",
                            });

                            setActiveSection(item.href.replace("#", ""));
                          }

                          setMobileOpen(false);
                        }}
                        className={`block rounded-xl px-4 py-4 text-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );

                })}

              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}