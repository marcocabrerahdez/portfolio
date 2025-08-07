'use client';

import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDev,
} from 'react-icons/fa6';
import {
  SiGumroad,
  SiIndiehackers,
  SiDailydotdev,
} from 'react-icons/si';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="mb-6">
        <Image
          src="/profile.jpg"
          alt="Marco Cabrera"
          width={140}
          height={140}
          className="rounded-full border-4 border-primary shadow-lg"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Marco Cabrera
      </h1>

      <h2 className="text-md md:text-lg text-primary font-medium mb-2">
        AI Engineer from Tenerife 🇮🇨
      </h2>

      <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-6 leading-relaxed">
        ML Engineer specialized in production pipelines and MLOps.<br />
        Co-author of AI healthcare research published in Computer Methods and Programs in Biomedicine. Building systems from RAG to CNNs for defect detection.
      </p>

      <a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
      >
        See My Work
      </a>

      <div className="flex gap-5 mt-6 text-white text-2xl">
        <a href="https://github.com/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaLinkedin />
        </a>
        <a href="https://x.com/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaXTwitter />
        </a>
        <a href="https://marcocabrerahdez.gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiGumroad />
        </a>
        <a href="https://dev.to/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaDev />
        </a>
        <a href="https://app.daily.dev/marcocabrera" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiDailydotdev />
        </a>
        <a href="https://www.indiehackers.com/marcocabera" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiIndiehackers />
        </a>
      </div>
    </section>
  );
};

export default Hero;
