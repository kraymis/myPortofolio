import React from 'react';

// Define default values for props
const defaultProps = {
  imgSrc: 'https://via.placeholder.com/150',
  title: 'Default Title',
  description: 'This is a default description for the Card2. Provide specific text to customize.',
};

const Card2 = ({ imgSrc, title, description }) => {
  return (
    <div className="w-[70vw] lg:w-[25vw] h-auto  bg--transparent  text-white border-0 shadow-md overflow-hidden flex flex-col items-center px-4 py-4 gap-2 transition-transform duration-300 ">
      {/* Image Container */}
      <div className="w-[50%]  flex flex-col items-center hover:scale-110 transition-transform duration-300">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 "  // Ensure image fits container
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="text-xl font-semibold text-[#ffffff] mb-2 transition-colors duration-300 ">{title}</h3>
        <p className="text-[#999999] text-sm text-center  transition-colors duration-300 ">{description}</p>
      </div>
    </div>
  );
};

// Set default props
Card2.defaultProps = defaultProps;

export default Card2;
