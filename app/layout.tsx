import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Sana Afshani | Front-End Developer",
  description:
    "Front-End Developer with 5+ years specializing in React.js and Next.js. Based in Tehran, Iran.",
  openGraph: {
    title: "Sana Afshani | Front-End Developer",
    description:
      "React & Next.js developer building scalable, high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-en">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
