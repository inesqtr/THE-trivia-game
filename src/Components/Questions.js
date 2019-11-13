import React from 'react';
import { Link } from 'react-router-dom';
import EachQuestion from './EachQuestion'

const Questions = ({ questions }) => {
    return (
        <div>
            {
                questions.map(question => 
                <EachQuestion 
                    key={question.question}
                    question={question}
                />)
                
            }
            <div>Timer here</div>
            <Link to="/"><button>Home icon here</button></Link>
        </div>
    )
}

export default Questions;