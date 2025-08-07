'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'RAG Pipeline for Legal Docs',
    description:
      'Implemented a Retrieval-Augmented Generation system using FAISS and Hugging Face to classify legal documents with 93% accuracy.',
    tags: ['Python', 'Transformers', 'FAISS'],
    link: 'https://github.com/marcocabrerahdez',
  },
  {
    title: 'Scientific Publication: Surrogate Models for T1DM',
    description:
      'Co-authored a peer-reviewed paper on replacing complex HTA models with surrogate machine learning models for clinical decision support in type 1 diabetes mellitus.',
    tags: ['Research', 'ML', 'Healthcare AI'],
    link: 'https://doi.org/10.1016/j.cmpb.2025.108646',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-background">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-[#1e1e2f] rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-700 text-sm px-2 py-1 rounded text-white">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="text-primary hover:underline text-sm font-medium"
              >
                View project →
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
