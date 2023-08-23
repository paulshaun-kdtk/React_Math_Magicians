import React from 'react';
import './ButtonStyles.css';

const Button = ({ value, onClick, id }) => (
  <button className="Numbers" type="button" onClick={onClick} id={id}>
    {value}
  </button>
);

export default Button;
