import React, { useEffect, useRef, useState } from "react"
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Routes from "./routes";
import Navigation from "./Navbar";  
import "./App.css"
function App() {
  return (
    <div className="container">
      <Navigation/>
    </div>
  );
}

export default App;