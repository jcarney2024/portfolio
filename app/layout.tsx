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
  openGraph: {
    title: "Jack Carney | Graphic Designer & Web Developer",
    description: "Portfolio of Jack Carney - graphic design and web development",
    images: [{ url: "/images/headshot.jpg", width: 1080, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Carney | Graphic Designer & Web Developer",
    description: "Portfolio of Jack Carney - graphic design and web development",
    images: ["/images/headshot.jpg"],
  },
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
