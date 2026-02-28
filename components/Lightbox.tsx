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
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8 cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`relative max-h-[90vh] ${images.length === 1 ? "max-w-4xl w-full h-full" : "flex gap-4 max-w-6xl"}`}
        >
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt="Design work"
              fill
              className="object-contain"
              sizes="90vw"
            />
          ) : (
            images.map((src) => (
              <div key={src} className="relative flex-1 h-[80vh]">
                <Image
                  src={src}
                  alt="Design work"
                  fill
                  className="object-contain"
                  sizes="45vw"
                />
              </div>
            ))
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
