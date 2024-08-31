// @flow strict

import GlowCard from '../helper/glow-card';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../utils/constants';

function Projects() {
  return (
    <section className="w-full py-4 md:py-6 lg:py-8 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[900px] text-gray-400 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Check out some of my latest and greatest projects that showcase my skills and expertise.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <GlowCard key={project.id} identifier={project.id}>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-4 text-justify text-gray-400">{project.description}</p>
                </div>
                <Image src={project.imageSrc} alt={project.imageAlt} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" width={550} height={310} />
                <div className="mt-4 text-center">
                  <Link href={project.linkHref} className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                    View Project
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
