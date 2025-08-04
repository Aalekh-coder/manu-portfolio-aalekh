import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className}  antialiased bg-neutral-100 dark:bg-neutral-700`}>{children}</body>
    </html>
  );
}
