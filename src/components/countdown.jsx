import React, { useState, useEffect } from 'react';

const Countdown = ({ birthdate }) => {
  const [countdown, setCountdown] = useState('');
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerActive && birthdate) {
      intervalId = setInterval(() => {
        const now = new Date();
        const birthdateObj = new Date(birthdate);

        birthdateObj.setFullYear(now.getFullYear()); // Set birthdate to the current year

        if (birthdateObj < now) {
          birthdateObj.setFullYear(now.getFullYear() + 1); // Set to next year if birthdate has already occurred this year
        }

        const timeUntilBirthday = birthdateObj - now;

        const days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

        setCountdown(
          <div className="countdown-container">
            <p className="countdown-text">
              Time until your birthday: 
              <span className="countdown-days">{days}d</span> 
              <span className="countdown-hours">{hours}h</span> 
              <span className="countdown-minutes">{minutes}m</span> 
              <span className="countdown-seconds">{seconds}s</span>
            </p>
            <div className="birthday-emoji-container">
              🎂 {/* You can replace this with your preferred birthday emoji */}
            </div>
          </div>
        );
      }, 1000); // Update every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [birthdate, timerActive]);

  const handleSetButton = () => {
    setTimerActive(true);
  };

  return (
    <div className="countdown-section">
      <button onClick={handleSetButton}>Set</button>
      {countdown}
    </div>
  );
};

export default Countdown;
