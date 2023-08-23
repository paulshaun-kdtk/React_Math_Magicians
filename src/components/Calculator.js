import React from 'react';
import Button from './Button';
import Header from './CalculatorHeader';
import './ButtonStyles.css';

// end imports

function renderButton(i) {
  const symbols = ['/', '*', '-', '+', '='];
  return <Button value={i} isSymbol={symbols.includes(i.toString())} />;
}

function Calculator() {
  return (
    <div className="Calculator">
      <Header />
      <div className="Other">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('/')}
      </div>
      <div>
        {renderButton(7)}
        {renderButton(8)}
        {renderButton(9)}
        {renderButton('*')}
      </div>
      <div>
        {renderButton(4)}
        {renderButton(5)}
        {renderButton(6)}
        {renderButton('-')}
      </div>
      <div>
        {renderButton(1)}
        {renderButton(2)}
        {renderButton(3)}
        {renderButton('+')}
      </div>
      <div className="Other2">
        <button id="zeroBtn">0</button>
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
}

export default Calculator;
