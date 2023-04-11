import { Dispatch, SetStateAction, useState } from 'react'

export type GameState = {
  gridSize: { rows: number; cols: number }
  grid: boolean[][]
  isRunning: boolean
  generation: number
  isLoading: boolean
  isHidden: boolean
  isFullscreen: boolean
  isMouseDown: boolean
}

export const useGameState = (): [
  GameState,
  Dispatch<SetStateAction<GameState>>
] => {
  const [gameState, setGameState] = useState<GameState>({
    gridSize: { rows: 0, cols: 0 },
    grid: [],
    isRunning: false,
    generation: 0,
    isLoading: true,
    isHidden: false,
    isFullscreen: false,
    isMouseDown: false
  })

  return [gameState, setGameState]
}
