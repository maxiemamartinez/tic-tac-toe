import './App.css';
import React from 'react';
import { useState } from 'react';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const App = () => {
  const [move, nextMove] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
const reset = () => {
  nextMove('X');
  setSquares(Array(9).fill(null));
  setWinningSquares([]);
}
  
const checkForWinner = newSquares => {

  for (let i=0 ; i < winningPositions.length; i++){
    const [a, b, c]= winningPositions[i];
    if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
    endGame(newSquares[a], winningPositions[i]);
    return
  };
  if(!newSquares.includes(null)){
    endGame(null, Array.from(Array(10).keys()));
    return 
  }
  
  nextMove(move === 'X' ? 'O' : 'X'); 
}  
}
  
  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, move);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

const endGame = (result, winningPositions) => {
  nextMove(null);
  if (result !== null)
{
setScore({
  ...score,
  [result]: score[result]+1,
})
}
setWinningSquares(winningPositions);
setTimeout(reset, 2000); 
}
  return (
    <div className="container">
      <Board winningSquares={winningSquares} move={move} squares={squares} onClick={handleClick}/>
      <Scoreboard scoreO={score.O} scoreX={score.X} />
    </div>
  );
}

export default App;
