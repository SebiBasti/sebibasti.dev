import { GridSize } from '@/components/gameoflife/useGameState'

export const generateEmptyGrid = (gridSize: GridSize) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array(gridSize.cells).fill(false))
  }
  return grid
}

export const generateRandomGrid = (gridSize: GridSize) => {
  const grid = []
  const randomRow = () =>
    Array.from(Array(gridSize.cells), () => Math.random() > 0.5)

  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(randomRow())
  }
  return grid
}
