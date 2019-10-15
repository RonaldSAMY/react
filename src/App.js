import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
