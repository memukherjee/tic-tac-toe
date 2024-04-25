export default function Move({ move, currentMove, jumpTo }) {
    let description;
    if (move > 0) {
        description = "Go to move #" + move;
    } else {
        description = "Go to game start";
    }
    return (
        <li>
            <button
                className={`move ${move === currentMove ? "current-move" : ""}`}
                onClick={() => jumpTo(move)}
            >
                {description}
            </button>
        </li>
    );
}
