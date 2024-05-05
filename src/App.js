import { useState } from "react";
import Board from "./components/Board";
import Move from "./components/Move";
import { Box, Button, Container, List } from "@mui/material";

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
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 6,
      }}
    >
      <Box>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          noOfMoves={currentMove}
        />
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
      }}>
        <List sx={{ listStyle: "decimal" }}>
          {history.map((squares, move) => (
            <Move
              key={move}
              move={move}
              currentMove={currentMove}
              jumpTo={jumpTo}
            />
          ))}
        </List>
        <Button size="small" variant="outlined" color="secondary" onClick={resetBoard}>
          Reset Board
        </Button>
      </Box>
    </Container>
  );
}
