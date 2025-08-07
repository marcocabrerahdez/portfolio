import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const POSTS_PATH = path.join(process.cwd(), 'app/posts');

export function generateStaticParams(): Array<{ slug: string }> {
  const files = fs.readdirSync(POSTS_PATH);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(source);

  const Content = (await import(`../../posts/${slug}.mdx`)).default;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">{data.title}</h1>
      <p className="text-gray-400 text-sm mb-6">
        {typeof data.date === 'string'
          ? data.date
          : new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
      </p>
      <div className="prose prose-invert max-w-none">
        <Content />
      </div>
    </article>
  );
}
