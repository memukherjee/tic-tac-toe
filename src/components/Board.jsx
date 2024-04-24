import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handelClick(index) {
        const newSquares = squares.slice();
        newSquares[index] = "X";
        setSquares(newSquares);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=>handelClick(0)} />
                <Square value={squares[1]} onSquareClick={()=>handelClick(1)} />
                <Square value={squares[2]} onSquareClick={()=>handelClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=>handelClick(3)} />
                <Square value={squares[4]} onSquareClick={()=>handelClick(4)} />
                <Square value={squares[5]} onSquareClick={()=>handelClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=>handelClick(6)} />
                <Square value={squares[7]} onSquareClick={()=>handelClick(7)} />
                <Square value={squares[8]} onSquareClick={()=>handelClick(8)} />
            </div>
        </>
    );
}
