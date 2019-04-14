import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({value, onClick}) => {
    return (
        <button
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

const renderSquare = (squares, setSquares, isXNext, setXNext, i) => {
    return <Square
        value={squares[i]}
        onClick={() => {
            console.log('squares=', squares);
            console.log('i=', i);
            const newSquares = squares.slice();
            newSquares[i] = isXNext ? 'x' : 'o';
            setXNext(!isXNext);
            setSquares(newSquares);
        }}
    />;
};

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);

    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(squares, setSquares, isXNext, setXNext, 0)}
                {renderSquare(squares, setSquares, isXNext, setXNext, 1)}
                {renderSquare(squares, setSquares, isXNext, setXNext,  2)}
            </div>
            <div className="board-row">
                {renderSquare(squares, setSquares, isXNext, setXNext, 3)}
                {renderSquare(squares, setSquares, isXNext, setXNext, 4)}
                {renderSquare(squares, setSquares, isXNext, setXNext, 5)}
            </div>
            <div className="board-row">
                {renderSquare(squares, setSquares, isXNext, setXNext, 6)}
                {renderSquare(squares, setSquares, isXNext, setXNext, 7)}
                {renderSquare(squares, setSquares, isXNext, setXNext, 8)}
            </div>
        </div>
    );
};

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

