'use client';
import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Machine Learning Engineer',
    subtitle: 'Nartex Software',
    period: 'Aug 2023 – Present',
    description: `Led a RAG pipeline with Transformers and FAISS for legal document classification (93% accuracy).
    Built large-scale ETL pipelines with Airflow, CNNs for industrial QA, Dockerized models, deployed on Kubernetes, and implemented MLOps observability and automation using Prometheus, Optuna, and MLflow.`,
  },
  {
    title: 'Junior AI Researcher',
    subtitle: 'University of La Laguna',
    period: 'Nov 2022 – Jun 2023',
    description: `Co-authored a scientific paper on surrogate models for clinical decision support systems (T1DM).
    Built ML-based surrogate models achieving IoU > 0.9, reducing simulation time by 2700x while maintaining accuracy.`,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-background">
      <h2 className="text-3xl font-bold text-white text-center mb-10">About Me</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-1 bg-primary/30" />

        <div className="space-y-12 pl-12 relative z-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute left-[-26px] top-2 w-5 h-5 bg-primary rounded-full border-4 border-background" />
              <div className="bg-muted p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
