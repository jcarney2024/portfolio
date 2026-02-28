"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
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
        <p className="relative text-xl md:text-2xl text-[#a0a0a0]">
          Graphic Designer & Web Developer
        </p>
      </motion.div>
    </section>
  );
}
