import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aalekh Portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microinteractions, perfact for developer and designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
