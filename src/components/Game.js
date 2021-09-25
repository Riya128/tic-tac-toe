import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../calculateWinner";
import './Game.css';

function Game() {
  const [squares, setSquares] = useState([Array(9).fill(0)]);
  const [xIsNext, setXisNext] = useState(true);
  const [filled, setIsFilled] = useState(null);
  const handleClick = (i) => {
    const sq = squares;
    if (calculateWinner(sq) || sq[i]) return;
    const name = xIsNext ? "0" : "X";
    sq[i] = name;
    setSquares(sq);
    setXisNext(!xIsNext);
    setIsFilled(filled + 1);
  };
  let winner;
  let status;
  winner = calculateWinner(squares);
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = filled !== 9 ? `Next is ${xIsNext ? "0" : "X"}` : "Match is Tie";
  }
  const render = (i) => {
    return <Square value={squares[i]} clickHandler={() => handleClick(i)} />;
  };
  return (
    <>
      <div className="status">{status}</div>
      <br></br>
      <div>
        {render(1)}
        {render(2)}
        {render(3)}
      </div>
      <div>
        {render(4)}
        {render(5)}
        {render(6)}
      </div>
      <div>
        {render(7)}
        {render(8)}
        {render(9)}
      </div>
      <br></br>
      <br></br>
    </>
  );
}
export default Game;
