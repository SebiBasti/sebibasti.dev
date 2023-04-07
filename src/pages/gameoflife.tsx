import gameOfLifeSEO from '@/config/gameoflife-seo.config'
import { NextSeo } from 'next-seo'
import { useThrottledCallback } from 'use-debounce'
import { arrowUp, expandArrows, gear, minimizeArrows } from '~/icons/'

import Image from 'next/image'

import {
  MouseEvent,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import gameStyles from '@/styles/game.module.scss'

const generateEmptyGrid = (gridSize: { rows: number; cols: number }) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array.from(Array(gridSize.cols), () => false))
  }
  return grid
}

const generateRandomGrid = (gridSize: { rows: number; cols: number }) => {
  const grid = []
  for (let i = 0; i < gridSize.rows; i++) {
    grid.push(Array.from(Array(gridSize.cols), () => Math.random() > 0.5))
  }
  return grid
}

let timeoutId: NodeJS.Timeout
const useHandleTouchStart = (useHandleCellClick: Function) => {
  const [currentChildElement, setCurrentChildElement] =
    useState<HTMLElement | null>(null)
  const [isActive, setIsActive] = useState<boolean | null>(null)
  const [touchOver, setTouchOver] = useState<boolean>(false)
  const [hasMouseMoveEvent, setHasMouseMoveEvent] = useState<boolean>(false)
  const handleCellClick = useHandleCellClick()
  // Check if the event has the property 'touches'
  return useThrottledCallback(
    (event: MouseEvent | TouchEvent, mouseDown: boolean = true) => {
      setTouchOver(false)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setTouchOver(true)
      }, 500)

      const childElement = document.elementFromPoint(
        'touches' in event ? event.touches[0].clientX : event.clientX,
        'touches' in event ? event.touches[0].clientY : event.clientY
      ) as HTMLElement

      if (!childElement || !childElement.matches(`.${gameStyles.cell}`))
        return false

      const row = Number(childElement.dataset.row)
      const cell = Number(childElement.dataset.cell)

      if (
        isActive === null &&
        mouseDown &&
        (event.type === 'mousemove' || event.type === 'touchmove')
      ) {
        setIsActive(() => !childElement.matches(`.${gameStyles.active}`))
      }

      if (
        mouseDown &&
        (event.type === 'mousemove' || event.type === 'touchmove') &&
        childElement.matches(`.${gameStyles.cell}`) &&
        childElement.matches(`.${gameStyles.active}`) !== isActive &&
        currentChildElement?.id !== childElement.id
      ) {
        handleCellClick(row, cell)
        setCurrentChildElement(childElement)
        setHasMouseMoveEvent(true)
      } else if (event.type === 'click' && !hasMouseMoveEvent) {
        handleCellClick(row, cell)
        setHasMouseMoveEvent(false)
      } else if (!mouseDown || touchOver) {
        setIsActive(null)
        setHasMouseMoveEvent(false)
      }
    },
    10
  )
}

