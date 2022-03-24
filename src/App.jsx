import React, { useState, useMemo, useEffect, useCallback } from "react";
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

  const [name, setName] = useState("");

  const displayName = useCallback(() => {
    return name;
  }, [name]);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Factorial of {counter} is : <span>{result}</span>
        </h1>
        <div>
          <button onClick={() => setCounter(counter - 1)}>Decremenet</button>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
        <div>
          <div>
            <label>Enter Name</label>
          </div>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DisplayName displayName={displayName}></DisplayName>
        </div>
      </header>
    </div>
  );
}

const DisplayName = React.memo(({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName());
    console.log("Component renderd");
  }, [displayName]);
  return <p>{`My name is ${value}`}</p>;
});

const factorial = (n) => {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

export default App;
