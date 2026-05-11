import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana Afshani | Front-End Developer",
  description:
    "Experienced Front-End Developer with 4+ years specializing in React.js and Next.js. Based in Tehran.",
  openGraph: {
    title: "Sana Afshani | Front-End Developer",
    description: "React & Next.js developer building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
