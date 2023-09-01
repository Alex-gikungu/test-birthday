import React from 'react';

const Input = ({ birthdate, setBirthdate, fullName, setFullName, nickname, setNickname }) => {
  return (
    <div className="input-section">
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input 
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="nickname">Nickname:</label>
      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
    </div>
  );
}

export default Input;
