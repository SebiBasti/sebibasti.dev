import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const setLoadingFalse = (
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  setGameState((prevGameState) => ({
    ...prevGameState,
    isLoading: false
  }))
}
