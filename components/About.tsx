"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
  { role: "IT & Communications Director", org: "HAVEN Free Clinic" },
  {
    role: "Technology Manager / Registration Platform Manager",
    org: "Yale International Relations Association",
  },
  { role: "Developer, YaleClubs Team", org: "Yale Computer Society" },
  // Listed under THE·TEAM, not Anthropic, per program guidelines.
  { role: "Claude Campus Ambassador", org: "THE·TEAM" },
  { role: "Director of Operations", org: "Design for America at Yale" },
  { role: "USG of Branding", org: "YMUN Europe XV & YMUN Korea XIV" },
];

const skillGroups = [
  {
    label: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C",
      "C++",
      "R",
      "HTML/CSS",
    ],
  },
  {
    label: "Frameworks & Infrastructure",
    skills: [
      "Next.js",
      "Prisma",
      "PostgreSQL (Neon)",
      "Azure",
      "Cloudflare (R2, DNS)",
      "AWS",
      "Google Cloud",
      "Vercel",
      "Linux/systemd",
      "Git",
    ],
  },
  { label: "Tools", skills: ["Epic Hyperspace", "Airtable"] },
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
            I&apos;m a junior at Yale studying Computer Science and Economics.
            I build software for healthcare and community organizations. Most
            recently I built HAVEN Hub, the platform that runs volunteer
            recruitment and onboarding for HAVEN Free Clinic, where I also lead
            IT, HIPAA compliance, and Epic EHR access. I&apos;m looking for
            Summer 2027 software engineering internships, especially in health
            tech. Outside of code, I do brand design and photography for
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
            download="Jack_Carney_Resume_SWE_2027.pdf"
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
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm text-[#fafafa] font-medium mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full border border-white/10 text-[#a0a0a0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
