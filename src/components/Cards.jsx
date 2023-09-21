import React from 'react';


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-card1'>
              
              
              
              <div className='text-center font-medium  text-[#FAF9F6] relative'>
                  <h1 className='py-2 mx-8 mt-8 text-4xl'>Comprehensive visibility</h1>
                  <p className='py-2  mx-8 mt-6 hover-show'>One of the weakest links in cybersecurity is often the human element. Cybercriminals frequently employ social engineering tactics to manipulate individuals into divulging sensitive information or clicking on malicious links.</p>
                  
              </div>
              
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-card2'>
              
              <div className='text-center font-medium  text-[#FAF9F6] relative'>
                  <h1 className='py-2 text-4xl mx-8 mt-8  top-[50%] right-[50%]'>Unparalleled efficacy</h1>
                  <p className='py-2  mx-8 mt-6 hover-show'>Know who is being attacked and how. Identify your Very Attacked People™ (VAPs).
                  Cybersecurity fueled by machine learning, real-time analytics and one of the largest and most diverse data sets in all of cybersecurity</p>
                  
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-card3'>
              
              <div className='text-center font-medium  text-[#FAF9F6] relative'>
                  <h1 className='py-2 text-4xl mx-8 mt-8  '>Operational efficiency</h1>
                  <p className='py-2  mx-8 mt-6 hover-show'>Ransomware attacks have gained notoriety in recent years due to their devastating consequences. In a typical ransomware attack, malicious software encrypts a victim's files, and the attacker demands a ransom for the decryption key. </p>
                  
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;
