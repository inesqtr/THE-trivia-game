import React from 'react';


const Answer = ({ answer, handleUserAnswer, isCorrect, userAnswer, score }) => {

    const handleSelectAnswer = () => {
        
        handleUserAnswer(answer)
    }

    const getClassName = () => {
        if (userAnswer && isCorrect) return ["div-eachAnswer-right", 'cert!'];
        if (answer !== userAnswer) return ['div-eachAnswer', ''];

        return ["div-eachAnswer-wrong", 'X'];

    }

    return (
        <div>
            <div
                onClick={handleSelectAnswer}
                className={getClassName()[0]}
                score={score}
            >
                {answer}
            </div>
            {
                userAnswer &&
                <div>{getClassName()[1]}</div>
            }
        </div>

    )
}

export default Answer;