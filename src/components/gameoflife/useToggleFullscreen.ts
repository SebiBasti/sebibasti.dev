import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife'

export const useToggleFullscreen =
  (setGameState: Dispatch<SetStateAction<GameState>>, setSize: () => void) =>
  () => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      isFullscreen: !prevGameState.isFullscreen,
      isRunning: false
    }))
    setSize()
  }
