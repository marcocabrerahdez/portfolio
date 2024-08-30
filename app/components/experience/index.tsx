// @flow strict

import GlowCard from '../helper/glow-card';
import Link from 'next/link';
import Image from 'next/image';

function Experience() {
  return (
    <section className="w-full py-4 md:py-8 lg:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Check out some of my latest and greatest projects that showcase my skills and expertise.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <GlowCard identifier="diabetes">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Enhancing decisions with surrogate models</h3>
                <p className="text-justify">Computerized clinical decision support systems (CDSS) that integrate the latest scientific evidence are crucial for improving patient care quality. This case study on Type 1 Diabetes Mellitus (T1DM) demonstrates the development of machine learning (ML) based surrogate models derived from health technology assessment models. These surrogate models replace complex simulation models, enabling real-time applications and simulation-in-the-loop optimization. The study details the creation of datasets for training and testing and compares various ML techniques. With an Intersection over Union (IoU) score above 0.9, these surrogate models provide a faster alternative for integration into CDSS.</p>
              </div>

              <Image src="/diabetes.webp" alt="Project 1" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" width={550} height={310} />
              <div className="mt-4 text-center">
                <Link href="https://github.com/marcocabrerahdez/TFG" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                  View Project
                </Link>
              </div>
            </div>
          </GlowCard>
          <GlowCard identifier="ftp-server">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold">FTP Server build on C++</h3>
                <p className="text-justify">This project involves developing a File Transfer Protocol (FTP) server using C++. It focuses on creating a robust and efficient system for transferring files between clients and servers. Key features include handling multiple connections, implementing standard FTP commands such as 'get' and 'put,' and ensuring secure data transfer. The project emphasizes the use of C++ for its performance and reliability in managing network operations. The resulting FTP server is designed to be both powerful and user-friendly, with a clean and modern architecture that ensures high performance and ease of use in various applications.</p>
              </div>
              <Image src="/ftp-server.webp" alt="Project 2" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" width={550} height={310} />
              <div className="mt-4 text-center">
                <Link href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
                  View Project
                </Link>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

export default Experience;
