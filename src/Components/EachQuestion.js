import React, { Component } from 'react';
import Answer from './Answer'
import { shuffle } from 'lodash';

class EachQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            shuffledAnswers: shuffle([this.props.question.correct_answer, ...this.props.question.incorrect_answers])
        };
    }

    render(){
    return (
        <div>
            <h3>{this.props.question.question}</h3>
            <div>
                {
                    this.state.shuffledAnswers.map(answer => 
                    <Answer
                        answer={answer}
                    />)
                }
            </div>
            <div>Question number here</div>
            <button>Next</button>
        </div>
    )
}
}

export default EachQuestion;