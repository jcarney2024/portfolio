"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

const projects = [
  {
    url: "dfayale.org",
    screenshot: "/images/projects/dfayale.png",
    title: "DFA Yale",
    description: "Website for Design for America at Yale University",
  },
  {
    url: "beta.havenfreeclinic.org",
    screenshot: "/images/projects/haven-beta.png",
    title: "HAVEN Free Clinic",
    description: "Redesigned website for HAVEN Free Clinic",
  },
  {
    url: "hub.havenfreeclinic.org",
    screenshot: "/images/projects/haven-hub.png",
    title: "HAVEN Hub",
    description: "Internal hub for HAVEN Free Clinic operations",
  },
  {
    url: "yira.org",
    screenshot: "/images/projects/yira.png",
    title: "Yale International Relations Association",
    description:
      "Redesigned website for Yale International Relations Association",
  },
];

export default function WebProjects() {
  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2">Work</h2>
        <p className="text-[#a0a0a0] mb-12">Web development projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
