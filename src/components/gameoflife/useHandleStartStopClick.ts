import { Dispatch, MutableRefObject, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife'

export const useHandleStartStopClick =
  (
    setGameState: Dispatch<SetStateAction<GameState>>,
    runningRef: MutableRefObject<boolean>,
    runSimulation: Function
  ) =>
  (isRunning: boolean) => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      isRunning: !prevGameState.isRunning
    }))
    if (isRunning) {
      runningRef.current = false
    } else {
      runningRef.current = true
      runSimulation()
    }
  }
