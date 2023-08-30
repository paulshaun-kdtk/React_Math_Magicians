import React from 'react';
import './ButtonStyles.css';

function CalculatorHeader({ calculatorData }) {
  return (
    <div className="Header">
      <div>
        <h4>
          {calculatorData.total}
          {' '}
          <span>{calculatorData.operation}</span>
          {' '}
        </h4>
        {' '}
        <h5>{calculatorData.next}</h5>
      </div>
    </div>
  );
}

export default CalculatorHeader;
