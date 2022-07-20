import Image from 'next/image';
import Link from './Link';

function Box({ title, description, banner, href }): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      height={50}
      width={50}
      className='flex md:h-36 lg:h-48'
    />
  );

  return (
<div className="overflow-hidden rounded-xl border-2 border-gray-100 border-opacity-60 dark:border-gray-800 transform transition duration-500 hover:scale-105">
  <div className="flex place-items-center md:flex">
    <div className="p-6 flex place-items-center md:shrink-0">
      {image}
    </div>
    <div className="p-6">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {title}
      </div>
      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </div>
  </div>
</div>
  );
}

export default Box;
