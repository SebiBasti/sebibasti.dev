import { Dispatch, SetStateAction } from 'react'

import { generateRandomGrid } from '@/components/gameoflife/generateGrid'
import { GameState } from '@/components/gameoflife/useGameState'

export const handleRandomizeClick = (
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  setGameState((prevGameState) => ({
    ...prevGameState,
    generation: 0,
    grid: generateRandomGrid(prevGameState.gridSize)
  }))
}
