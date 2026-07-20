"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  images: string[] | null;
  onClose: () => void;
  /** Alt text, parallel to `images`. Falls back to a generic label. */
  alts?: string[];
  /**
   * When set alongside `onIndexChange`, the lightbox shows one image at a time
   * with prev/next controls. Omit both to show every image side by side.
   */
  index?: number;
  onIndexChange?: (index: number) => void;
}

export default function Lightbox({
  images,
  onClose,
  alts,
  index,
  onIndexChange,
}: LightboxProps) {
  const open = !!images && images.length > 0;
  const gallery = open && typeof index === "number" && !!onIndexChange;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!gallery) return;
      const count = images!.length;
      if (e.key === "ArrowRight") onIndexChange!((index! + 1) % count);
      if (e.key === "ArrowLeft") onIndexChange!((index! - 1 + count) % count);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, gallery, index, images, onClose, onIndexChange]);

  const step = (delta: number) => {
    if (!gallery) return;
    const count = images!.length;
    onIndexChange!((index! + delta + count) % count);
  };

  const shown = gallery ? [images![index!]] : images ?? [];
  const altFor = (src: string) => {
    const i = images?.indexOf(src) ?? -1;
    return alts?.[i] ?? "Portfolio image";
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 cursor-pointer"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 z-10 p-2 text-3xl leading-none text-white/60 hover:text-[#d4a853] transition-colors"
          >
            &times;
          </button>

          {gallery && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-2 md:left-6 z-10 p-4 text-4xl leading-none text-white/60 hover:text-[#d4a853] transition-colors"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-2 md:right-6 z-10 p-4 text-4xl leading-none text-white/60 hover:text-[#d4a853] transition-colors"
              >
                &#8250;
              </button>
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tabular-nums text-white/50">
                {index! + 1} / {images!.length}
              </span>
            </>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`flex gap-6 items-center justify-center cursor-default ${
              shown.length === 1 ? "w-full max-w-4xl" : "w-full max-w-5xl"
            }`}
            style={{ height: "80vh" }}
          >
            {shown.map((src) => (
              <div key={src} className="relative h-full" style={{ flex: "1 1 0" }}>
                <Image
                  src={src}
                  alt={altFor(src)}
                  fill
                  className="object-contain"
                  sizes={shown.length === 1 ? "90vw" : "45vw"}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
