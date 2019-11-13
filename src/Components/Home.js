import React from 'react';

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
            <button onClick={fetch}>PLAY</button>
            <footer>A game developed and designed by Carolina Viero and Inês Ribeiro</footer>
        </div>

    )


}



export default Home;