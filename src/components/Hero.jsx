import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="hero" className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Protection from advanced email attacks
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Break the Attack Chain
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Stay safe from 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Data loss', 'Spams', 'Fraud']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Stop threats and reduce compliance risk with WatchDog using machine learning</p>
        <Link to='email'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></Link>
      </div>
    </div>
  );
};

export default Hero;
