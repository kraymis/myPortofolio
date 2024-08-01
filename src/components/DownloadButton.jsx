import React from 'react';
import pdfFile from '../assets/cv_final.pdf'; // Adjust the path to your PDF file
import imgdownload from "../assets/downloads.png"
import imgdownload2 from "../assets/downloads2.png"

const DownloadButton = () => (
  <a 
    href="https://drive.google.com/uc?export=download&id=1i0nK0Sa3JWjT3DMVfPMCCw-uISVy-2YY"
    download="filename.pdf" // Optional: specify the filename you want to use for the downloaded file
    className='relative p-4 bg-[#7456FF] text-white rounded-lg font-medium h-auto w-[12rem] hover:bg-white hover:text-[#7456FF] border border-[#7456FF] hover:border-transparent group'
  >
    <div className='flex justify-center items-center gap-2'>
      <div className='relative w-[1.2vw] h-[1.2vh] flex justify-center items-center '>
        <img 
          src={imgdownload} 
          alt="Download Icon" 
          className='absolute transition-opacity duration-300 group-hover:opacity-0'
        />
        <img 
          src={imgdownload2}
          alt="Dude Icon" 
          className='absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        />
      </div>
      Download CV
    </div>
  </a>
);

export default DownloadButton;
