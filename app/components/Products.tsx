'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'AI Digital Products Guide',
    description:
      'Step-by-step guide to create and sell digital products using AI. Includes a 7-day plan, prompts, templates and lifetime updates.',
    link: 'https://marcocabrerahdez.gumroad.com/l/ai-digital-products-guide',
    image: '/ai-guide.webp',
  },
  {
    title: 'Mini Guide: Sell Digital Products with AI',
    description:
      'Quick and practical ebook on how to launch your first AI-powered digital product in under 7 days. Ideal for creators and indie hackers.',
    link: 'https://marcocabrerahdez.gumroad.com/l/hycce',
    image: '/mini-guide.webp', // 👉 deberás subir este archivo tú
  },
];

const Products = () => {
  return (
    <section className="py-16 px-6 bg-muted" id="products">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Products</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-[#1e1e2f] rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={300}
              className="rounded-lg mb-4 object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              Get it →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
