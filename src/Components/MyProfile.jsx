import React from 'react';
import astro from '../assets/myastro.png'; // Import the image

export default function MyProfile() {
  return (
    <div className="relative flex justify-center items-center p-5">
      <div className='w-40 h-20 z-0 rounded-full border-4 border-white shadow-lg p-50'>

      </div >
       <div className='absolute'>
        {/*my picture goes here */} 
       <img 
          src={astro}
          alt="this is my picture" 
          className="w-100 h-100  z-10 p-10 transition-transform duration-500 ease-in-out transform hover:scale-110" 
        />

       </div>
    </div>
  );
}
