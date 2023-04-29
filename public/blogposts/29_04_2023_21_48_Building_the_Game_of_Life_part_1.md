During my early days as a TA at [Le Wagon](https://www.lewagon.com), a colleague and I discovered
[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) and were intrigued by the concept.
We spun around the idea of using it in art installations or at parties as a lighting effect and thought about
how to translate it into code. At that time, my skills were much less developed and nothing more than theoretical
ideas came out of it. Since then, this idea has been sitting in my head and a few weeks ago I finally sat down and
implemented the whole thing with Typescript and React.

&nbsp;

The current version can be tested [here](/gameoflife).

&nbsp;

Divided into several blogposts, I would like to explain how I coded the individual components.

&nbsp;

## The actual page:

```tsx
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
    InitializedGameControls
  } = useGameOfLife()

  useInitializedGame()

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
        {InitializedGameControls}
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
```
