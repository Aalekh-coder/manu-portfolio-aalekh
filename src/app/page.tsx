import Container from "@/components/container";

const Home = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 pt-10 ">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there!
        </h1>
        <p className="text-secondary py-4 text-sm md:text-sm ">
          I&apos;m a software enginner with a passion for building scalable and
          efficient systems. I&apos;m currently working as software enginner at
          Google.
        </p>
      </Container>
    </div>
  );
};

export default Home;
