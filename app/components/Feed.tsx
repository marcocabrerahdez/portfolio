// app/components/Feed.tsx

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
}

export default function Feed() {
  const POSTS_PATH = path.join(process.cwd(), 'app/posts')

  const files = fs.readdirSync(POSTS_PATH).filter((f) => f.endsWith('.mdx'))

  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const source = fs.readFileSync(path.join(POSTS_PATH, file), 'utf8')
    const { data } = matter(source)
    return {
      slug,
      title: data.title as string,
      date: typeof data.date === 'string' ? data.date : data.date.toISOString(),
      summary: data.summary as string,
    }
  })

  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  return (
    <section className="py-16 px-6 bg-background" id="blog">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Latest Posts
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {latestPosts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-muted rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {post.title}
            </h3>
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
          </div>
        ))}
      </div>
    </section>
  )
}
