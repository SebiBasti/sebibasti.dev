import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const useToggleFullscreen =
  (setGameState: Dispatch<SetStateAction<GameState>>, setSize: () => void) =>
  () => {
    setGameState(
      (prevGameState: GameState) =>
        ({
          ...prevGameState,
          isFullscreen: !prevGameState.isFullscreen,
          isRunning: false
        } as GameState)
    )
    setSize()
  }
