import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
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
      score: 0
    }
  }

  

  handleUserAnswer = (userAnswer) => {
    this.setState(
      (state) => {
        let newScore = state.score;
        const updatedQuestions = state.questions.map((question, index) => {
          if (index === state.step) {
            question.user_answer = userAnswer;
          }
          if (question.correct_answer === userAnswer){
            newScore = newScore + 100;
          } 
          return question;
        })
        
        return {
          ...state,
          questions: updatedQuestions,
          score: newScore
        }
      }

    );
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
    this.setState({ questions: response.results });
  };

  // quando se quer utilizar o estado anterior, this.setState deve ter como argumento uma função
  handleNextStep = () => {
    if (this.state.step === this.state.questions.length - 1) {
      // navigate to Results
      this.props.history.push('/result');
      return;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1
      }
    })
  }

  render() {
    const { questions, step, userAnswer, score } = this.state;
    return (
      <div className="App">
        <title>THE Trivia Game</title>
        <h1>THE Trivia Game</h1>
        <Switch>
          <Route 
          exact path="/" 
          render={() => <Home 
              fetch={this.handleFetchQuestions} 
              selectDifficulty={this.handleSelectDifficulty} />} />
          <Route
            exact path="/questions"
            render={() => <Questions
              questions={questions}
              handleUserAnswer={this.handleUserAnswer}
              step={step}
              handleNextStep={this.handleNextStep}
              userAnswer={userAnswer}
              score={score}
            />}
          />
          <Route 
            exact path="/result" 
            render={() => <Results 
              score={score} />} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
