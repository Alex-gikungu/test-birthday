import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    // Toggle the theme class on the body element
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className="theme">
      <button onClick={toggleTheme}>
        {isDarkTheme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </div>
  );
};

export default Theme;
