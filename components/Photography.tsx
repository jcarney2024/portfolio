"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const portrait = (src: string, alt: string): Photo => ({
  src: `/images/photos/${src}.jpg`,
  alt,
  width: 1600,
  height: 2400,
});

const landscape = (src: string, alt: string): Photo => ({
  src: `/images/photos/${src}.jpg`,
  alt,
  width: 2400,
  height: 1600,
});

// Ordered so each masonry column gets three portraits and one landscape,
// which keeps the three columns close to equal height.
const photos: Photo[] = [
  portrait(
    "dscf0037",
    "A stucco Italianate house with a columned portico, framed by bare branches above fresh snow"
  ),
  portrait(
    "dscf0045",
    "The gable and dormer of a pale green Victorian house against a clear winter sky, crossed by power lines"
  ),
  landscape(
    "dscf0223",
    "A New England town green in winter, clapboard and brick buildings under a flat overcast sky"
  ),
  portrait(
    "dscf0047",
    "White curtains blowing from a porch column beside an empty hanging planter"
  ),
  portrait(
    "dscf0050",
    "A teal Victorian house with a rounded turret and bay window, its panes reflecting bare trees"
  ),
  portrait(
    "dscf0046",
    "Dark wooden double doors hung with holiday wreaths, lit by a lantern on a white porch"
  ),
  landscape(
    "dscf0254",
    "A lone figure walking a wide, empty street past a red brick building toward a distant dome"
  ),
  portrait(
    "dscf0044",
    "A green utility pole layered with flyers, stickers, and a crossing-signal placard beside a snowy road"
  ),
  portrait(
    "dscf0038",
    "Pedestrians and a small child waiting to cross the street outside the Yale Peabody Museum"
  ),
  portrait(
    "dscf0054",
    "A weathered DO NOT ENTER sign standing above a row of cars parked along a snowy street"
  ),
  landscape(
    "dscf0059",
    "Glass Coca-Cola and Sprite bottles packed upright in a cooler of ice"
  ),
  portrait(
    "dscf0067",
    "A bamboo grove pressing against an iron fence, with a figure walking the sidewalk beyond"
  ),
];

const sources = photos.map((p) => p.src);
const alts = photos.map((p) => p.alt);

export default function Photography() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="photos" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12">Photography</h2>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            // Stagger by row rather than by array index — CSS columns fill
            // top-to-bottom, so i % 4 approximates vertical position.
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="mb-4 break-inside-avoid cursor-pointer group"
            onClick={() => setIndex(i)}
          >
            <div className="relative overflow-hidden rounded-lg bg-[#141414]">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        images={index !== null ? sources : null}
        alts={alts}
        index={index ?? undefined}
        onIndexChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}
