import React from 'react';

const Answer = ({ answer, handleUserAnswer, question }) => {

    const handleSelectAnswer = () => {
        handleUserAnswer(answer)
    }

    // const handleCorrect = () => {
    //     return answer === question.correct_answer ? "div-eachAnswer-right" : "div-eachAnswer-wrong"
    // }
    

    return (
        <div 
          onClick={handleSelectAnswer}
          className="div-eachAnswer"
          >
            {answer}
        </div>
    )
}

export default Answer;