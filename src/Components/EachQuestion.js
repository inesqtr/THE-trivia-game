import React from 'react';
import Answer from './Answer'

const EachQuestion = ({ question }) => {
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