# Marco Cabrera – AI Engineer Portfolio

Welcome to my personal portfolio built with **Next.js 15** and **TypeScript**. This site showcases my work as a machine learning engineer, from production-ready AI projects to digital products and technical writing. It also includes a short timeline of my professional experience.

## Features

- **Hero section** – Introduces me as “AI Engineer from Tenerife” with a brief bio and links to my profiles on GitHub, LinkedIn, X (Twitter), Dev.to, Gumroad, Indie Hackers and Dailydotdev.
- **Featured projects** – Highlights two recent projects:
  - **RAG Pipeline for Legal Docs**: Retrieval-augmented generation system using FAISS & Hugging Face Transformers (93% accuracy).  
  - **Surrogate Models for T1DM**: Co-authored peer-reviewed paper on ML surrogate models for clinical decision support in type 1 diabetes mellitus.  
  Each card lists the tech stack and links to the GitHub repo or DOI.
- **Digital products** – Two Gumroad guides on creating & selling AI-powered digital products, each with title, description, thumbnail and call-to-action link.
- **Blog feed** – Shows the latest posts from `app/posts/`, written in [MDX](https://mdxjs.com) with front-matter metadata (title, date, summary, slug). A listing page and dynamic routes render individual articles with syntax highlighting and markdown extras (tables, GFM, etc.).
- **About timeline** – Summarizes my recent roles:
  - **Machine Learning Engineer, Nartex Software** (Aug 2023 – Present): Built RAG pipelines, ETL workflows with Airflow, industrial QA CNNs, Dockerized/Kubernetes deployments, MLOps observability (Prometheus, Optuna, MLflow).  
  - **Junior AI Researcher, University of La Laguna** (Nov 2022 – Jun 2023): Developed surrogate ML models (IoU > 0.9, 2700× speed-up) for clinical decision support in T1DM.
- **Animations & styling** – Powered by [Framer Motion](https://www.framer.com/motion/), styled with [Tailwind CSS](https://tailwindcss.com) and using [highlight.js](https://highlightjs.org/) for code highlighting.
- **MDX support** – Configured via `@next/mdx`, `remark-gfm`, `remark-frontmatter`, `remark-mdx-frontmatter` & `rehype-highlight` for rich markdown and metadata extraction.

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repo**  
   ```bash
   git clone https://github.com/marcocabrerahdez/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the dev server**  
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Build & start for production**  
   ```bash
   npm run build
   npm run start
   ```

5. **Lint & format**  
   ```bash
   npm run lint
   # optionally
   npx prettier --write .
   ```

## Deployment

Deploy instantly on [Vercel](https://vercel.com) by linking your GitHub repo—no extra configuration needed.

## Contributing

Contributions are welcome! Please open an issue or a pull request. For major changes, open an issue first to discuss your idea.
