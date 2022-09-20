import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [username, setUsername] = useState("Brian");
    return (
        <div className="App">

        </div>
      /*
        const [username, setUsername] = useState("Brian");
  return (
      <div className="App">
          <div>Hello, {username}</div>
          <button onClick={(e)=>setUsername("Johnny")}>
              Skift navn
          </button>
      </div>
       */

    /*  Dette er fra week to, chapter 2
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
     */
  );
}

export default App;
