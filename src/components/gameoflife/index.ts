import { Dispatch, SetStateAction } from 'react'

import { confirmResize } from '@/components/gameoflife/confirmResize'
import { handleClearClick } from '@/components/gameoflife/handleClearClick'
import { handleMenuToggle } from '@/components/gameoflife/handleMenuToggle'
import { handleRandomizeClick } from '@/components/gameoflife/handleRandomizeClick'
import { GameState } from '@/components/gameoflife/useGameState'

export * from './countNeighbors'
export * from './generateGrid'
export * from './preventDrag'
export * from './setGameControls'
export * from './setLoadingFalse'
export * from './useGameOfLife'
export * from './useGameSetup'
export * from './useGameState'
export * from './useHandleCellClick'
export * from './useHandleResize'
export * from './useHandleStartStopClick'
export * from './useHandleTouchStart'
export * from './useInitializeGame'
export * from './useRunSimulation'
export * from './useSetMouseDown'
export * from './useSetSize'
export * from './useToggleFullscreen'

type golUtils = {
  confirmResize: (toggleFullscreen: () => void) => void
  handleClearClick: (setGameState: Dispatch<SetStateAction<GameState>>) => void
  handleMenuToggle: (setGameState: Dispatch<SetStateAction<GameState>>) => void
  handleRandomizeClick: (
    setGameState: Dispatch<SetStateAction<GameState>>
  ) => void
}
export const golUtils = {
  confirmResize,
  handleClearClick,
  handleMenuToggle,
  handleRandomizeClick
} as golUtils
