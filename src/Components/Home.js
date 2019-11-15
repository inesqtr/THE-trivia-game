import React from 'react';
import { Link} from 'react-router-dom';
import './App.css'



const Home = ({ fetch, selectDifficulty }) => {
    return (
        <div>
            <div><h3>Welcome to the best Trivia Game ever!</h3></div>
            <div><p>Do you think you're the ace of spades on general knowledge? So, prove your value on the next 10 questions! Choose your difficulty level and start playing!</p></div>
            <div>
                <button onClick={selectDifficulty} value="easy" className="difficultyButtons">Easy</button>
                <button onClick={selectDifficulty} value="medium" className="difficultyButtons">Medium</button>
                <button onClick={selectDifficulty} value="hard" className="difficultyButtons">Hard</button>
            </div>
            <Link to="/questions">
                <button 
                className="playButton"
                onClick={fetch}>
                    PLAY
                </button></Link>
            <footer>
            <hr />
                <p>
                This game was developed and designed by <a href="https://www.linkedin.com/in/carolina-viero-15a26313a">Carolina Viero</a> and <a href="https://www.linkedin.com/in/inesqtribeiro/">Inês Ribeiro</a>.
                </p>
            </footer>
        </div>

    )


}



export default Home;