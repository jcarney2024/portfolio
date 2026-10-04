import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jack Carney | Software Engineer \u00b7 Yale \u201928",
  description:
    "Jack Carney builds software for healthcare and community organizations, including HAVEN Hub, the volunteer platform for HAVEN Free Clinic. CS & Economics at Yale.",
  openGraph: {
    title: "Jack Carney | Software Engineer \u00b7 Yale \u201928",
    description:
      "Jack Carney builds software for healthcare and community organizations, including HAVEN Hub, the volunteer platform for HAVEN Free Clinic. CS & Economics at Yale.",
    images: [{ url: "/images/headshot.jpg", width: 1080, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Carney | Software Engineer \u00b7 Yale \u201928",
    description:
      "Jack Carney builds software for healthcare and community organizations, including HAVEN Hub, the volunteer platform for HAVEN Free Clinic. CS & Economics at Yale.",
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
