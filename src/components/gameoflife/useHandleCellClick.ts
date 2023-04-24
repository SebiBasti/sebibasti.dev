import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife'

// flips a value at a specific index in a 2d array
export const useHandleCellClick =
  (setGameState: Dispatch<SetStateAction<GameState>>) =>
  (rowIndex: number, cellIndex: number) => {
    setGameState((prevGameState) => {
      const newGrid = prevGameState.grid.map((row, prevRowIndex) =>
        prevRowIndex === rowIndex
          ? row.map((cell, prevCellIndex) =>
              prevCellIndex === cellIndex ? !cell : cell
            )
          : row
      )
      return {
        ...prevGameState,
        grid: newGrid
      }
    })
  }
