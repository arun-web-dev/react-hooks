import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Factorial of {counter} is: <span>{result}</span>
        </h1>
        <div>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
          <button
            style={{ marginLeft: "30px" }}
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
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
          <DisplayName name={name}></DisplayName>
        </div>
      </header>
    </div>
  );
}

const DisplayName = React.memo(({ name }) => {
  console.log("renderd");
  return (
    <>
      <p>My name is {name}</p>
    </>
  );
});

function factorial(n) {
  let i = 0;
  while (i < 10000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default App;
