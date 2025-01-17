import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    }
    else if(value ==="del")
    {
      setInput(input.toString().slice(0,-1))
    }
    else {
      setInput((prevInput) => prevInput + value);
    }
    
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        <button className="clear" onClick={() => handleClick("C")}>C</button>
        <button className="clear" onClick={() => handleClick("del")}>Del</button>
        <button className="operator"onClick={() => handleClick("/")}>/</button>
        <button className="operator" onClick={() => handleClick("%")}>
          %
        </button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator" onClick={() => handleClick("*")}>
          *
        </button>
        <button onClick={() => handleClick("00")}>
          00
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button  onClick={() => handleClick(".")}>
          .
        </button>
        <button className="equal" onClick={() => handleClick("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
