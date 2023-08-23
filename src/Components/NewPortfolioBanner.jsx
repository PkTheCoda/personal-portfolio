import React, { useState } from 'react';
import './NewPortfolioBanner.css'

const NewPortfolioBanner = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonClick = () => {
    // Implement the action when the button is clicked
    // For example, navigate to the new portfolio page
    window.open('https://pranavk.vercel.app', '_blank');
  };

  return (
    <div className={`banner-container ${buttonHovered ? 'hovered' : ''}`}>
      <div className="banner-content">
        <p className="banner-text">
          Hi there! This is my old portfolio. To view the new (and MUCH better) and improved one, click here:
        </p>
        <button
          className="view-button"
          onClick={handleButtonClick}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          View New Portfolio
        </button>
      </div>
    </div>
  );
};

export default NewPortfolioBanner;
