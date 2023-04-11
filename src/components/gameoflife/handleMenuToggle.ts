import { Dispatch, SetStateAction } from 'react'

import { GameState } from '@/components/gameoflife/useGameState'

export const handleMenuToggle = (
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  setGameState(
    (prevGameState: GameState) =>
      ({
        ...prevGameState,
        isHidden: !prevGameState.isHidden
      } as GameState)
  )
}
