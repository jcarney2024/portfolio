"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold">About</h2>
        <p className="text-lg text-[#a0a0a0] leading-relaxed">
          I'm Jack Carney — a graphic designer and web developer passionate
          about creating compelling visual experiences and functional digital
          products. From event branding to full-stack web applications, I bring
          a detail-oriented approach to every project.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#e0b960] transition-colors"
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
