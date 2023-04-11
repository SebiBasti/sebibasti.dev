import cn from 'classnames'
import { NextSeo } from 'next-seo'

import { useGameOfLife } from '@/components/gameoflife'

import gameOfLifeSEO from '@/config/gameoflife-seo.config'

import gameStyles from '@/styles/game.module.scss'

export default function Gameoflife() {
  const {
    useInitializedGame,
    gameState,
    gameFieldRef,
    handleTouchStart,
    gameControls
  } = useGameOfLife()

  useInitializedGame()

  console.log({ gameStyles })

  return (
    <main
      className={cn(gameStyles['layout-shift'], gameStyles['confirm-dialog'])}
    >
      <NextSeo {...gameOfLifeSEO} />
      <section
        className={cn(
          gameStyles.container,
          { [gameStyles.loading]: gameState.isLoading },
          { [gameStyles.fullscreen]: gameState.isFullscreen }
        )}
        draggable="false"
      >
        {gameControls}
        <div
          className={gameStyles['game-field']}
          ref={gameFieldRef}
          onClick={(event) => handleTouchStart(event)}
          onTouchMove={(event) => handleTouchStart(event)}
          onMouseMove={(event) =>
            handleTouchStart(event, gameState.isMouseDown)
          }
        >
          {gameState.grid.map((rows, rowindex) => (
            <div key={rowindex} className={gameStyles.row} id={`${rowindex}`}>
              {rows.map((cell, cellIndex) => (
                <div
                  key={`${rowindex}-${cellIndex}`}
                  id={`${rowindex}-${cellIndex}`}
                  data-row={rowindex}
                  data-cell={cellIndex}
                  className={cn(gameStyles.cell, {
                    [gameStyles.active]: cell
                  })}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
