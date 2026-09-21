"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

const ymunkImages = [1, 2, 3, 4, 6, 7, 8, 10, 11].map(
  (n) => `/images/ymunk/${n}.png`,
);

const ymuneImages = [
  {
    thumb: "/images/ymune/logo.png",
    alt: "YMUNE XV logo",
    lightbox: ["/images/ymune/logo.png"],
    bg: "bg-white",
  },
  {
    thumb: "/images/ymune/sec-announce.png",
    alt: "Secretary General announcement",
    lightbox: ["/images/ymune/sec-announce.png"],
  },
  {
    thumb: "/images/ymune/branding-announce.png",
    alt: "Branding team announcement",
    lightbox: ["/images/ymune/branding-announce.png"],
  },
  {
    thumb: "/images/ymune/secretariat-badge.png",
    alt: "Secretariat badge",
    lightbox: ["/images/ymune/secretariat-badge.png"],
  },
  {
    thumb: "/images/ymune/ad-nametag.png",
    alt: "Assistant Director nametag",
    lightbox: ["/images/ymune/ad-nametag.png"],
  },
  {
    thumb: "/images/ymune/topic-guide-cover.png",
    alt: "Star Wars Topic Guide cover",
    lightbox: ["/images/ymune/topic-guide-cover.png"],
  },
  {
    thumb: "/images/ymune/speech-competition.png",
    alt: "Speech Conference Initiative poster",
    lightbox: ["/images/ymune/speech-competition.png"],
  },
  {
    thumb: "/images/ymune/placards.png",
    alt: "Conference placards",
    lightbox: ["/images/ymune/placards.png"],
  },
];

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

const dfaImages = [
  {
    thumb: "/images/dfa/y-design.png",
    alt: "Design for America at Yale group photo",
    lightbox: ["/images/dfa/y-design.png"],
  },
  {
    thumb: "/images/dfa/kickoff-slides.png",
    alt: "DFA Kickoff Meeting slides",
    lightbox: [
      "/images/dfa/kickoff-slides.png",
      "/images/dfa/design-workshop.png",
    ],
  },
  {
    thumb: "/images/dfa/autodesk.png",
    alt: "Autodesk Info Session flyer",
    lightbox: ["/images/dfa/autodesk.png", "/images/dfa/autodesk-info.png"],
  },
  {
    thumb: "/images/dfa/fusion-workshop.png",
    alt: "Autodesk Fusion Workshop flyer",
    lightbox: ["/images/dfa/fusion-workshop.png"],
  },
  {
    thumb: "/images/dfa/fig-fries.png",
    alt: "Fig & Fries — Figma Workshop",
    lightbox: ["/images/dfa/fig-fries.png"],
  },
  {
    thumb: "/images/dfa/final-showcase.png",
    alt: "Final Showcase Invitation illustration",
    lightbox: ["/images/dfa/final-showcase.png"],
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
        <h2 className="text-4xl font-bold mb-12">Design</h2>
      </motion.div>

      {/* YMUN Australia spotlight */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#11130f] p-5 sm:p-8 md:p-10 lg:p-12"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#f3d555]/10 blur-3xl"
        />

        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8cc58]"></p>
            <h3 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              YMUN Australia
            </h3>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#c1c1bb] text-pretty md:pb-1">
            Announcement graphics for YMUNA&apos;s inaugural conference in
            Sydney, Australia.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-5 md:grid-cols-[2fr_1fr] md:gap-6">
          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.25 }}
            className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8cc58] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11130f]"
            onClick={() =>
              setLightboxImages([
                "/images/ymuna/ymun-australia-primary.png",
                "/images/ymuna/ymun-australia.png",
              ])
            }
            aria-label="View preferred YMUN Australia announcement concept full screen"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#20231c] shadow-2xl shadow-black/40">
              <Image
                src="/images/ymuna/ymun-australia-primary.png"
                alt="YMUN Australia announcement featuring a cable car over the Blue Mountains"
                width={1080}
                height={1440}
                priority
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>
            <span className="mt-3 block text-xs font-medium tracking-wide text-[#b9bba4]"></span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.25 }}
            className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8cc58] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11130f]"
            onClick={() =>
              setLightboxImages([
                "/images/ymuna/ymun-australia.png",
                "/images/ymuna/ymun-australia-primary.png",
              ])
            }
            aria-label="View alternate YMUN Australia announcement concept full screen"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#20231c] shadow-xl shadow-black/30">
              <Image
                src="/images/ymuna/ymun-australia.png"
                alt="Alternate YMUN Australia announcement featuring Sydney Harbour"
                width={1080}
                height={1440}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>
            <span className="mt-3 block text-xs tracking-wide text-[#777a72] transition-colors group-hover:text-[#b9bba4]"></span>
          </motion.button>
        </div>
      </motion.article>

      {/* YMUNK XIV */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold mb-2">YMUNK XIV</h3>
        <p className="text-[#a0a0a0] mb-8">Yale Model United Nations Korea</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ymunkImages.map((src, i) => (
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

      {/* YMUNE XV Branding & Print */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold mb-2">Branding & Print</h3>
        <p className="text-[#a0a0a0] mb-8">
          YMUN Europe XV: Logo, Announcements, Badges & Conference Materials
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ymuneImages.map((item, i) => (
          <motion.div
            key={item.thumb}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImages(item.lightbox)}
          >
            <div
              className={`relative aspect-square overflow-hidden rounded-lg ${item.bg || "bg-[#141414]"}`}
            >
              <Image
                src={item.thumb}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
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
        <p className="text-[#a0a0a0] mb-8">YMUN Europe XV: Apparel Design</p>
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
        <p className="text-[#a0a0a0] mb-8">YMUN Europe XV: 5-Minute Montage</p>
        <div
          className="relative w-full overflow-hidden rounded-xl border border-white/10"
          style={{ paddingBottom: "56.25%" }}
        >
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

      {/* DFA Yale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold mb-2">Design for America at Yale</h3>
        <p className="text-[#a0a0a0] mb-8">Event Flyers, Slides & Branding</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dfaImages.map((item, i) => (
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

      <Lightbox
        images={lightboxImages}
        onClose={() => setLightboxImages(null)}
      />
    </section>
  );
}
