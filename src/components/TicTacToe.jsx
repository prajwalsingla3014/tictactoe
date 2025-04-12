import useTicTacToe from "../hooks/useTicTacToe";
import "../App.css";

function TicTacToe({ boardSize = 3 }) {
  const { board, getStatusMessage, handleClick, resetGame } =
    useTicTacToe(boardSize);

  return (
    <div
      className="game"
      style={{ "--board-size": boardSize }}
    >
      <div className="status">
        {getStatusMessage()}
        <button
          className="reset-button"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            disabled={b !== null}
            key={index}
            onClick={() => handleClick(index)}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
