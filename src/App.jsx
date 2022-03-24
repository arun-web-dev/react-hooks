import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CComponent from "./Components/CComponent";
import { FComponent } from "./Components/FComponent";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setFlag(!flag)}>
            Toggle Function Component
          </button>
          {flag ? <FComponent /> : ""}
        </div>
      </header>
    </div>
  );
}

export default App;