export default function Gameoflife() {
  const [gridSize, setGridSize] = useState({ rows: 40, cols: 50 })
  const emptyGrid = generateEmptyGrid(gridSize)
  const [grid, setGrid] = useState(emptyGrid)
  const [isRunning, setIsRunning] = useState(false)
  const [generation, setGeneration] = useState(0)
  const [loading, setLoading] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [mouseDown, setMouseDown] = useState(false)

  const runningRef = useRef<boolean>(isRunning)
  const gameFieldRef = useRef<HTMLDivElement | null>(null)
  const initialSizeRef = useRef({ rows: 0, cols: 0 })
  runningRef.current = isRunning

  const useHandleCellClick = () => (rowIndex: number, colIndex: number) => {
    setGrid((prevGrid) =>
      prevGrid.map((row, i) =>
        i === rowIndex
          ? row.map((col, j) => (j === colIndex ? !col : col))
          : row
      )
    )
  }

  const handleTouchStart = useHandleTouchStart(useHandleCellClick)

  const runSimulation = () => {
    if (!runningRef.current) {
      return
    }

    setGrid((prevGrid) => {
      const newGrid = generateEmptyGrid(gridSize)
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

      if (hasLiveCells) {
        setGeneration((prevGeneration) => prevGeneration + 1)
      }

      return newGrid
    })

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
        const wrappedRow = (i + gridSize.rows) % gridSize.rows
        const wrappedCol = (j + gridSize.cols) % gridSize.cols
        if (grid[wrappedRow][wrappedCol]) {
          numLiveNeighbors++
        }
      })
    })
    return numLiveNeighbors
  }

  const handleStartStopClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning)
    if (isRunning) {
      runningRef.current = false
    } else {
      runningRef.current = true
      runSimulation()
    }
  }

  const handleClearClick = () => {
    setIsRunning(false)
    setGrid(generateEmptyGrid(gridSize))
    setGeneration(0)
  }

  const handleRandomizeClick = () => {
    setGrid(generateRandomGrid(gridSize))
    setGeneration(0)
  }

  const toggleMenu = () => {
    setHidden((prevState) => !prevState)
  }

  const setSize = () => {
    runningRef.current = false
    const gameField = gameFieldRef.current
    const initialSize = initialSizeRef.current

    setTimeout(() => {
      if (gameField) {
        const rows = Math.floor(gameField.clientHeight / 19)
        const cols = Math.floor(gameField.clientWidth / 19)
        if (rows !== initialSize.rows || cols !== initialSize.cols) {
          initialSizeRef.current = { rows, cols }
          setGridSize({
            rows: rows,
            cols: cols
          })
          const newGrid = generateEmptyGrid({ rows: rows, cols: cols })
          setGrid(newGrid)
        }
      }
    }, 100)
  }

  const handleResize = useCallback(() => {
    setSize()
    setIsRunning(false)
    setGeneration(0)
  }, [])

  const toggleFullscreen = () => {
    setFullscreen((prevState) => !prevState)
    setIsRunning(false)
    setSize()
  }

  // This is needed because removeEventListener can not remove void functions
  // e.g. window.removeEventListener('mousedown', () => handleMouseDown(true)) will not work
  // because it can't find the reference of that function
  const setMouseDownTrue = () => {
    setMouseDown(true)
  }

  const setMouseDownFalse = () => {
    setMouseDown(false)
  }

  const preventDrag = (event: DragEvent) => {
    event.preventDefault()
    return false
  }

  useEffect(() => {
    setSize()
    runningRef.current = isRunning
    setLoading(false)

    document.body.classList.add(gameStyles['no-scroll-select'])

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousedown', setMouseDownTrue)
    window.addEventListener('touchstart', setMouseDownTrue)
    window.addEventListener('mouseup', setMouseDownFalse)
    window.addEventListener('touchend', setMouseDownFalse)
    window.addEventListener('dragstart', preventDrag)
    return () => {
      document.body.classList.remove(gameStyles.noScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousedown', setMouseDownTrue)
      window.removeEventListener('touchstart', setMouseDownTrue)
      window.removeEventListener('mouseup', setMouseDownFalse)
      window.removeEventListener('touchend', setMouseDownFalse)
      window.removeEventListener('dragstart', preventDrag)
    }
  }, [handleResize, isRunning])

  return (
    <>
      <NextSeo {...gameOfLifeSEO} />
      <section
        className={`${gameStyles.container} ${
          loading ? gameStyles.loading : ''
        } ${fullscreen ? gameStyles.fullscreen : ''}`}
        draggable="false"
      >
        <Image
          src={gear}
          alt={'show settings icon'}
          width={50}
          height={50}
          className={`${gameStyles.toggle} ${!hidden ? gameStyles.hidden : ''}`}
          role={'button'}
          onClick={toggleMenu}
        />
        <div
          className={`${gameStyles.controls} ${
            hidden ? gameStyles.hidden : ''
          }`}
        >
          <Image
            src={fullscreen ? minimizeArrows : expandArrows}
            alt={'toggle fullscreen'}
            width={50}
            height={50}
            role={'button'}
            onClick={toggleFullscreen}
          />
          <button onClick={handleStartStopClick}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleRandomizeClick}>Randomize</button>
          <button onClick={handleClearClick}>Clear</button>
          <p>Generations: {generation}</p>
          <Image
            src={arrowUp}
            alt={'hide menu icon'}
            width={50}
            height={50}
            role={'button'}
            onClick={toggleMenu}
          />
        </div>
        <div
          className={gameStyles['game-field']}
          ref={gameFieldRef}
          data-running={isRunning}
          onClick={(event) => handleTouchStart(event)}
          onTouchMove={(event) => handleTouchStart(event, mouseDown)}
          onMouseMove={(event) => handleTouchStart(event, mouseDown)}
        >
          {grid.map((rows, i) => (
            <div key={i} className={gameStyles.row} id={`${i}`}>
              {rows.map((col, j) => (
                <div
                  key={`${i}-${j}`}
                  id={`${i}-${j}`}
                  data-row={i}
                  data-cell={j}
                  className={`${gameStyles.cell} ${
                    grid[i][j] ? gameStyles.active : ''
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
