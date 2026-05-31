import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejas Kalal — Full Stack Developer & DevOps Engineer",
  description:
    "Full Stack Developer specializing in MERN stack, DevOps, cloud infrastructure, and AI deployment systems. Building scalable, production-grade applications.",
  keywords: [
    "Tejas Kalal",
    "Full Stack Developer",
    "MERN Stack",
    "DevOps",
    "Kubernetes",
    "React",
    "Node.js",
    "AWS",
    "Terraform",
    "Maharashtra India",
  ],
  authors: [{ name: "Tejas Kalal" }],
  creator: "Tejas Kalal",
  openGraph: {
    title: "Tejas Kalal — Full Stack Developer & DevOps Engineer",
    description:
      "Full Stack Developer specializing in MERN stack, DevOps, cloud infrastructure, and AI deployment systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Kalal — Full Stack Developer",
    description:
      "MERN Stack · DevOps · Cloud · AI Deployment",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className={syne.className}>{children}</body>
    </html>
  );
}
