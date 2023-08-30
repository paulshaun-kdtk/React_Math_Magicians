import React, { useState } from 'react';
import Button from './Button';
import CalculatorHeader from './CalculatorHeader';
import calculate from '../logic/calculate';
import '../App.css';
import NavBar from './NavBar';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonValue) => {
    const newData = calculate(calculatorData, buttonValue);
    setCalculatorData(newData);
  };

  return (
    <div className="Container">
      <NavBar />
      <div className="Calculator">
        <CalculatorHeader calculatorData={calculatorData} />
        <div>
          <Button value="AC" onClick={() => handleClick('AC')} />
          <Button value="+/-" onClick={() => handleClick('+/-')} />
          <Button value="%" onClick={() => handleClick('%')} />
          <Button value="÷" onClick={() => handleClick('÷')} id="symbols" />
        </div>
        <div>
          <Button value="7" onClick={() => handleClick('7')} />
          <Button value="8" onClick={() => handleClick('8')} />
          <Button value="9" onClick={() => handleClick('9')} />
          <Button value="x" onClick={() => handleClick('x')} id="symbols" />
        </div>
        <div>
          <Button value="4" onClick={() => handleClick('4')} />
          <Button value="5" onClick={() => handleClick('5')} />
          <Button value="6" onClick={() => handleClick('6')} />
          <Button value="-" onClick={() => handleClick('-')} id="symbols" />
        </div>
        <div>
          <Button value="1" onClick={() => handleClick('1')} />
          <Button value="2" onClick={() => handleClick('2')} />
          <Button value="3" onClick={() => handleClick('3')} />
          <Button value="+" onClick={() => handleClick('+')} id="symbols" />
        </div>
        <div>
          <Button value="0" onClick={() => handleClick('0')} id="zeroBtn" />
          <Button value="." onClick={() => handleClick('.')} />
          <Button value="=" onClick={() => handleClick('=')} id="symbols" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
