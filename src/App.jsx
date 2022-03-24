import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  /*
  using use ref we can do below  
  1.Dom reference - 
  2.useful for storing previous state
  3.hold mutable value prevent re-render of the component

  */
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const previousCounterRef = useRef("");
  const inputEl = useRef("");

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);

  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            ref={inputEl}
            name="name"
            autoComplete="off"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={resetInput}>Reset</button>
          <div>My name is {name}</div>
          <div>
            <h1>Random Counter :{counter}</h1>
            {typeof previousCounterRef.current !== "undefined" && (
              <h2>Previous Counter :{previousCounterRef.current}</h2>
            )}
            <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
              Generate Number
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
