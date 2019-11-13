import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Results from './Results';
import { setPriority } from 'os';


function App() {

  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useStep(0);



  return (
    <div className="App">
      <title>THE Trivia Game</title>
      <h1>THE Trivia Game</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/result" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
