import React from 'react';
import Laptop from '../assets/hacker.jpg';

const Analytics = () => {
  return (
    <div name='about' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WATCHDOG DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Prevent your email from being hacked</h1>
          <p>
            Protect your people from advanced email attacks and identity-based threats. Defend sensitive data from theft, loss and insider threats. Stop email attacks and initial compromise. Break the attack chain.
            The most trusted threat protection solution in the Fortune 100, Fortune 1000 and Global 2000 to secure Microsoft 365.
          </p>
          <button method="dashboard" className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
