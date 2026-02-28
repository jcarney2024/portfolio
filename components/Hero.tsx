"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Jack Carney
        </h1>
        <p className="text-xl md:text-2xl text-[#a0a0a0]">
          Graphic Designer & Web Developer
        </p>
      </motion.div>
    </section>
  );
}
