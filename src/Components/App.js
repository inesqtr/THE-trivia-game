import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js'
import Questions from './Questions'


function App() {
  return (
    <div className="App">
        <title>THE Trivia Game</title>
      <h1>THE Trivia Game</h1>
      <Switch>
        <Route exact path="/home"/>
        <Route exact path="/" component={Questions}/>
        <Route exact path="/result"/>
      </Switch>
    </div>
  );
}

export default App;
