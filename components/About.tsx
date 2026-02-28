"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
  { role: "IT & Communications Director", org: "HAVEN Free Clinic" },
  { role: "Director of Operations", org: "Design for America at Yale" },
  { role: "USG Operations", org: "Yale Model United Nations Europe" },
  { role: "Student Developer", org: "Yale Computer Society" },
];

const skills = [
  "Python",
  "JavaScript",
  "C",
  "SQL",
  "HTML/CSS",
  "R",
  "C++",
  "Git",
  "Vercel",
  "AWS",
  "Google Cloud",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left column - bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-2">
            <Image
              src="/images/headshot.jpg"
              alt="Jack Carney"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
          <p className="text-lg text-[#a0a0a0] leading-relaxed">
            I&apos;m Jack Carney — a graphic designer and web developer at Yale
            University studying Computer Science and Economics. I build
            full-stack web applications and create visual identities for
            organizations I care about.
          </p>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a853] mb-3">
              Education
            </h3>
            <p className="text-[#fafafa] font-medium">Yale University</p>
            <p className="text-[#a0a0a0] text-sm">
              BS in Computer Science & Economics, May 2028
            </p>
            <p className="text-[#a0a0a0] text-sm">
              Language certificates in Spanish & Russian
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#e0b960] transition-colors"
          >
            Download Full Resume
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

        {/* Right column - experience & skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a853] mb-4">
              Current Roles
            </h3>
            <div className="space-y-3">
              {experience.map((item) => (
                <div key={item.role}>
                  <p className="text-[#fafafa] font-medium">{item.role}</p>
                  <p className="text-[#a0a0a0] text-sm">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a853] mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full border border-white/10 text-[#a0a0a0]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
