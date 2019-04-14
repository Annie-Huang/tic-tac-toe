import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({number, squares}) => {
    const [value, setValue] = useState('');
    return (
        <button
            className="square"
            onClick={() => setValue('x')}
        >
            {squares[number]}
        </button>
    );
};

const renderSquare = (squares, i) => {
    return <Square squares={squares} number={i}/>;
};

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(squares, 0)}
                {renderSquare(squares, 1)}
                {renderSquare(squares,2)}
            </div>
            <div className="board-row">
                {renderSquare(squares,3)}
                {renderSquare(squares,4)}
                {renderSquare(squares,5)}
            </div>
            <div className="board-row">
                {renderSquare(squares,6)}
                {renderSquare(squares,7)}
                {renderSquare(squares,8)}
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

