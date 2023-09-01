import React from 'react';

const Flower = ({ left, duration, birthdate }) => {
  // Check if both day and time are 0 before rendering the flowers
  if (birthdate && birthdate.endsWith('T00:00')) {
    const flowerStyle = {
      left: `${left}%`,
      animationDuration: `${duration}s`,
    };

    return <div className="flower" style={flowerStyle}></div>;
  } else {
    // Return null if the conditions are not met
    return null;
  }
};

export default Flower;
