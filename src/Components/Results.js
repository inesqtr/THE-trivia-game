import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Results = ({ score }) => {

    const handleFinalQuote = () => {
        if (score < 400){
            return (<img src="https://media.giphy.com/media/Zv6Apawffpa2k/giphy.gif" width="450" height="264" alt="dumb"/>)
        } else if (score >= 400 && score < 700){
            return (<img src="https://media.giphy.com/media/l0K3ZRJ1IXfxgmMQU/giphy.gif" width="450" height="264" alt="average"/>)
        } else if (score >= 700 && score < 1000){
            return (<img src="https://media.giphy.com/media/RgfGmnVvt8Pfy/giphy.gif" width="450" height="264" alt="good"/>)
        } else if (score === 1000){
            return (<img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" width="450" height="264" alt="perfect"/>);
        }
      }

    return (
        <div>
            <div>
                <h3>Your final score is:</h3>
            </div>
            <div id="div-result">
                {score}
            </div>
            <div id="gif-result">
                {handleFinalQuote()}
            </div>
            <div>
                <Link to="/"><button className="nextAndPlayAgainButton">PLAY AGAIN</button></Link>
            </div>    
        </div>
    )
}



export default Results;