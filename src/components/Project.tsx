"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      src: "/projects/brainwave-CVFZ1BNq.png",
      description:
        "Built with Next.js 13, Tailwind CSS and Framer Motion animations",
      href: "https://portfolio.example.com",
    },
    {
      title: "Twitter Clone",
      src: "/projects/ecom-aZM7a1qg.png",
      description:
        "Full-stack Twitter clone with real-time updates using Socket.io",
      href: "https://twitter-clone.example.com",
    },
    {
      title: "AI Image Generator",
      src: "/projects/gta-BXRM9PM4.png",
      description:
        "DALL-E powered image generation app with Next.js and OpenAI API",
      href: "https://ai-image.example.com",
    },
    {
      title: "E-Commerce Dashboard",
      src: "/projects/mendum-CK2FYIsY.png",
      description:
        "Admin dashboard with authentication, charts and CMS functionality",
      href: "https://dashboard.example.com",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of lives
      </p>

      <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
        {projects.map(({ title, src, description,href }, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-0 h-72"
            key={idx}
          >
            <Link href={href}>
              <Image
                src={src}
                alt={title}
                height={500}
                width={500}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="div">
                <h2 className=" mt-2 z-20 font-bold tracking-tight text-neutral-500 dark:text-neutral-400">
                  {title}
                </h2>
                <p className="max-w-xs text-sm mt-2 text-neutral-500 dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
