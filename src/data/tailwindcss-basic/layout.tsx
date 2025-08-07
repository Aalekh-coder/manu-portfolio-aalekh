import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/container";

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
   <Container className="px-10 md:pt-20 md:pb-10 min-h-screen prose">{children}</Container>
  );
}
