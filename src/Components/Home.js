import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>Welcome to the best Trivia Game ever!</div>
            <div>Description of game</div>
            <div>Choose the difficulty level:</div>
            <div>
                <button>Easy</button>
                <button>Medium</button>
                <button>Difficult</button>
            </div>
            <Link to="/questions"><button>PLAY</button></Link>
            <footer>A game developed and designed by Carolina Viero and Inês Ribeiro</footer>
        </div>

    )


}



export default Home;