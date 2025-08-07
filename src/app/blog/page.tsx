import Container from "@/components/container";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata={
    title:"All blog - Aalekh",
    description:"all blog"
}

const Blog = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a software engineer with a passion for building scalable and
          effecient systems. I'm currently working as software engineer a
          acternity
        </p>
      </Container>
    </div>
  );
};

export default Blog;
