import { Dispatch, SetStateAction } from 'react'

import { generateEmptyGrid } from '@/components/gameoflife/'
import { GameState } from '@/components/gameoflife/useGameState'

export const handleClearClick = (
  setGameState: Dispatch<SetStateAction<GameState>>
) =>
  setGameState((prevGameState) => ({
    ...prevGameState,
    isRunning: false,
    generation: 0,
    grid: generateEmptyGrid(prevGameState.gridSize)
  }))
