import { useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  /* 
  1. Memoize the function (useCallback) vs Memoize the value (useMemo)
  2.Referential equality for functions
  */

  const [counter, setCounter] = useState(1);

  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Factorial of {counter} is : <span>{result}</span>
        </h1>
        <div>
          <button onClick={() => setCounter - 1}>Decremenet</button>
          <button onClick={() => setCounter + 1}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default App;
