import React from 'react';
import './ButtonStyles.css';

function CalculatorHeader({ calculatorData }) {
  return (
    <div className="Header">
      <div>
        <h4>{calculatorData.total}</h4>
      </div>
      <div>
        <h5>{calculatorData.next}</h5>
      </div>
    </div>
  );
}

export default CalculatorHeader;
