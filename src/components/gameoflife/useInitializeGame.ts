import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'

import {
  GameState,
  preventDrag,
  setLoadingFalse
} from '@/components/gameoflife'

import gameStyles from '@/styles/game.module.scss'

export const useInitializeGame = (
  setSize: () => void,
  runningRef: MutableRefObject<boolean>,
  gameState: GameState,
  setGameState: Dispatch<SetStateAction<GameState>>,
  handleResize: () => void,
  setMouseDownTrue: () => void,
  setMouseDownFalse: () => void
) =>
  useEffect(() => {
    setSize()
    runningRef.current = gameState.isRunning
    setLoadingFalse(setGameState)

    document.body.classList.add(gameStyles['no-scroll-select'])

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousedown', setMouseDownTrue)
    window.addEventListener('mouseup', setMouseDownFalse)
    window.addEventListener('dragstart', preventDrag)
    return () => {
      document.body.classList.remove(gameStyles['no-scroll-select'])
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousedown', setMouseDownTrue)
      window.removeEventListener('mouseup', setMouseDownFalse)
      window.removeEventListener('dragstart', preventDrag)
    }
  }, [
    handleResize,
    gameState.isRunning,
    setSize,
    setGameState,
    setMouseDownTrue,
    setMouseDownFalse,
    runningRef
  ])
