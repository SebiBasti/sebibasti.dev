export const generateEmptyGrid = (gridSize: { rows: number; cols: number }) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array(gridSize.cols).fill(false))
  }
  return grid
}

export const generateRandomGrid = (gridSize: {
  rows: number
  cols: number
}) => {
  const grid = []
  const randomRow = () =>
    Array.from(Array(gridSize.cols), () => Math.random() > 0.5)

  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(randomRow())
  }
  return grid
}
