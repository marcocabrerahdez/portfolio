import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'app/posts');

export async function generateStaticParams() {
  return fs.readdirSync(POSTS_PATH).map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const filePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(source);

  const Content = (await import(`../../posts/${params.slug}.mdx`)).default;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-gray-400 text-sm mb-6">
        {new Date(data.date).toLocaleDateString('en-US', {
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

export default PostPage;
