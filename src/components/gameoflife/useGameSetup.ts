import { useRef } from 'react'

import * as GameOfLife from '@/components/gameoflife'

export const useGameSetup = () => {
  const [gameState, setGameState] = GameOfLife.useGameState()

  const runningRef = useRef<boolean>(gameState.isRunning)
  const gameFieldRef = useRef<HTMLDivElement | null>(null)
  runningRef.current = gameState.isRunning

  const handleTouchStart = GameOfLife.useHandleTouchStart(
    gameState,
    setGameState
  )
  const runSimulation = GameOfLife.useRunSimulation(
    runningRef,
    gameState,
    setGameState
  )
  const handleStartStopClick = GameOfLife.useHandleStartStopClick(
    setGameState,
    runningRef,
    runSimulation
  )
  const setSize = GameOfLife.useSetSize(runningRef, gameFieldRef, setGameState)
  const handleResize = GameOfLife.useHandleResize(setGameState, setSize)
  const toggleFullscreen = GameOfLife.useToggleFullscreen(setGameState, setSize)
  const [setMouseDownTrue, setMouseDownFalse] =
    GameOfLife.useSetMouseDown(setGameState)

  return {
    gameState,
    setGameState,
    runningRef,
    gameFieldRef,
    handleTouchStart,
    runSimulation,
    handleStartStopClick,
    setSize,
    handleResize,
    toggleFullscreen,
    setMouseDownTrue,
    setMouseDownFalse
  }
}
