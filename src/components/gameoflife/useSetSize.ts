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
  const initialSizeRef = useRef({ rows: 0, cols: 0 })
  return useCallback(() => {
    runningRef.current = false
    const gameField = gameFieldRef.current
    const initialSize = initialSizeRef.current

    setTimeout(() => {
      if (gameField) {
        const rows = Math.floor(gameField.clientHeight / 19)
        const cols = Math.floor(gameField.clientWidth / 19)
        if (rows !== initialSize.rows || cols !== initialSize.cols) {
          initialSizeRef.current = { rows, cols }
          setGameState((prevGameState) => ({
            ...prevGameState,
            gridSize: {
              rows: rows,
              cols: cols
            },
            grid: generateEmptyGrid({ rows: rows, cols: cols })
          }))
        }
      }
    }, 100)
  }, [gameFieldRef, runningRef, setGameState])
}
