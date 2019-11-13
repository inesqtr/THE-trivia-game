import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Results from './Results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: '',
      questions: [],
      step: 0
    }
  }

  handleFetchQuestions = () => {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          questions: [data.results]
        })
      });
      
  };

  render() {
    return (
      <div className="App">
        <title>THE Trivia Game</title>
        <h1>THE Trivia Game</h1>
        <Switch>
          <Route exact path="/" component={() => <Home fetch={this.handleFetchQuestions} />} />
          <Route exact path="/questions" component={() => <Questions questions={this.state.questions} />} />
          <Route exact path="/result" component={Results} />
        </Switch>
      </div>
    );
  }

}





export default App;
