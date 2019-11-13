import React from 'react';
import './App.css';
import Home from './Home.js'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <title>THE Trivia Game</title>
      <h1>THE Trivia Game</h1>
      <Switch>
        <Route exact path="/home"/>
        <Route exact path="/questions"/>
        <Route exact path="/result"/>
      </Switch>
    </div>
  );
}

export default App;
