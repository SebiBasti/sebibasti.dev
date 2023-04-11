import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const useHandleStartStopClick =
  (
    setGameState: Dispatch<SetStateAction<GameState>>,
    runningRef: MutableRefObject<boolean>,
    runSimulation: Function
  ) =>
  (isRunning: boolean) => {
    setGameState(
      (prevGameState) =>
        ({ ...prevGameState, isRunning: !prevGameState.isRunning } as GameState)
    )
    if (isRunning) {
      runningRef.current = false
    } else {
      runningRef.current = true
      runSimulation()
    }
  }
