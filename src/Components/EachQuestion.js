import React, { Component } from 'react';
import Answer from './Answer'
import { shuffle } from 'lodash';
import './App.css';

class EachQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffledAnswers: shuffle([this.props.question.correct_answer, ...this.props.question.incorrect_answers])
        };
    }


    render() {
        const { question, step, index, handleUserAnswer, handleNextStep, score } = this.props;
        console.log(step === index && question.correct_answer);
        return (
            <div
                className={step === index ? "displayed" : "notDisplayed"}
            >
                <h2>{decodeURIComponent(question.question)}</h2>
                <div>
                    {
                        this.state.shuffledAnswers.map(answer =>
                            <Answer
                                key={answer}
                                answer={answer}
                                handleUserAnswer={handleUserAnswer}
                                question={question}
                                userAnswer={question.user_answer}
                                isCorrect={question.correct_answer === answer}
                                score={score}
                            />)
                    }
                </div>

                <h2>
                    {step + 1}/10
                    </h2>

                <h3 id="score">SCORE: {score}</h3>
                <button
                    onClick={handleNextStep}
                    className="nextAndPlayAgainButton"
                >
                    Next
            </button>
            </div>
        )
    }
}

export default EachQuestion;