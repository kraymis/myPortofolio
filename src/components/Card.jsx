import React from 'react';

// Define default values for props
const defaultProps = {
  imgSrc: 'https://via.placeholder.com/150',
  title: 'Default Title',
  description: 'This is a default description for the card. Provide specific text to customize.',
};

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="w-[60%] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[55vh] bg-transparent border border-[#7456FF] text-white rounded-lg shadow-md overflow-hidden flex flex-col items-center px-4 py-4 gap-2 mx-3 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black hover:text-opacity-70 hover:border-[#7456FF]">
      {/* Image Container */}
      <div className="w-auto h-[40%] sm:h-[40%]  sm:mb-8 flex items-center justify-center overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-auto h-[60%] sm:w-full sm:h-full object-cover transition-transform duration-300 hover:scale-105"  // Ensure image fits container
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col h-[60%] sm:h-[60%] sm:items-center justify-center sm:justify-start p-2sm:p-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#7456FF] mb-2 text-center transition-colors duration-300 hover:text-black">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7456FF] text-center transition-colors duration-300 hover:text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Set default props
Card.defaultProps = defaultProps;

export default Card;
