import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("arun");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);
  const [names, setNames] = useState([]);
  function changeName() {
    console.log("clicked");
    return setFlag(!flag);
  }
  function increment() {
    return setSteps(steps + 1);
  }
  function decrement() {
    return setSteps(steps - 1);
  }

  function addNames(e) {
    e.preventDefault();
    if (e.target[0].value === "") return;
    setNames([...names, { id: names.length, name: name }]);
    setName("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <p> Use State hook string mainpulation</p>
        <div>Hello {flag ? name : ""}</div>
        <button onClick={changeName}>CLick me !</button>
        <p> Use State hook numbers mainpulation</p>
        <button onClick={increment}>+</button>
        <div>{steps}</div>
        <button onClick={decrement}>-</button>
        <p> Use State hook Array and Object Mainpulation</p>
        <form onSubmit={addNames}>
          <input
            type="text"
            value={name}
            placeholder="add names"
            onChange={(e) => {
              return setName(e.target.value);
            }}
          />
          <button>submit</button>
        </form>
        <ul>
          {names.map((item) => (
            <li key={item.id}> {item.name} </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
