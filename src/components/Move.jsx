import { Button, ListItem } from "@mui/material";

export default function Move({ move, currentMove, jumpTo }) {
  let description;
  if (move > 0) {
    description = "Go to move #" + move;
  } else {
    description = "Go to game start";
  }
  return (
    <ListItem sx={{ display: "list-item", p: 0, mb: 0.25 }}>
      <Button
        size="small"
        variant={move === currentMove ? "outlined" : "contained"}
        color="secondary"
        onClick={() => jumpTo(move)}
        sx={{ textTransform: "none", px: 1, py: 0 }}
      >
        {description}
      </Button>
    </ListItem>
  );
}
