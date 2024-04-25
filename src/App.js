import { useState } from "react";
import Board from "./components/Board";
import Move from "./components/Move";

export default function App() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function resetBoard() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                    noOfMoves={currentMove}
                />
            </div>
            <div className="game-info">
                <ol>
                    {history.map((squares, move) => (
                        <Move key={move} move={move} currentMove={currentMove} jumpTo={jumpTo} />
                    ))}
                </ol>
                <button className="reset-board" onClick={resetBoard}>Reset Board</button>
            </div>
        </div>
    );
}
