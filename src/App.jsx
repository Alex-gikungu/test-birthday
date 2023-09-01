import React, { useState, useEffect } from 'react';
import Input from './components/inputs';
import Theme from './components/Theme';
import Countdown from './components/countdown';
import UserDetails from './components/UserDetails';
import Footer from './components/Footer';
import Flower from './components/Flower';



function App() {
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [, setFlowers] = useState([]);
  const [age, setAge] = useState(null);
  const [customMessage, setCustomMessage] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [monthMessage, setMonthMessage] = useState('');

  const monthMessages = {
    January: 'People born in January are said to be ambitious and persistent.',
    February: 'February-born individuals are known for their creativity and compassion.',
    March: 'March babies are often seen as enthusiastic and adventurous.',
    April: 'April-born individuals are said to be strong-willed and determined.',
    May: 'May-born people are known for their loyalty and practicality.',
    June: 'June babies are often seen as curious and communicative.',
    July: 'July-born individuals are known for their kindness and generosity.',
    August: 'People born in August are said to be confident and natural leaders.',
    September: 'September-born individuals are often seen as detail-oriented and analytical.',
    October: 'October babies are known for their charm and diplomacy.',
    November: 'November-born people are said to be determined and honest.',
    December: 'December babies are often seen as optimistic and cheerful.',
  };

  useEffect(() => {
    const flowerInterval = setInterval(() => {
      const newFlower = {
        id: new Date().getTime(),
        left: Math.random() * 100, // Random starting position
        duration: Math.random() * 20 + 10, // Random duration between 10s and 30s
      };
      setFlowers((prevFlowers) => [...prevFlowers, newFlower]);
    }, 3000); // Spawn new flower every 3 seconds

    return () => clearInterval(flowerInterval);
  }, []);

  useEffect(() => {
    // Calculate age based on birthdate
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const userAge = currentDate.getFullYear() - birthDate.getFullYear();
      setAge(userAge);
    }

    // Extract and set the birth month
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const options = { month: 'long' };
      const month = new Intl.DateTimeFormat('en-US', options).format(birthDate);
      setBirthMonth(month);
    }
  }, [birthdate]);

  useEffect(() => {
    // Set the month message based on the birth month
    if (birthMonth) {
      setMonthMessage(monthMessages[birthMonth]);
    }
  }, [birthMonth]);

  return (
    <div className="App">
      <Flower/>
      <h1>Birthday Countdown App</h1>
      <Theme />
      <div className="input-section">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <Countdown birthdate={birthdate} fullName={fullName} nickname={nickname} />
      <UserDetails birthdate={birthdate} fullName={fullName} nickname={nickname} />
      {/* {age !== null && <p>{`You are ${age} years old.`}</p>} */}
      <div className="message-section">
        {customMessage && <p>{`Custom Message: ${customMessage}`}</p>}
        {birthMonth && <p>{`${birthMonth} Birth Message: ${monthMessage}`}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
