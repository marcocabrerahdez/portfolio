'use client';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Marco Cabrera
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6 leading-relaxed">
        AI Engineer from Tenerife, working on intelligent systems for the Spanish public sector.
        <br />
        My background includes backend development with Java and Spring Boot, and my focus now is on MLOps pipelines, generative AI, and legal document automation using LLMs.
      </p>
      <a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;
