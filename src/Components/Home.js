import React from 'react';
import { Link} from 'react-router-dom';
import './App.css'

const Home = ({ fetch }) => {
    return (
        <div>
            <div><p>Welcome to the best Trivia Game ever!</p></div>
            <div><p>Do you think you're the ace of spades on general knowledge? So, prove your value on the next 10 questions! Choose your difficulty level and start playing!</p></div>
            <div>
                <button className="difficultyButtons">Easy</button>
                <button className="difficultyButtons">Medium</button>
                <button className="difficultyButtons">Difficult</button>
            </div>
            <Link to="/questions">
                <button 
                className="playButton"
                onClick={fetch}>
                    PLAY
                </button></Link>
            <footer>A game developed and designed by Carolina Viero and Inês Ribeiro</footer>
        </div>

    )


}



export default Home;