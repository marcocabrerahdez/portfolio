'use client';

import Image from 'next/image';
import Link from 'next/link';
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

      <Link
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
      >
        See My Work
      </Link>

      <div className="flex gap-5 mt-6 text-white text-2xl">
        <Link href="https://github.com/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaGithub />
        </Link>
        <Link href="https://linkedin.com/in/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaLinkedin />
        </Link>
        <Link href="https://x.com/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaXTwitter />
        </Link>
        <Link href="https://marcocabrerahdez.gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiGumroad />
        </Link>
        <Link href="https://dev.to/marcocabrerahdez" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <FaDev />
        </Link>
        <Link href="https://app.daily.dev/marcocabrera" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiDailydotdev />
        </Link>
        <Link href="https://www.indiehackers.com/marcocabera" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
          <SiIndiehackers />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
