import React from 'react';

// Define default values for props
const defaultProps = {
  imgSrc: 'https://via.placeholder.com/150',
  title: 'Default Title',
  description: 'This is a default description for the card. Provide specific text to customize.',
};

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="w-[20vw] h-auto  bg-transparent border border-[#7456FF] text-white rounded-lg shadow-md overflow-hidden flex flex-col items-center px-6 py-4 gap-2 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black hover:text-opacity-70 hover:border-[#7456FF]">
      {/* Image Container */}
      <div className="w-[50%]  flex flex-col items-center">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"  // Ensure image fits container
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="text-[1rem] font-semibold text-[#7456FF] mb-4 text-center transition-colors duration-300 hover:text-black">{title}</h3>
        <p className="text-[#7456FF] text-xs text-center  transition-colors duration-300 hover:text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Set default props
Card.defaultProps = defaultProps;

export default Card;
