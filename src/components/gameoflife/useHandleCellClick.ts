import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

// flips a value at a specific index in a 2d array
export const useHandleCellClick =
  (setGameState: Dispatch<SetStateAction<GameState>>) =>
  (rowIndex: number, colIndex: number) => {
    setGameState((prevGameState: GameState) => {
      const newGrid = prevGameState.grid.map((row, prevRowIndex) =>
        prevRowIndex === rowIndex
          ? row.map((col, prevColIndex) =>
              prevColIndex === colIndex ? !col : col
            )
          : row
      )
      return {
        ...prevGameState,
        grid: newGrid
      } as GameState
    })
  }
