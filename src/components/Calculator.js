import React from 'react';
import Button from './Button';
import CalculatorHeader from './CalculatorHeader';

function Calculator() {
  return (
    <div className="Calculator">
      <CalculatorHeader />
      <div>
        <Button value="AC" />
        <Button value="+/-" />
        <Button value="%" />
        <Button value="÷" id="symbols" />
      </div>
      <div>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" id="symbols" />
      </div>
      <div>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" id="symbols" />
      </div>
      <div>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" id="symbols" />
      </div>
      <div>
        <Button value="0" id="zeroBtn" />
        <Button value="." />
        <Button value="=" id="symbols" />
      </div>
    </div>
  );
}

export default Calculator;
