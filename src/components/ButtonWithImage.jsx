import React from 'react';
import PropTypes from 'prop-types';

const ButtonWithImage = ({
  imageSrc,
  text,
  onClick,
  width = 'auto',
  height = 'auto',
  backgroundColor = '#6B46C1', // Default background color
  fontColor = '#FFFFFF',       // Default font color
  fontSize = '16px',           // Default font size
  fontWeight = 'normal'        // Default font weight
}) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center space-x-2 rounded hover:bg-purple-600"
      style={{ width, height, backgroundColor, color: fontColor, fontSize, fontWeight }}
    >
      {imageSrc && <img src={imageSrc} alt="" className="w-6 h-6" />}
      <span>{text}</span>
    </button>
  );
};

ButtonWithImage.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default ButtonWithImage;
