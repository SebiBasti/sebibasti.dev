import { Dispatch, SetStateAction, useCallback } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const useHandleResize = (
  setGameState: Dispatch<SetStateAction<GameState>>,
  setSize: () => void
) =>
  useCallback(() => {
    setSize()
    setGameState(
      (prevGameState: GameState) =>
        ({
          ...prevGameState,
          isRunning: false,
          generation: 0
        } as GameState)
    )
  }, [setGameState, setSize])
