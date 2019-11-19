import React from 'react';
import { Link } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions, handleUserAnswer, step, handleNextStep, userAnswer, score }) => {
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
                    score={score}
                    // userAnswer={userAnswer}
                />)
                
            }
            <Link to="/"><button id="home-button">Home</button></Link>
        </div>
    )
}

export default Questions;