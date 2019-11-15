import React from 'react';

const Answer = ({ answer, handleUserAnswer, question, isSelected }) => {

    const handleSelectAnswer = () => {
        handleUserAnswer(answer)
    }

    const handleCorrect = () => {
        return answer === question.correct_answer ? "div-eachAnswer-right" : "div-eachAnswer-wrong"
    }
    

    return (
        <div 
          onClick={handleSelectAnswer}
          className={isSelected ? handleCorrect() : "div-eachAnswer"}
          >
            {answer}
        </div>
    )
}

export default Answer;