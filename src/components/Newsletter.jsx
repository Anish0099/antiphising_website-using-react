import React, { useState } from 'react';

const Newsletter = () => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const regExQ = /^(https?:\/\/(www\.)?)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/;

    if (e.target.value.match(regExQ)) {
      setUrl(e.target.value);
      setIsValid(true);
    } else {
      setUrl(e.target.value);
      setIsValid(false);
    }
  }

  const navigateToURL = () => {
    if (isValid) {
      window.location.href = url;
    }
  }

  return (
    <div name='email' className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to check site? Enter your URL...
          </h1>
          <p>Sign up to our WatchDogs and stay safe.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              name="url"
              value={url}
              placeholder='Enter URL'
              onChange={handleChange}
            />
            
            <button
              className='bg-[#00df9a] text-black rounded-md font-medium w-[150px] ml-4 my-6 px-6 py-3'
              onClick={navigateToURL} // Call navigateToURL when the button is clicked
            >
              Send
            </button>
          </div>
         <div className='bg-[#00df9a] text-black rounded-md font-medium w-[250px] ml-4 my-6 px-6 py-3'>{!isValid ? <p>Spam detected</p> : <p>Valid URL</p>}</div> 
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
