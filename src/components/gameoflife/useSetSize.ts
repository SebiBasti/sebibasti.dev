import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useRef
} from 'react'

import { GameState } from '@/components/gameoflife'
import { generateEmptyGrid } from '@/components/gameoflife/generateGrid'

export const useSetSize = (
  runningRef: MutableRefObject<boolean>,
  gameFieldRef: MutableRefObject<HTMLDivElement | null>,
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  const initialSizeRef = useRef({ rows: 0, cells: 0 })
  return useCallback(() => {
    runningRef.current = false
    const gameField = gameFieldRef.current
    const initialSize = initialSizeRef.current

    setTimeout(() => {
      if (gameField) {
        const rows = Math.floor(gameField.clientHeight / 19)
        const cells = Math.floor(gameField.clientWidth / 19)
        if (rows !== initialSize.rows || cells !== initialSize.cells) {
          initialSizeRef.current = { rows, cells }
          setGameState((prevGameState) => ({
            ...prevGameState,
            gridSize: {
              rows: rows,
              cells: cells
            },
            grid: generateEmptyGrid({ rows: rows, cells: cells })
          }))
        }
      }
    }, 100)
  }, [gameFieldRef, runningRef, setGameState])
}
