import Image from 'next/image'
import Link from 'next/link'

import { Dispatch, SetStateAction } from 'react'

import cn from 'classnames'
import { ConfirmDialog } from 'primereact/confirmdialog'
import 'primereact/resources/primereact.min.css'
import { arrowUp, expandArrows, gear, minimizeArrows } from '~/icons'

import { GameState, golUtils } from '@/components/gameoflife'

import gameStyles from '@/styles/game.module.scss'

export const setGameControls = (
  gameState: GameState,
  setGameState: Dispatch<SetStateAction<GameState>>,
  toggleFullscreen: () => void,
  handleStartStopClick: (isRunning: boolean) => void
) => {
  return (
    <>
      <ConfirmDialog />
      <Image
        src={gear}
        alt={'show settings icon'}
        width={40}
        height={40}
        className={cn(gameStyles.toggle, {
          [gameStyles.hidden]: !gameState.isHidden
        })}
        role={'button'}
        onClick={() => golUtils.handleMenuToggle(setGameState)}
      />
      <div
        className={cn(gameStyles.controls, {
          [gameStyles.hidden]: gameState.isHidden
        })}
      >
        <Image
          src={gameState.isFullscreen ? minimizeArrows : expandArrows}
          alt={'toggle fullscreen'}
          width={40}
          height={40}
          role={'button'}
          onClick={() => golUtils.confirmResize(toggleFullscreen)}
        />
        <button onClick={() => handleStartStopClick(gameState.isRunning)}>
          {gameState.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => golUtils.handleRandomizeClick(setGameState)}>
          Randomize
        </button>
        <button onClick={() => golUtils.handleClearClick(setGameState)}>
          Clear
        </button>
        <p>Generations: {gameState.generation}</p>
        <Image
          src={arrowUp}
          alt={'hide menu icon'}
          width={40}
          height={40}
          role={'button'}
          onClick={() => golUtils.handleMenuToggle(setGameState)}
        />
        <small>
          <strong>Inspired by</strong>
          <br />
          <Link
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
          >
            Conway&apos;s Game&nbsp;of&nbsp;Life
          </Link>
        </small>
      </div>
    </>
  )
}
