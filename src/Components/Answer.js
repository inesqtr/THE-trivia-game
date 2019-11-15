import React from 'react';

const Answer = ({ answer, handleUserAnswer, question, userAnswer }) => {

    const handleSelectAnswer = () => {
        handleUserAnswer(answer)
    }

    const handleCorrect = () => {
        return userAnswer === question.correct_answer ? "div-eachAnswer-right" : "div-eachAnswer-wrong"
    }


    return (
        <div
            onClick={handleSelectAnswer}
            className={userAnswer === '' ? "div-eachAnswer" : handleCorrect()}
        >
            {answer}
        </div>
    )
}

export default Answer;