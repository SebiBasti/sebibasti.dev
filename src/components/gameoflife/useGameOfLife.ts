import {
  GameControls,
  useGameSetup,
  useInitializeGame
} from '@/components/gameoflife'

export const useGameOfLife = () => {
  const {
    gameState,
    setGameState,
    runningRef,
    gameFieldRef,
    handleTouchStart,
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

  const InitializedGameControls = GameControls(
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
    InitializedGameControls
  }
}
