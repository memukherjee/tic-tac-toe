import { Box, Typography } from "@mui/material";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay, noOfMoves }) {
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : noOfMoves === 9
    ? "It's a draw"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  }

  return (
    <>
      <Typography variant="span">{status}</Typography>
      <Box display="grid" 
      sx={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "5px",
      }}
      >
        {
          squares.map((value, index) => (
            <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
          ))
        }
      </Box>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
