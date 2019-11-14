import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ fetch }) => {
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
            <Link to="/questions"><button onClick={fetch}>PLAY</button></Link>
            <footer>
                This game was developed and designed by
                <a href="https://www.linkedin.com/in/carolina-viero-15a26313a"> Carolina Viero </a>
                and
                <a href="https://www.linkedin.com/in/inesqtribeiro/"> Inês Ribeiro.</a>
            </footer>
        </div>

    )


}



export default Home;