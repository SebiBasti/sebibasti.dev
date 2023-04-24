import { GameState } from '@/components/gameoflife'

export const countNeighbors = (
  grid: boolean[][],
  gameState: GameState,
  rowIndex: number,
  cellIndex: number
) => {
  let numLiveNeighbors = 0
  // loop through row above, current row, and row below
  ;[rowIndex - 1, rowIndex, rowIndex + 1].forEach((rowNum) => {
    // loop through cell to the left, current cell, and cell to the right
    ;[cellIndex - 1, cellIndex, cellIndex + 1].forEach((cellNum) => {
      // don't count the current cell
      if (rowNum === rowIndex && cellNum === cellIndex) {
        return
      }
      // use math to get correct index if we're at the edge of the grid
      const wrappedRow =
        (rowNum + gameState.gridSize.rows) % gameState.gridSize.rows
      const wrappedCol =
        (cellNum + gameState.gridSize.cells) % gameState.gridSize.cells
      if (grid[wrappedRow][wrappedCol]) {
        numLiveNeighbors++
      }
    })
  })
  return numLiveNeighbors
}
