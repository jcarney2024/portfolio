"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,83,0.25) 0%, rgba(212,168,83,0.08) 50%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [60, -60, 60],
            y: [-40, 40, -40],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,83,0.2) 0%, rgba(180,140,60,0.06) 50%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-50, 40, -50],
            y: [30, -40, 30],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[450px] h-[450px] rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(212,168,83,0.05) 50%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
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
