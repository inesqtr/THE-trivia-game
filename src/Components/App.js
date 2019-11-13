import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { shuffle } from 'lodash';
import Home from './Home';
import Questions from './Questions';
import Results from './Results';
import { getConsoleOutput } from '@jest/console';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      difficulty: '',
      step: 0,
      shuffledAnswers: []
    }
  }

  componentDidMount() {
    const { question } = this.props;
    const shuffledAnswers = shuffle([question.correct_answer, ...question.incorrect_answer]);
    this.setState({ shuffledAnswers });
  }

  handleFetchQuestions = async () => {
    const rawResponse = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)
    const response = await rawResponse.json();
    this.setState({
      questions: response.results
    });
  };


  render() {
    const { questions } = this.state;
    console.log(questions);
    return (
      <div className="App">
        <title>THE Trivia Game</title>
        <h1>THE Trivia Game</h1>
        <Switch>
          <Route exact path="/" component={() => <Home fetch={this.handleFetchQuestions} />} />
          <Route exact path="/questions" component={() => <Questions questions={questions} />} />
          <Route exact path="/result" component={Results} />
        </Switch>
      </div>
    );
  }

}





export default App;
