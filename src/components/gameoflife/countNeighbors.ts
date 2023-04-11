import { GameState } from '@/components/gameoflife'

export const countNeighbors = (
  grid: boolean[][],
  gameState: GameState,
  rowIndex: number,
  colIndex: number
) => {
  let numLiveNeighbors = 0
  // loop through row above, current row, and row below
  ;[rowIndex - 1, rowIndex, rowIndex + 1].forEach((rowNum) => {
    // loop through column to the left, current column, and column to the right
    ;[colIndex - 1, colIndex, colIndex + 1].forEach((cellNum) => {
      // don't count the current cell
      if (rowNum === rowIndex && cellNum === colIndex) {
        return
      }
      // use math to get correct index if we're at the edge of the grid
      const wrappedRow =
        (rowNum + gameState.gridSize.rows) % gameState.gridSize.rows
      const wrappedCol =
        (cellNum + gameState.gridSize.cols) % gameState.gridSize.cols
      if (grid[wrappedRow][wrappedCol]) {
        numLiveNeighbors++
      }
    })
  })
  return numLiveNeighbors
}
