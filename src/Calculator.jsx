
import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState();

  //display typed digits
  const handleClick = (value) => {
    setInput((prev) => (prev + value).toString());
  };

  //clear the input
  const handleClear = () => {
    setInput('');
  };

  //get total calculation
  const handleCalculate = () =>{
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput(error)
    }
  };

  //delete a single digit
  const handleDelete = () =>{
    const delet = input.slice(0, -1);
    setInput(delet)
  }

  return (
    <div className='calculate'>
      <div className="display">
        <h2>{input}</h2>
      </div>
      <div className='lower'>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button id='del' onClick={handleDelete}>Del</button>
        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>

        <div className='bottom'>
          <button id='reset' onClick={handleClear}>Reset</button>
          <button id='total' onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
