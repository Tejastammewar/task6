// App.js

import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Goals from "./components/Goals"; // Import the Goals component

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <div className="content">
        <About />
        <Projects />
        <Goals /> {/* Add the Goals component here */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
