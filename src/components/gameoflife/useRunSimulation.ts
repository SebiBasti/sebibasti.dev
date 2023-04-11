import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { countNeighbors } from '@/components/gameoflife/countNeighbors'
import { generateEmptyGrid } from '@/components/gameoflife/generateGrid'
import { GameState } from '@/components/gameoflife/useGameState'

export const useRunSimulation = (
  runningRef: MutableRefObject<boolean>,
  gameState: GameState,
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  const runSimulation = () => {
    // stop recursion if runningRef is false
    if (!runningRef.current) {
      return
    }

    setGameState((prevGameState: GameState): GameState => {
      // use the previous grid to calculate the next grid
      const prevGrid = prevGameState.grid
      // create a new grid with the same dimensions as the previous grid
      const newGrid = generateEmptyGrid(gameState.gridSize)
      let newGeneration = prevGameState.generation
      let cellsChanged = false

      prevGrid.forEach((row, prevRowInd) => {
        row.forEach((col, prevCellInd) => {
          const neighbors = countNeighbors(
            prevGrid,
            gameState,
            prevRowInd,
            prevCellInd
          )
          // if the cell is alive, check if it should die
          if (prevGrid[prevRowInd][prevCellInd]) {
            newGrid[prevRowInd][prevCellInd] =
              neighbors === 2 || neighbors === 3
            // if the cell is dead, check if it should come alive
          } else {
            newGrid[prevRowInd][prevCellInd] = neighbors === 3
          }
          // if the cell changed, set cellsChanged to true
          if (
            prevGrid[prevRowInd][prevCellInd] !==
            newGrid[prevRowInd][prevCellInd]
          ) {
            cellsChanged = true
          }
        })
      })

      // check if there are any live cells left
      const hasLiveCells = newGrid.some((row) => row.some((col) => col))
      // if there are live cells, increment the generation
      // this also increments the generation if the game stopped before and the user clicks in new cells
      // kinda hard to prevent that from happening, but who cares
      if (hasLiveCells) {
        newGeneration++
      }

      // if no cells have changed and there are no live cells, stop the simulation
      if (!hasLiveCells && !cellsChanged) {
        return { ...prevGameState, isRunning: false }
      }

      return { ...prevGameState, grid: newGrid, generation: newGeneration }
    })
    console.log('running simulation')
    setTimeout(runSimulation, 100)
  }

  return runSimulation
}

// Seeds version: https://en.wikipedia.org/wiki/Seeds_(cellular_automaton)

// Day and Night version: https://en.wikipedia.org/wiki/Day_and_Night_(cellular_automaton)
// newGrid[i][j] =
//   neighbors === 3 ||
//   neighbors === 4 ||
//   neighbors === 6 ||
//   neighbors === 7 ||
//   neighbors === 8
// else
// newGrid[i][j] =
//   neighbors === 3 ||
//   neighbors === 6 ||
//   neighbors === 7 ||
//   neighbors === 8
