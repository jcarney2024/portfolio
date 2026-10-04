"use client";

import { motion } from "framer-motion";
import BrowserFrame, { BrowserWindow, StackList } from "./BrowserFrame";

const hub = {
  url: "hub.havenfreeclinic.org",
  // Sign-in page only. Never swap in a screenshot with real volunteer or
  // patient data; HAVEN is a HIPAA-covered clinic. Use seeded data or blur.
  screenshot: "/images/projects/haven-hub.png",
  title: "HAVEN Hub",
  role: "Creator & Lead Developer",
  dates: "Dec 2025 – present",
  description:
    "A full-stack volunteer management platform for HAVEN Free Clinic, a Yale-affiliated, student-run free clinic. It runs recruitment and onboarding for 500+ volunteers every semester.",
  features: [
    "Application intake, with file uploads stored in Cloudflare R2",
    "Committee review and scoring",
    "Interview scheduling",
    "Waitlist management across recruitment cycles",
  ],
  infrastructure: [
    "An asynchronous email pipeline: a systemd-managed polling service on an Azure Linux VM that sends queued transactional emails through the Hub’s API",
    "DNS, DKIM, and DMARC setup, and debugging of inbound routing, for organization-wide email deliverability",
    "Database branches and dev environments for the developers I work with",
  ],
  stack: [
    "TypeScript",
    "Next.js",
    "Prisma",
    "PostgreSQL (Neon)",
    "Cloudflare R2",
    "Azure (Linux VM)",
  ],
};

const projects = [
  {
    url: "yaleclubs.io",
    screenshot: "/images/projects/yaleclubs.png",
    title: "YaleClubs",
    role: "Developer, YaleClubs Team · Yale Computer Society",
    // TODO(jack): add your specific contributions to YaleClubs.
    description:
      "Y/CS’s student-built platform for discovering Yale’s student organizations. I build features as part of the YaleClubs team.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    url: "beta.havenfreeclinic.org",
    screenshot: "/images/projects/haven-beta.png",
    title: "HAVEN Free Clinic Website",
    role: "Redesign Lead · HAVEN Free Clinic",
    description:
      "A redesign of HAVEN Free Clinic’s public website, currently in beta.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    url: "yira.org",
    screenshot: "/images/projects/yira.png",
    title: "YIRA",
    role: "Technology Manager / Registration Platform Manager · Yale International Relations Association",
    description:
      "The website for the Yale International Relations Association, which I built as YIRA’s Technology Manager.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    url: "dfayale.org",
    screenshot: "/images/projects/dfayale.png",
    title: "DFA Yale",
    role: "Director of Operations · Design for America at Yale",
    description:
      "The website for Design for America at Yale, which I build and maintain.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
  },
];

export default function WebProjects() {
  return (
    <section id="software" className="pt-8 pb-16 md:pb-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2">Software</h2>
        <p className="text-[#a0a0a0] mb-8 md:mb-10">
          Projects I&apos;ve built and maintain
        </p>
      </motion.div>

      {/* Featured: HAVEN Hub */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 p-5 md:p-8 mb-16 rounded-2xl border border-[#d4a853]/20 bg-[#d4a853]/[0.03]"
      >
        <div>
          <BrowserWindow
            url={hub.url}
            screenshot={hub.screenshot}
            title={hub.title}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <p className="mt-3 text-xs text-[#a0a0a0]/70">
            An internal tool for HAVEN staff and volunteers, so sign-in is
            required. No clinic data is shown on this site.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d4a853] mb-2">
            Featured project
          </p>
          <h3 className="text-3xl font-bold">{hub.title}</h3>
          <p className="text-sm text-[#d4a853]/80 mt-1">
            {hub.role} &middot; {hub.dates}
          </p>
          <p className="text-[#a0a0a0] mt-4 leading-relaxed">
            {hub.description}
          </p>

          <h4 className="text-sm font-semibold text-[#fafafa] mt-6 mb-2">
            What it does
          </h4>
          <ul className="space-y-1.5 text-sm text-[#a0a0a0] list-disc pl-5 marker:text-[#d4a853]/60">
            {hub.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-[#fafafa] mt-6 mb-2">
            Infrastructure
          </h4>
          <ul className="space-y-1.5 text-sm text-[#a0a0a0] list-disc pl-5 marker:text-[#d4a853]/60">
            {hub.infrastructure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6">
            <StackList stack={hub.stack} />
          </div>
        </div>
      </motion.article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <BrowserFrame {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
