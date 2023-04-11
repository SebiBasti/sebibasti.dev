export const generateEmptyGrid = (gridSize: { rows: number; cols: number }) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array.from(Array(gridSize.cols), () => false))
  }
  return grid
}

export const generateRandomGrid = (gridSize: {
  rows: number
  cols: number
}) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array.from(Array(gridSize.cols), () => Math.random() > 0.5))
  }
  return grid
}
