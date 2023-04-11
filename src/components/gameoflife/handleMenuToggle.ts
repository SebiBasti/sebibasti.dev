import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const handleMenuToggle = (
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  setGameState((prevGameState) => ({
    ...prevGameState,
    isHidden: !prevGameState.isHidden
  }))
}
