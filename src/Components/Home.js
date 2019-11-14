import React from 'react';
import { Link} from 'react-router-dom';

const Home = ({ fetch, onClick }) => {
    return (
        <div>
            <div>Welcome to the best Trivia Game ever!</div>
            <div>Description of game</div>
            <div>Choose the difficulty level:</div>
            <div>
                <button onClick={onClick} value="easy">Easy</button>
                <button onClick={onClick} value="medium">Medium</button>
                <button onClick={onClick} value="hard">Hard</button>
            </div>
            <Link to="/questions"><button onClick={fetch}>PLAY</button></Link>
            <footer>A game developed and designed by Carolina Viero and Inês Ribeiro</footer>
        </div>

    )


}



export default Home;