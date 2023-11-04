// Alert.jsx
import React from 'react';

const Alert = ({ inputValue, setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Big Red Button</button>
    </div>
  );
};

export default Alert;
