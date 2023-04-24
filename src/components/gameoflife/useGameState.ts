import { Dispatch, SetStateAction, useState } from 'react'

export type GridSize = {
  rows: number
  cells: number
}

export type GameState = {
  gridSize: GridSize
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
    gridSize: { rows: 0, cells: 0 },
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
