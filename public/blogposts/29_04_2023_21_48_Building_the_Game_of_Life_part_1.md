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

&nbsp;

Let's have a look at the individual parts:

```tsx
<main
  className={cn(gameStyles['layout-shift'], gameStyles['confirm-dialog'])}
>
```

The initial load causes a layout shift as the cells pop in. To prevent this I use the follwoing CSS:

```scss
.layout-shift {
  height: calc(100vh - 7rem);
}
```

This way the height of the page is already set and the layout shift is prevented.
`gameStyles['confirm-dialog']` overwrites some of the default styles coming from
[prime-reacts](https://primereact.org/confirmdialog/) confirm dialog. It was a bit challenging to select the css classes
and I came up with this:

```scss
.confirm-dialog {
  [class~='p-dialog-mask'] {
    background-color: var(--black-transparent);
    padding: 2rem;
    text-align: center;

    [class~='p-dialog'] {
      border: 2px solid var(--grey);
      border-radius: 0.2em;
      background: var(--light-black);
      padding: 2em;
      text-align: center;

      [class~='p-dialog-header'] {
        display: none;
      }

      [class~='p-dialog-content'] {
        margin-bottom: 2em;
        color: var(--white);
      }

      [class~='p-dialog-footer'] {
        align-self: center;

        // duplicate code warning is unavoidable here
        // -> no direct access to the button for now
        //noinspection DuplicatedCode
        [class~='p-button'] {
          cursor: pointer;
          box-shadow: 0 0 2px var(--white);
          border: none;
          border-radius: 0.2em;
          background: var(--black);
          padding: 1em;
          min-width: 4rem;
          color: var(--white);
          font-weight: bold;

          &:first-child {
            margin-right: 3rem;
          }

          &:hover {
            box-shadow: 0 0 2px var(--grey);
            color: var(--grey);
          }

          // deactivate blue focus color
          &:focus-visible {
            outline: inherit;
          }
        }
      }
    }
  }
}
```

I know this is a lot of css for something that should work out of the box and I'm not really happy with the solution.
Also [prime-react](https://primereact.org) adds quite a lot of css to the bundle and I'm thinking about replacing it
with my own solution.

&nbsp;

---

&nbsp;

The next section is the wrapper of the gamefield and the controls:

```tsx
<section
  className={cn(
    gameStyles.container,
    { [gameStyles.loading]: gameState.isLoading },
    { [gameStyles.fullscreen]: gameState.isFullscreen }
  )}
  draggable="false"
>
```

I'm using [classnames](https://www.npmjs.com/package/classnames) to conditionally add css classes. The `loading` class
adds a short transition at the beginning while the gamefield gets initialized.

```scss
.loading {
  opacity: 0;
  background-color: var(--light-black);
}

.container {
  // ...
  opacity: 1;
  transition: opacity 0.75s ease;
  // ...
}
```

The `fullscreen` class changes the position of the wrapper to `fixed`:

```scss
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 100vh;

  .game-field {
    height: 100vh;
  }
}
```

&nbsp;

---

```jsx
{
  InitializedGameControls
}
```

This loads the controls for the gamefield. I will explain this in more detail in another blogpost.

---

&nbsp;

The next part is the actual gamefield:

```tsx
<div
  className={gameStyles['game-field']}
  ref={gameFieldRef}
  onClick={(event) => handleTouchStart(event)}
  onTouchMove={(event) => handleTouchStart(event)}
  onMouseMove={(event) =>
    handleTouchStart(event, gameState.isMouseDown)
  }
>
```

Here is the css of the gamefield including the red background effect:

```scss
.game-field {
  --g1: rgb(170, 0, 0);
  --g2: rgb(164, 147, 151);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: background-pan 10s linear infinite;
  margin: 0 auto;
  background: linear-gradient(to right, var(--g1), var(--g2), var(--g1));
  background-size: 200%;
  width: 100%;
  height: 100%;
  // ...
}

@keyframes background-pan {
  from {
    background-position: 0 center;
  }

  to {
    background-position: -200% center;
  }
}
```

The animation in the background is a linear gradient at `200%` width that pans from left to right.

&nbsp;

```tsx
<div
  // ...
  onClick={(event) => handleTouchStart(event)}
  onTouchMove={(event) => handleTouchStart(event)}
  onMouseMove={(event) =>
    handleTouchStart(event, gameState.isMouseDown)
  }
>
```

This part was quite tricky because I wanted the drawing feature to behave more or less the same on desktop and mobile.
Initially I was working with event listeners on every cell, but that had some performance drawbacks and also didn't work
with touch events as there is no `touchEnter` event. So I decided to use a single event listener on the gamefield itself
and then calculate the cell that was touched. I will explain the logic in more detail in another blogpost.
The `handleTouchStart` covers all events and should probably be renamed 😂.

&nbsp;

---

&nbsp;

The last part is the actual maping of the cells:

```tsx
{
  gameState.grid.map((rows, rowindex) => (
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
  ))
}
```

I'm still impressed that this part runs as smooth as it does right now. It's rerendering all the cells every 100ms and
I did some testing: Right now the calculations roughly need 20-25ms on my machine so there is quite some headroom. In
the event listener that I will show another time I use the id of each cell to determine where the user clicked.
The rest is just a simple css class that gets toggled on and off.

```scss
.cell {
  flex-shrink: 0;
  cursor: pointer;
  margin: 1px;
  background: var(--black);
  width: 16px;
  height: 16px;

  &:hover {
    background: var(--black-transparent);
  }
}

.active,
.active:hover {
  background: transparent;
}
```

&nbsp;

---

&nbsp;

And that's it for the first part. I will show all the different components in more detail in the upcoming blogposts.
Btw. this was initially all done in one file with more than 400 lines... 🤯
