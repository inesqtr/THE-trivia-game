import React, { Component } from 'react';
import Answer from './Answer'
import { shuffle } from 'lodash';
import './App.css'

class EachQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffledAnswers: shuffle([this.props.question.correct_answer, ...this.props.question.incorrect_answers])
        };
    }


    render() {
        const { question, step, index, handleUserAnswer, handleNextStep} = this.props;
        return (
            <div 
            className={ step === index ? "displayed" : "notDisplayed"}
            >
                <h3>{question.question}</h3>
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
                            />)
                    }
                </div>
                <h4>{step + 1}/10</h4>
                <button
                    id="nextButton"
                    onClick={handleNextStep}
                >
                    Next
            </button>
            </div>
        )
    }
}

export default EachQuestion;