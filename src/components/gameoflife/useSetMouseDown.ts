import { Dispatch, SetStateAction, useCallback } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

// This is needed because removeEventListener can not remove void functions
// e.g. window.removeEventListener('mousedown', () => handleMouseDown(true)) will not work
// because it can't find the reference of that function
export const useSetMouseDown = (
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  const setMouseDownTrue = useCallback(() => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      isMouseDown: true
    }))
  }, [setGameState])

  const setMouseDownFalse = useCallback(() => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      isMouseDown: false
    }))
  }, [setGameState])

  return [setMouseDownTrue, setMouseDownFalse]
}
