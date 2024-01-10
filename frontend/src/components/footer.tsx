import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white absolute bottom-0 w-full shadow-inner'>
      <div className='w-full mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between mx-12'>
          <a
            href='/'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
              alt='logo'
              className='h-14'
            />
          </a>

          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a
                href='https://colab.research.google.com/drive/14HGM5Y4MsFTvDtqVnovjMIwvDj6MDIN_?authuser=4'
                className='hover:underline me-4 md:me-6'
              >
                Colab Notebook
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            AI Project
          </a>
          <div>
            Farah Faggaa - Oumaima Said - Sofiene Chouchene - Badii Kacem - Ala
            eddine Dorai - Hana Barboura
          </div>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
