import React from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
    return (
        <div>
            <h3>Question will be displayed here</h3>
            <div>
                <p>Answer one</p>
            </div>
            <div>
                <p>Answer two</p>
            </div>
            <div>
                <p>Answer three</p>
            </div>
            <div>
                <p>Answer four</p>
            </div>
            <div>Question number here</div>
            <div>Timer here</div>
            <Link to="/"><button>Home icon here</button></Link>
        </div>
    )
}

export default Questions;