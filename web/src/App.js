import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {Button, Link} from "@mui/material";
import {giraffeStore} from "./stores/GiraffeStore";
import {observer} from "mobx-react-lite";


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

            <ul>
                {giraffeStore.giraffes.map((giraffeName, key)=>
                <li key={key}>{giraffeName}</li>
                    )}
            </ul>

            <button onClick={() => giraffeStore.addGiraffe("Elmer")}>Tilføj giraf</button>

        </div>
  );
}

export default observer(App);