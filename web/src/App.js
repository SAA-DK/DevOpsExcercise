import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {Button, Link} from "@mui/material";



function App() {

    const [username, setUsername] = useState("Brian")

    const About = ()=>{
        let {text} = useParams();
        return <div><h1>About {text}</h1>
        </div>
    };

    let navigate = useNavigate();

    return (
        <div className="App">
            <Link to={"about/link"}>Go to about</Link>

            <Button onClick={(e) => navigate("about/button")}>Or like this</Button>

            <Routes>
                <Route path={"/about:text"} component={About}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/about"} element={About}/>
                <Route path={"/"} element={<h1>Startside</h1>}/>
           </Routes>

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
