"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  images: string[] | null;
  onClose: () => void;
}

export default function Lightbox({ images, onClose }: LightboxProps) {
  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`flex gap-6 items-center justify-center ${
            images.length === 1 ? "w-full max-w-4xl" : "w-full max-w-5xl"
          }`}
          style={{ height: "80vh" }}
        >
          {images.map((src) => (
            <div key={src} className="relative h-full" style={{ flex: "1 1 0" }}>
              <Image
                src={src}
                alt="Design work"
                fill
                className="object-contain"
                sizes={images.length === 1 ? "90vw" : "45vw"}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
