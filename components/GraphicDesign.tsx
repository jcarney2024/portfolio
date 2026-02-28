"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11].map(
  (n) => `/images/ymunk/${n}.png`
);

const merchItems = [
  {
    thumb: "/images/merch/IMG_4657.png",
    alt: "YMUNE XV crewneck",
    lightbox: ["/images/merch/IMG_4657.png", "/images/merch/IMG_2889.png"],
  },
  {
    thumb: "/images/merch/IMG_3525.png",
    alt: "YMUNE XV tee — I Love Roma",
    lightbox: ["/images/merch/IMG_3525.png"],
  },
  {
    thumb: "/images/merch/IMG_9256.png",
    alt: "YMUNE XV sweatpants",
    lightbox: ["/images/merch/IMG_9256.png"],
  },
];

export default function GraphicDesign() {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);

  return (
    <section id="design" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2">Design</h2>
        <p className="text-[#a0a0a0] mb-12">
          YMUNK XIV — Yale Model United Nations Korea
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImages([src])}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`YMUNK design ${i + 1}`}
                width={600}
                height={800}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* YMUNE XV Merchandise */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold mb-2">Merchandise</h3>
        <p className="text-[#a0a0a0] mb-8">
          YMUN Europe XV — Apparel Design
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {merchItems.map((item, i) => (
          <motion.div
            key={item.thumb}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImages(item.lightbox)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#141414]">
              <Image
                src={item.thumb}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* YMUN Europe XV Video */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold mb-2">Video</h3>
        <p className="text-[#a0a0a0] mb-8">
          YMUN Europe XV — 5-Minute Montage
        </p>
        <div className="relative w-full overflow-hidden rounded-xl border border-white/10" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/eqy-SQDzLhE?si=ugrMJ4vhhfMl5qAI"
            title="YMUN Europe XV Montage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </motion.div>

      <Lightbox images={lightboxImages} onClose={() => setLightboxImages(null)} />
    </section>
  );
}
