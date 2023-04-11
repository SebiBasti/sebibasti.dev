import { Dispatch, SetStateAction, useCallback } from 'react'

import { GameState } from '@/components/gameoflife'

export const useHandleResize = (
  setGameState: Dispatch<SetStateAction<GameState>>,
  setSize: () => void
) =>
  useCallback(() => {
    setSize()
    setGameState((prevGameState) => ({
      ...prevGameState,
      isRunning: false,
      generation: 0
    }))
  }, [setGameState, setSize])
