import React from "react";
import { ISquare } from "../domain/entity";
import Square from "./Square";

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

const Board: React.SFC<BoardProps> = ({ squares, onClick }) => {
  // 2次元配列 [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  const square = Array(3).fill(0).map((_, i) => Array(3).fill(i).map((_, j) => i * 3 + j))
  return (
    <div className="board">
      {
        square.map((row, i) => (
          <div className="board-row">
            {row.map((j, _) => (
              <Square key={j} value={squares[j]} onClick={() => onClick(j)} />
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default Board;
