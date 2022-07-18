import Image from 'next/image';
import Link from './Link';
import StackList from '@/components/list/StackList';

function Card({ title, description, banner, href, stack }): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      className='object-cover object-center md:h-36 lg:h-48'
      width={544}
      height={306}
    />
  );

  return (
    <div className='md p-4 md:w-1/2 transform transition duration-500 hover:scale-105' style={{ maxWidth: '544px' }}>
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-100 border-opacity-60 dark:border-gray-800`}
      >
        {banner &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {image}
            </Link>
          ) : (
            image
          ))}
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className='prose mb-3 max-w-none text-gray-500 line-clamp-2 dark:text-gray-400'>
            {description}
          </p>
          <StackList stack={stack} />
        </div>
      </div>
    </div>
  );
}

export default Card;
