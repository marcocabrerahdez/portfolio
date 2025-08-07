'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    slug: 'rag-pipeline',
    title: 'How I Built an RAG Pipeline with Transformers',
    date: '2025-08-01',
    summary: 'Building a document QA system using FAISS + Transformers with 93% accuracy.',
  },
  {
    slug: 'ai-product-launch',
    title: 'Launching My First AI Product on Gumroad',
    date: '2025-08-05',
    summary: 'How I built and launched my first AI product in just 7 days.',
  },
];

export default function Feed() {
  return (
    <section className="py-16 px-6 bg-background" id="blog">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Latest Posts</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-muted rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-300 mb-4">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary hover:underline font-medium text-sm"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
