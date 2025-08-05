import Image from "next/image";
import React from "react";

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
        I love building web apps and products that can impact millions of lives.
      </p>
      {projects?.map((project, idx) => (
        <div key={idx} className="py-4 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Image src={project?.src} alt={project.title} height={500} width={500} className="aspect-square rounded-3xl" />
        </div>
      ))}
    </div>
  );
};

export default Project;
