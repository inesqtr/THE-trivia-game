import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions, handleUserAnswer, step, handleNextStep, score, isLoading }) => {
    if (questions.length === 0) return <Redirect to="/" />;
    if (isLoading) return <p>Loading...</p>;
    
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
                    />)

            }
            <Link to="/"><button id="home-button">Home</button></Link>
        </div>
    )
}

export default Questions;