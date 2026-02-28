"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

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
          className="relative max-w-4xl max-h-[90vh] w-full h-full"
        >
          <Image
            src={src}
            alt="YMUNK design"
            fill
            className="object-contain"
            sizes="90vw"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
