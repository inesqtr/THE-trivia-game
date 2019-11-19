import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions, handleUserAnswer, step, handleNextStep, score, isLoading }) => {
    if (isLoading) return <p>Loading...</p>;
    if (isLoading) return <Redirect to="/" />;

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
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default Questions;