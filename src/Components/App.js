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
      score: 0,
      isLoading: true
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
          if (question.correct_answer === userAnswer) {
            console.log('sum')
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

  componentDidMount() {
    this.handleFetchQuestions()
  }

  handleFetchQuestions = () => {
    this.setState({ isLoading: true }, async () => {
      const difficulty = this.state.difficulty || 'easy';
      const rawResponse = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple&encode=url3986`)
      const response = await rawResponse.json();
      this.setState({
        questions: response.results,
        step: 0,
        score: 0,
        isLoading: false,
      });
    })
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
    const { questions, step, userAnswer, score, isLoading } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <img className={questions.length !== 0 ? "logo-spin" : "logo"} src="https://res.cloudinary.com/darjcijgb/image/upload/v1574177675/5bd044cf-e41b-41a0-b365-283da397ea80_200x200_bl5rii.png" alt="" />
          <h1>The Trivia Game</h1>
        </div>

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
              isLoading={isLoading}
            />}
          />
          <Route
            exact path="/result"
            render={() => <Results
              score={score} />} />
        </Switch>
        <footer>
          <hr />
          <p>
            This game was developed and designed by 
            <a href="https://www.linkedin.com/in/carolina-viero-15a26313a"> Carolina Viero </a> 
            and 
            <a href="https://www.linkedin.com/in/inesqtribeiro/"> Inês Ribeiro</a>.
          </p>
        </footer>
      </div>
    );
  }
}


export default withRouter(App);
