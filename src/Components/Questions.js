import React from 'react';
import { Link } from 'react-router-dom';
import Question from './EachQuestion'

const Questions = () => {
    return (
        <div>
            <Question />
            <div>Timer here</div>
            <Link to="/"><button>Home icon here</button></Link>
        </div>
    )
}

export default Questions;