import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
