import React from 'react';
import { Link } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions, handleUserAnswer, step, handleNextStep, userAnswer }) => {
    return (
        <div>
            {
                questions.map((question, index) => 
                <EachQuestion 
                    key={question.question}
                    question={question}
                    handleUserAnswer={handleUserAnswer}
                    step={step}
                    handleNextStep={handleNextStep}
                    index={index}
                    userAnswer={userAnswer}
                />)
                
            }
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default Questions;