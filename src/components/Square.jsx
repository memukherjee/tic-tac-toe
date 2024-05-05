import { Button } from "@mui/material";

export default function Square({ value, onSquareClick }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ width: "100px", height: "100px", borderRadius: 0, fontSize: "3rem", fontWeight: "bold"}}
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
}
