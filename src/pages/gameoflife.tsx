import { NextSeo } from 'next-seo'
import { ConfirmDialog } from 'primereact/confirmdialog'
import 'primereact/resources/primereact.min.css'

import { useGameOfLife } from '@/components/gameoflife'

import gameOfLifeSEO from '@/config/gameoflife-seo.config'

import gameStyles from '@/styles/game.module.scss'
import overrideStyles from '@/styles/overrides/primereact.module.scss'

export default function Gameoflife() {
  const {
    useInitializedGame,
    gameState,
    gameFieldRef,
    handleTouchStart,
    gameControls
  } = useGameOfLife()

  useInitializedGame()

  return (
    <main
      className={`${gameStyles['layout-shift']} ${overrideStyles['confirm-dialog']}`}
    >
      <NextSeo {...gameOfLifeSEO} />
      <ConfirmDialog />
      <section
        className={`${gameStyles.container} ${
          gameState.isLoading ? gameStyles.loading : ''
        } ${gameState.isFullscreen ? gameStyles.fullscreen : ''}`}
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
          {gameState.grid.map((rows, i) => (
            <div key={i} className={gameStyles.row} id={`${i}`}>
              {rows.map((col, j) => (
                <div
                  key={`${i}-${j}`}
                  id={`${i}-${j}`}
                  data-row={i}
                  data-cell={j}
                  className={`${gameStyles.cell} ${
                    gameState.grid[i][j] ? gameStyles.active : ''
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
