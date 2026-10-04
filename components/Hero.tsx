"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative"
      >
        {/* Glow layer - blurred duplicate behind the text */}
        <motion.h1
          aria-hidden
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 text-6xl md:text-8xl font-bold tracking-tight mb-4 text-[#d4a853] blur-[40px] select-none"
        >
          Jack Carney
        </motion.h1>

        {/* Secondary wider glow */}
        <motion.h1
          aria-hidden
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0 text-6xl md:text-8xl font-bold tracking-tight mb-4 text-[#d4a853] blur-[80px] select-none"
        >
          Jack Carney
        </motion.h1>

        {/* Actual text */}
        <h1 className="relative text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Jack Carney
        </h1>
        <p className="relative text-xl md:text-2xl text-[#fafafa] max-w-2xl mx-auto leading-snug">
          Software engineer building tools for healthcare and community
          organizations.
        </p>
        <p className="relative mt-4 text-sm md:text-base text-[#a0a0a0]">
          CS & Economics @ Yale &middot; Creator of{" "}
          <a
            href="#software"
            className="text-[#d4a853] hover:text-[#e0b960] transition-colors"
          >
            HAVEN Hub
          </a>
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#software"
            className="px-5 py-2.5 bg-[#d4a853] text-[#0a0a0a] text-sm font-semibold rounded-lg hover:bg-[#e0b960] transition-colors"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/15 text-sm font-semibold rounded-lg hover:border-[#d4a853]/60 hover:text-[#d4a853] transition-colors"
          >
            Resume
          </a>
          <a
            href="https://github.com/jcarney2024"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/15 text-sm font-semibold rounded-lg hover:border-[#d4a853]/60 hover:text-[#d4a853] transition-colors"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
