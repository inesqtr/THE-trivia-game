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
        return (
            <div 
            className={ this.props.step === this.props.index ? "displayed" : "notDisplayed"}
            >
                <h3>{this.props.question.question}</h3>
                <div>
                    {
                        this.state.shuffledAnswers.map(answer =>
                            <Answer
                                key={answer}
                                answer={answer}
                                handleUserAnswer={this.props.handleUserAnswer}
                                question={this.props.question}
                            />)
                    }
                </div>
                <h4>{this.props.step + 1}/10</h4>
                <button
                    className="nextAndPlayAgainButton"
                    onClick={this.props.handleNextStep}
                >
                    Next
            </button>
            </div>
        )
    }
}

export default EachQuestion;