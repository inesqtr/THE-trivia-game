import React from 'react';
import Answer from './Answer'

const EachQuestion = ({ question }) => {

    // componentDidMount() {
    //     const { question } = this.props;
    //     const shuffledAnswers = shuffle([question.correct_answer, ...question.incorrect_answer]);
    //     this.setState({ shuffledAnswers });
    //   }
    console.log(question);
    return (
        <div>
            <h3>{question.question}</h3>
            <Answer />
            <div>Question number here</div>
            <button>Next</button>
        </div>
    )
}

export default EachQuestion;