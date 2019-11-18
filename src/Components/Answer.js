import React from 'react';

const Answer = ({ answer, handleUserAnswer, isCorrect, userAnswer }) => {

    const handleSelectAnswer = () => {
        handleUserAnswer(answer)
    }

    const handleCorrect = () => {
        return (isCorrect ? "div-eachAnswer-right" : "div-eachAnswer-wrong")
    }

    return (
        <div
            onClick={handleSelectAnswer}
            className={userAnswer ? handleCorrect() : "div-eachAnswer"}
        >
            {answer}
        </div>
    )
}

export default Answer;