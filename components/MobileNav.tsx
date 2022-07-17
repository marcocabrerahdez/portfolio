import headerNavLinks from '@/data/headerNavLinks';
import { useState } from 'react';
import Link from './Link';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow(status => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className='sm:hidden'>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-900 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type='button'
          aria-label='toggle modal'
          className='fixed h-full w-full cursor-auto focus:outline-none'
          onClick={onToggleNav}
        ></button>
        <nav className='fixed mt-8 h-full'>
          {headerNavLinks.map(link => (
            <div key={link.title} className='px-12 py-4'>
              <Link
                href={link.href}
                className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
