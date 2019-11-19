import React from 'react';


const Answer = ({ answer, handleUserAnswer, isCorrect, userAnswer, score }) => {

    const handleSelectAnswer = () => {
        if( userAnswer) return '';
        return handleUserAnswer(answer)
    }

    const getClassName = () => {
        if (userAnswer && isCorrect) return ["div-eachAnswer-right", '✔️'];
        if (answer !== userAnswer) return ['div-eachAnswer', ''];

        return ["div-eachAnswer-wrong", '❌'];

    }

    return (
        <div className="answers-display">
            <div
                onClick={handleSelectAnswer}
                className={getClassName()[0]}
                score={score}
            >
                {answer}
            </div>
            {
                userAnswer &&
                <div className="icons">{getClassName()[1]}</div>
            }
        </div>

    )
}

export default Answer;