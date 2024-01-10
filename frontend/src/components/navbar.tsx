import React from 'react';

const Navbar = () => {
  return (
    <nav className='h-auto shadow-md'>
      <div className='flex justify-between mx-12 p-4 items-center'>
        <h1 className='font-bold uppercase text-xl text-[#F1797E]'>
          recipe.io
        </h1>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
            alt='logo'
            className='h-14'
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
