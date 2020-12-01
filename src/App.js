import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
