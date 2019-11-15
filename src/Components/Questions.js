import React from 'react';
import { Link } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions, handleUserAnswer, isSelected, step, handleNextStep }) => {
    return (
        <div>
            {
                questions.map(question => 
                <EachQuestion 
                    key={question.question}
                    question={question}
                    handleUserAnswer={handleUserAnswer}
                    isSelected={isSelected}
                    step={step}
                    handleNextStep={handleNextStep}
                />)
                
            }
            <div>Timer here</div>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default Questions;