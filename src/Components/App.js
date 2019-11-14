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
      questions: [],
      difficulty: '',
      step: 0,
      userAnswer: [],
      isSelected: false,
    }
  }
  
  handleUserAnswer = (answer) => {
    this.setState({
        userAnswer: answer,
        isSelected: true,
      });
    };
    
    handleSelectDifficulty = (e) => {
      this.setState({
        difficulty: e.target.value
      });
    };
    
    handleFetchQuestions = async () => {
      const difficulty = this.state.difficulty || 'easy';
      const rawResponse = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
      const response = await rawResponse.json();
      this.setState({questions: response.results});
    };
    
    
    render() {
      const { questions, isSelected } = this.state;
      return (
        <div className="App">
        <title>THE Trivia Game</title>
        <h1>THE Trivia Game</h1>
        <Switch>
          <Route exact path="/" render={() => <Home fetch={this.handleFetchQuestions} selectDifficulty={this.handleSelectDifficulty} />} />
          <Route 
            exact path="/questions" 
            render={() => <Questions 
              questions={questions} 
              handleUserAnswer={this.handleUserAnswer} 
              isSelected={isSelected} />} 
          />
          <Route exact path="/result" component={Results} />
        </Switch>
      </div>
    );
  }
}


export default App;
