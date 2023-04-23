import { memo } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const { frontMatter } = props;

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
        Hi, I am {frontMatter.shortname}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl'>
        {frontMatter.occupation}
      </p>
      <p className='font-light lg:text-xl'>
        I am a Computer Engineer passionate about delivering high quality work, solving complex problems and contributing to the success of the team. I have skills in web development and experience in machine learning.
      </p>
    </div>
  );
}

export default memo(Banner);
