import React from 'react';
import './ButtonStyles.css';

const Button = ({ value, isSymbol }) => {
  const style = isSymbol ? { backgroundColor: 'orange' } : null;
  return (
    <button className="Numbers" style={style}>{value}</button>
  );
};

export default Button;
