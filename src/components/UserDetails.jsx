import React from 'react';

const UserDetails = ({ fullName, nickname, birthdate }) => {
  const calculateAge = () => {
    const now = new Date();
    const birthdateObj = new Date(birthdate);

    const currentYear = now.getFullYear();
    const birthYear = birthdateObj.getFullYear();
    const birthMonth = birthdateObj.getMonth();
    const birthDay = birthdateObj.getDate();

    let age = currentYear - birthYear;

    if (birthMonth > now.getMonth() || (birthMonth === now.getMonth() && birthDay > now.getDate())) {
      age -= 1;
    }

    return age;
  };

  return (
    <div className="user-details">
      {fullName && nickname && birthdate && (
        <>
          <p>Hello, {fullName} ({nickname})!</p>
          <p>Your age: {calculateAge()} years old</p>
        </>
      )}
    </div>
  );
};

export default UserDetails;
