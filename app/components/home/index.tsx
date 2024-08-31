// @flow strict
import Image from 'next/image';
import ContactLinks from '../helper/contact-links';

function Home() {
  return (
    <section className="w-full py-4 md:py-8 lg:py-16">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">Hi, I&apos;m Marco Cabrera</h1>
            <p className="max-w-[800px] text-gray-400 md:text-lg">I&apos;m a versatile Software Engineer with expertise in Java, Python, React, and Go, recognized for significantly enhancing project delivery efficiency. A fast learner with a proven ability to modernize systems and lead technology solutions to successful outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row text-foreground">
            <ContactLinks />
          </div>
        </div>

        <Image src="/profile.jpg" alt="Marco Cabrera Hernández" className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full lg:order-last" width={250} height={50} />
      </div>
    </section>
  );
}

export default Home;
