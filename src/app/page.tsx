import Container from "@/components/container";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-start justify-start ">
      <Container className="min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Hello, there!</h1>
        <p>
          I'm a software enginner with a passion for building scalable and
          efficient systems. I'm currently working as software enginner at
          Google.
        </p>
      </Container>
    </div>
  );
};

export default Home;
