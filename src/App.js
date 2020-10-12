import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Todo} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
