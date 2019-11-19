import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Results = ({ score }) => {
    return (
        <div>
            <div><h3>Your final score is:</h3></div>
            <div id="div-result">
                {score}
            </div>
            <p>Quote according to final score</p>
            <Link to="/"><button className="nextAndPlayAgainButton">PLAY AGAIN</button></Link>
        </div>
    )
}



export default Results;