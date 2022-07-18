import Card from '@/components/Card';
import { Animate } from '@/components/Animate';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Animate
        as="h1"
        animation={{
          opacity: [0, 1],
          scale: [0.75, 1],
        }}
      >
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.projects.map(({ slug, title, shortDescription, banner, repository, stack }) => (
              <Card
                key={slug}
                title={title}
                description={shortDescription}
                banner={banner}
                href={repository}
                stack={stack}
              />
            ))}
          </div>
        </div>
      </Animate>
    </>
  );
}