# Jack Carney Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dark, minimal single-page portfolio showcasing graphic design (YMUNK XIV) and web development projects using Next.js.

**Architecture:** Single-page Next.js 14 App Router site with smooth-scroll sections: Hero, Graphic Design gallery, Web Projects with browser mockup frames, About/Resume, and Footer. Fully static with no backend. Framer Motion for scroll animations.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Inter font (Google Fonts)

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`, `postcss.config.mjs`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Create Next.js app with Tailwind**

Run:
```bash
cd /Users/jcarney/Desktop/jacks_portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```
Accept defaults. This scaffolds the project.

**Step 2: Install Framer Motion**

Run:
```bash
cd /Users/jcarney/Desktop/jacks_portfolio
npm install framer-motion
```

**Step 3: Copy assets into public/**

```bash
mkdir -p public/images/ymunk public/images/projects
cp /Users/jcarney/Downloads/ymunk/*.png public/images/ymunk/
cp "/Users/jcarney/Library/CloudStorage/OneDrive-YaleUniversity/Jack's Resume-02182026.pdf" public/resume.pdf
```

**Step 4: Set up globals.css with dark theme base**

Replace `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --foreground-muted: #a0a0a0;
  --accent: #d4a853;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), system-ui, sans-serif;
}
```

**Step 5: Set up layout.tsx with Inter font**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jack Carney | Graphic Designer & Web Developer",
  description: "Portfolio of Jack Carney - graphic design and web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Step 6: Verify dev server starts**

Run: `cd /Users/jcarney/Desktop/jacks_portfolio && npm run dev`
Expected: Server starts on localhost:3000

**Step 7: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, Framer Motion, and assets"
```

---

### Task 2: Build Navbar Component

**Files:**
- Create: `components/Navbar.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Navbar component**

Create `components/Navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Design", href: "#design" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Jack Carney
        </a>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#a0a0a0] hover:text-[#d4a853] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Add Navbar to page.tsx**

Replace `app/page.tsx` with a shell that imports Navbar:

```tsx
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 text-center">Portfolio sections go here</div>
    </main>
  );
}
```

**Step 3: Verify navbar renders and scroll effect works**

Run dev server, check localhost:3000. Navbar should be transparent, then gain background on scroll.

**Step 4: Commit**

```bash
git add components/Navbar.tsx app/page.tsx
git commit -m "feat: add fixed navbar with scroll-aware background"
```

---

### Task 3: Build Hero Section

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Hero component**

Create `components/Hero.tsx`:

```tsx
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
```

**Step 2: Add Hero to page.tsx**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

**Step 3: Verify hero renders with fade-in animation**

**Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add hero section with fade-in animation"
```

---

### Task 4: Build Graphic Design Gallery

**Files:**
- Create: `components/GraphicDesign.tsx`
- Create: `components/Lightbox.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Lightbox component**

Create `components/Lightbox.tsx`:

```tsx
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
```

**Step 2: Create GraphicDesign component**

Create `components/GraphicDesign.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11].map(
  (n) => `/images/ymunk/${n}.png`
);

export default function GraphicDesign() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setLightboxSrc(src)}
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

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  );
}
```

**Step 3: Add GraphicDesign to page.tsx**

**Step 4: Verify gallery renders with masonry layout, hover effects, and lightbox**

**Step 5: Commit**

```bash
git add components/GraphicDesign.tsx components/Lightbox.tsx app/page.tsx
git commit -m "feat: add graphic design gallery with masonry layout and lightbox"
```

---

### Task 5: Build Browser Frame + Web Projects Section

**Files:**
- Create: `components/BrowserFrame.tsx`
- Create: `components/WebProjects.tsx`
- Modify: `app/page.tsx`

**Step 1: Capture screenshots of all 4 sites**

Use Playwright to navigate to each site and take a screenshot, saving to `public/images/projects/`.

**Step 2: Create BrowserFrame component**

Create `components/BrowserFrame.tsx`:

```tsx
import Image from "next/image";

interface BrowserFrameProps {
  url: string;
  screenshot: string;
  title: string;
  description: string;
}

export default function BrowserFrame({
  url,
  screenshot,
  title,
  description,
}: BrowserFrameProps) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 group-hover:border-[#d4a853]/40 group-hover:shadow-lg group-hover:shadow-[#d4a853]/5">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-xs text-[#a0a0a0] truncate">
            {url}
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={screenshot}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold group-hover:text-[#d4a853] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#a0a0a0] mt-1">{description}</p>
      </div>
    </a>
  );
}
```

**Step 3: Create WebProjects component**

Create `components/WebProjects.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

const projects = [
  {
    url: "dfayale.org",
    screenshot: "/images/projects/dfayale.png",
    title: "DFA Yale",
    description: "Website for Design for America at Yale University",
  },
  {
    url: "beta.havenfreeclinic.com",
    screenshot: "/images/projects/haven-beta.png",
    title: "Haven Free Clinic (Beta)",
    description: "Redesigned website for Haven Free Clinic",
  },
  {
    url: "hub.havenfreeclinic.com",
    screenshot: "/images/projects/haven-hub.png",
    title: "Haven Free Clinic Hub",
    description: "Internal hub for Haven Free Clinic operations",
  },
  {
    url: "updatemyinfo.havenfreeclinic.com",
    screenshot: "/images/projects/haven-update.png",
    title: "Haven Info Portal",
    description: "Patient information update portal for Haven Free Clinic",
  },
];

export default function WebProjects() {
  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2">Work</h2>
        <p className="text-[#a0a0a0] mb-12">Web development projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <BrowserFrame {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

**Step 4: Add WebProjects to page.tsx**

**Step 5: Verify browser frames render with screenshots and hover effects**

**Step 6: Commit**

```bash
git add components/BrowserFrame.tsx components/WebProjects.tsx public/images/projects/ app/page.tsx
git commit -m "feat: add web projects section with browser mockup frames"
```

---

### Task 6: Build About / Resume Section

**Files:**
- Create: `components/About.tsx`
- Modify: `app/page.tsx`

**Step 1: Create About component**

Create `components/About.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold">About</h2>
        <p className="text-lg text-[#a0a0a0] leading-relaxed">
          I'm Jack Carney — a graphic designer and web developer passionate
          about creating compelling visual experiences and functional digital
          products. From event branding to full-stack web applications, I bring
          a detail-oriented approach to every project.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#e0b960] transition-colors"
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
```

**Step 2: Add About to page.tsx**

**Step 3: Verify about section and resume download link**

**Step 4: Commit**

```bash
git add components/About.tsx app/page.tsx
git commit -m "feat: add about section with resume download"
```

---

### Task 7: Build Footer

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Footer component**

Create `components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <p className="text-[#a0a0a0]">Let's connect</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/jackcarney2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#d4a853] transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/jcarney2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#d4a853] transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p className="text-sm text-[#a0a0a0]/50">
          &copy; {new Date().getFullYear()} Jack Carney
        </p>
      </div>
    </footer>
  );
}
```

**Step 2: Add Footer to page.tsx and assemble final page**

Final `app/page.tsx`:

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GraphicDesign from "@/components/GraphicDesign";
import WebProjects from "@/components/WebProjects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GraphicDesign />
      <WebProjects />
      <About />
      <Footer />
    </main>
  );
}
```

**Step 3: Verify full page renders with all sections**

**Step 4: Commit**

```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: add footer and assemble complete single-page portfolio"
```

---

### Task 8: Capture Site Screenshots

**Files:**
- Create: `public/images/projects/dfayale.png`
- Create: `public/images/projects/haven-beta.png`
- Create: `public/images/projects/haven-hub.png`
- Create: `public/images/projects/haven-update.png`

**Step 1: Use Playwright to capture screenshots of all 4 web projects**

Navigate to each URL and take a viewport screenshot, saving to `public/images/projects/`.

**Step 2: Verify screenshots exist and look correct**

**Step 3: Commit**

```bash
git add public/images/projects/
git commit -m "feat: add web project screenshots"
```

---

### Task 9: Polish + Responsive

**Files:**
- Modify: `components/Navbar.tsx` (mobile hamburger menu)
- Modify: various components for responsive tweaks
- Modify: `app/globals.css` if needed

**Step 1: Add mobile menu toggle to Navbar**

Add hamburger button visible on small screens, slide-out menu for nav links.

**Step 2: Test all breakpoints (mobile, tablet, desktop)**

**Step 3: Fix any spacing/layout issues on small screens**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add responsive mobile menu and polish"
```

---

### Task 10: Final Verification

**Step 1: Run production build**

```bash
npm run build
```
Expected: No errors.

**Step 2: Run production server and verify**

```bash
npm run start
```
Check all sections, links, lightbox, resume download, responsive behavior.

**Step 3: Final commit if any fixes needed**
