import React from 'react';
import GlowCard from '../helper/glow-card';
import { education } from '@/utils/constants';
import Image from 'next/image';

const Education = () => {
  return (
    <section className="w-full py-8 bg-muted relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl mb-6">Education, Certifications & Courses</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {education.map((education) => (
            <GlowCard key={education.id} identifier={`education-${education.id}`}>
              <div className="flex items-center p-6 space-x-4">
                {/* Left column with logo */}
                <div className="w-24 h-24">
                  <Image
                    src={education.logoSrc}
                    alt={education.logoAlt}
                    className="rounded-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                {/* Right column with degree and institution */}
                <div>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-gray-400">{education.institution}</p>
                  <p className="text-sm text-gray-500">{education.year}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
