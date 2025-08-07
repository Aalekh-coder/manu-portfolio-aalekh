"use client";
import React, { useState } from "react";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";
// import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { motion, useMotionValueEvent, useScroll} from "framer-motion";


const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full p-2 px-4 py-3 dark:bg-neutral-900"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src={"/avatar.png"}
          height={"100"}
          width={"100"}
          alt="avator"
        />

        <div className="flex items-center">
          {navItems?.map((navItem, idx) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={navItem?.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="dark:hover absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{navItem?.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
