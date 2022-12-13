import React, { useState } from 'react'
import Board from '../Board/Board'
import calculateWinner from '../../helpers/calculateWinner'

import './index.scss'

const boardInitialState = Array(9).fill(null)

const Game = () => {
  const [board, setBoard] = useState<string[]>(boardInitialState)
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [moveCount, setMoveCount] = useState<number>(0)
  const winner = calculateWinner(board)

  const handleClickSquare = (squareIndex: number) => {
    const boardCopy = [...board]

    if (winner || boardCopy[squareIndex]) return

    setMoveCount((count) => count + 1)

    boardCopy[squareIndex] = xIsNext ? 'X' : 'O'

    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const handleClickReset = () => {
    setBoard(boardInitialState)
    setMoveCount(0)
  }

  return (
    <div className="game">
      <button
        className="game__reset-btn"
        onClick={handleClickReset}
      >
        Clear board
      </button>
      <Board squares={board} click={handleClickSquare} />
      <p className="game__info">
        {winner ? `Winner ${winner}` : ((!winner && moveCount === 9) ? 'Draw' : `Move player ${xIsNext ? 'X' : 'O'}`)}
      </p>
    </div>
  );
};

export default Game;
