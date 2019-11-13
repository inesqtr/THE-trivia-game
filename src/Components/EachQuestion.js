import React from 'react';
import Answer from './Answer'

const EachQuestion = ({ questions }) => {
    return (
        <div>
            <h3>{questions}</h3>
            <Answer />
            <div>Question number here</div>
            <button>Next</button>
        </div>
    )
}

export default EachQuestion;