import React from 'react'
import Square from '../Square/Square'
import { BoardProps } from './types'

import './index.scss'

const Board = ({ squares, click }: BoardProps) => {
  return (
    <div className="board">
      {squares.map((square: string, index: number) => (
        <Square
          key={index}
          value={square}
          onClick={() => click(index)}
        />
      ))}
    </div>
  );
};

export default Board
