import { useEffect, useRef, useState } from 'react'

import gameStyles from '@/styles/game.module.scss'

const numRows = 30
const numCols = 50

const generateEmptyGrid = () => {
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => false))
  }
  return rows
}

const generateRandomGrid = () => {
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => Math.random() > 0.5))
  }
  return rows
}

export default function Game() {
  const emptyGrid = generateEmptyGrid()
  const [grid, setGrid] = useState(emptyGrid)

  const [isRunning, setIsRunning] = useState(false)
  const [generation, setGeneration] = useState(0)

  const runningRef = useRef<boolean>(isRunning)
  runningRef.current = isRunning

  const runSimulation = () => {
    if (!runningRef.current) {
      return
    }

    setGrid((prevGrid) => {
      const newGrid = generateEmptyGrid()
      let cellsChanged = false
      prevGrid.forEach((row, i) => {
        row.forEach((col, j) => {
          const neighbors = countNeighbors(prevGrid, i, j)
          if (prevGrid[i][j]) {
            newGrid[i][j] = neighbors === 2 || neighbors === 3
            if (!cellsChanged && !newGrid[i][j]) {
              cellsChanged = true
            }
          } else {
            newGrid[i][j] = neighbors === 3
            if (!cellsChanged && newGrid[i][j]) {
              cellsChanged = true
            }
          }
        })
      })
      const hasLiveCells = newGrid.some((row) => row.some((col) => col))
      if (!cellsChanged || !hasLiveCells) {
        setIsRunning(false)
        return prevGrid
      }
      return newGrid
    })

    setGeneration((prevGeneration) => prevGeneration + 1)

    setTimeout(runSimulation, 100)
  }

  const countNeighbors = (
    grid: boolean[][],
    rowIndex: number,
    colIndex: number
  ) => {
    let numLiveNeighbors = 0
    ;[rowIndex - 1, rowIndex, rowIndex + 1].forEach((i) => {
      ;[colIndex - 1, colIndex, colIndex + 1].forEach((j) => {
        if (i === rowIndex && j === colIndex) {
          return
        }
        const wrappedRow = (i + numRows) % numRows
        const wrappedCol = (j + numCols) % numCols
        if (grid[wrappedRow][wrappedCol]) {
          numLiveNeighbors++
        }
      })
    })
    return numLiveNeighbors
  }

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (runningRef.current) {
      return
    }
    setGrid((prevGrid) =>
      prevGrid.map((row, i) =>
        i === rowIndex
          ? row.map((col, j) => (j === colIndex ? !col : col))
          : row
      )
    )
  }

  const handleStartStopClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning)
    if (!isRunning) {
      runningRef.current = true
      runSimulation()
    } else {
      runningRef.current = false
    }
  }

  const handleClearClick = () => {
    setGrid(generateEmptyGrid())
    setGeneration(0)
  }

  const handleRandomizeClick = () => {
    setGrid(generateRandomGrid())
    setGeneration(0)
  }

  useEffect(() => {
    runningRef.current = isRunning
  }, [isRunning])

  return (
    <section className={gameStyles.container}>
      <div className={gameStyles.controls}>
        <button onClick={handleStartStopClick}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleRandomizeClick}>Randomize</button>
        <button onClick={handleClearClick}>Clear</button>
        <p>Generations: {generation}</p>
      </div>
      <div className={gameStyles['game-field']}>
        {grid.map((rows, i) => (
          <div key={i} className={gameStyles.row}>
            {rows.map((col, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => handleCellClick(i, j)}
                className={`${gameStyles.cell} ${
                  grid[i][j] ? gameStyles.active : ''
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
