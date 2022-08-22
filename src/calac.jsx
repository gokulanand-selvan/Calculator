import { useState } from "react";

const Calculator = () => {
  let [display, setDisplay] = useState("");

  const add = (num) => {
    setDisplay(`${display}${num}`);
  };

  return (
    <div className="main">
      <div className="outputbox">
        <input
          type={"text"}
          value={`${display}`}
          onChange={(e) => e.target.value}
        ></input>
      </div>
      <div className="row">
        <button onClick={() => add(7)}> 7 </button>
        <button onClick={() => add(8)}> 8 </button>
        <button onClick={() => add(9)}> 9 </button>
        <button>AC</button>
      </div>
      <div className="row">
        <button onClick={() => add(4)}> 4 </button>
        <button onClick={() => add(5)}> 5 </button>
        <button onClick={() => add(6)}> 6 </button>
        <button onClick={() => add("-")}> - </button>
      </div>
      <div className="row">
        <button onClick={() => add(1)}> 1 </button>
        <button onClick={() => add(2)}> 2 </button>
        <button onClick={() => add(3)}> 3 </button>
        <button onClick={() => add("+")}> + </button>
      </div>
      <div className="row">
        <button onClick={() => add(0)}> 0 </button>
        <button onClick={() => add("00")}> 00 </button>
        <button onClick={() => add(".")}> . </button>
        <button onClick={() => setDisplay(eval(display))}> = </button>
      </div>
    </div>
  );
};
export default Calculator;
