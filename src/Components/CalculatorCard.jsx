/* eslint-disable no-eval */
import React from "react";
import "./CalculatorCard.css";
import Numbers from "../Numbers";
import Operators from "../Operators";

const CalculatorCard = () => {
  const [calc, setCalc] = React.useState("");
  const [output, setOutput] = React.useState("");
  // eslint-disable-next-line
  const [operator, setOperator] = React.useState(["/", "+", "-", "*", "."]);

  const updateCalc = (val) => {
    // eslint-disable-next-line no-mixed-operators
    if (
      (operator.includes(val) && calc === "") ||
      (operator.includes(val) && operator.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);

    // eslint-disable-next-line no-unused-expressions
    if (!operator.includes(val)) {
      setOutput(eval(calc + val).toString())
    }
  };

  const equate = () => {
    if (calc === "") {
      return;
    }
    setCalc(eval(calc).toString());
  };

  const handleDelete = () => {
      if(calc === ""){
        return
      }
      setCalc(calc.slice(0, -1))
  }

  const handleReload = () => {
      setCalc("")
      setOutput("")
  }

  return (
    <>
      <div className="calculator-card">
        <div className="input-container">
          <div className="input-output">
            <p className="input">{calc || "0"}</p>
            {output ? <p className="output">{output}</p> : ""}
          </div>
        </div>

        <div className="btns-container">
          <div className="numbers">
            <button className="number" onClick={handleDelete}>DEL</button>
            <button className="number">A/C</button>
            {Numbers.map((number) => (
              <button
                className="number"
                onClick={() => updateCalc(number.toString())}
              key={number}>
                {number}
              </button>
            ))}
            <button className="number" onClick={handleReload}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-repeat"
                viewBox="0 0 16 16"
              >
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                <path
                  fillRule="evenodd"
                  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                />
              </svg>
            </button>
            <button className="number">%</button>
            <button className="number equals" onClick={equate}>
              =
            </button>
          </div>

          <div className="operators">
            {Operators.map((operator, index) => {
              return (
                <button
                  className="operator"
                  onClick={() => updateCalc(operator)}
                key={index}>
                  {operator}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorCard;
