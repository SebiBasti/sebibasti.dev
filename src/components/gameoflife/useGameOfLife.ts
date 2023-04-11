import { useGameSetup } from '@/components/gameoflife'
import { useInitializeGame } from '@/components/gameoflife'
import { setGameControls } from '@/components/gameoflife'

export const useGameOfLife = () => {
  const {
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
  } = useGameSetup()

  const useInitializedGame = () =>
    useInitializeGame(
      setSize,
      runningRef,
      gameState,
      setGameState,
      handleResize,
      setMouseDownTrue,
      setMouseDownFalse
    )

  const gameControls = setGameControls(
    gameState,
    setGameState,
    toggleFullscreen,
    handleStartStopClick
  )

  return {
    useInitializedGame,
    gameState,
    setGameState,
    gameFieldRef,
    toggleFullscreen,
    handleStartStopClick,
    handleTouchStart,
    gameControls
  }
}
