import React from 'react';

const Answer = ({ answer, handleUserAnswer }) => {

    const handleSelectAnswer = () => {
        handleUserAnswer(answer)
    }

    return (
        <div className="div-eachAnswer" value="" onClick={handleSelectAnswer}>
            {answer}
        </div>
    )
}

export default Answer;