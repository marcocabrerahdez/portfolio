import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const POSTS_PATH = path.join(process.cwd(), 'app/posts');

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export default function BlogIndex() {
  const files = fs.readdirSync(POSTS_PATH);

  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const content = fs.readFileSync(path.join(POSTS_PATH, file), 'utf8');
    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      date:
        typeof data.date === 'string'
          ? data.date
          : new Date(data.date).toISOString(),
      summary: data.summary,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-white">Blog</h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug} className="bg-muted p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white mb-1">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-300">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-sm text-primary hover:underline"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
