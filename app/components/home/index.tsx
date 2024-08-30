// @flow strict
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <section className="w-full py-4 md:py-8 lg:py-16">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Hi, I&apos;m Marco Cabrera</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I&apos;m a versatile Software Engineer with expertise in Java, Python, React, and Go, recognized for significantly enhancing project delivery efficiency. A fast learner with a proven ability to modernize systems and lead technology solutions to successful outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
              My projects
            </Link>
            <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
              Contact Me
            </Link>
          </div>
        </div>

        <Image src="/profile.jpg" alt="Marco Cabrera Hernández" className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" width={550} height={550} />
      </div>
    </section>
  );
}

export default Home;
