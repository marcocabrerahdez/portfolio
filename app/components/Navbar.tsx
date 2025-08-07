'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-[#1f1f2e]">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-primary">Marco Cabrera</Link>
        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <a href="/#projects" className="hover:text-white transition">Projects</a>
          </li>
          <li>
            <a href="/#products" className="hover:text-white transition">Products</a>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
