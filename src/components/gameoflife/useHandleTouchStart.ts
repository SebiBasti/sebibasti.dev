import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useRef,
  useState
} from 'react'

import { useThrottledCallback } from 'use-debounce'

import { GameState, useHandleCellClick } from '@/components/gameoflife'

import gameStyles from '@/styles/game.module.scss'

export const useHandleTouchStart = (
  gameState: GameState,
  setGameState: Dispatch<SetStateAction<GameState>>
) => {
  // track the current child element to prevent flicker of cells
  const [currentChildElement, setCurrentChildElement] =
    useState<HTMLElement | null>(null)
  // current drawing state (drawing big elements gets easier)
  const [isActive, setIsActive] = useState<boolean | null>(null)
  // fallback for touch devises where mouseDown is not available
  const [touchOver, setTouchOver] = useState<boolean>(false)
  // this is needed to prevent the last cell from being toggled when the mouseDown event ends
  const [hasMouseMoveEvent, setHasMouseMoveEvent] = useState<boolean>(false)
  // reference to the previous timeout so it can be cleared (simple let declaration was redeclared on every mouse move event)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)
  // toggle function for cells
  const handleCellClick = useHandleCellClick(setGameState)

  // throttledCallback to prevent too many events from firing
  return useThrottledCallback(
    // mouseDown is set to tru as a fallback for touch devices
    (event: MouseEvent | TouchEvent, mouseDown: boolean = true) => {
      // track beginning of touch event - gets cleared after 500ms (workaround because there is no mouseDown/mouseUp event for touch devices)
      // has no effect on mouse events
      setTouchOver(false)
      clearTimeout(timeoutIdRef.current as NodeJS.Timeout)
      // touchOver gets set 500ms after last TouchEvent
      timeoutIdRef.current = setTimeout(() => {
        setTouchOver(true)
      }, 500)

      // get the element that is currently under the mouse/touch
      const childElement = document.elementFromPoint(
        'touches' in event ? event.touches[0].clientX : event.clientX,
        'touches' in event ? event.touches[0].clientY : event.clientY
      ) as HTMLElement

      // if the element is not a cell, return
      if (!childElement || !childElement.matches(`.${gameStyles.cell}`))
        return false

      // setCurrentChildElement on first touch/mouseDown, but not for click events (otherwise you have to click twice)
      if (mouseDown && !currentChildElement && event.type !== 'click') {
        setCurrentChildElement(childElement)
        return false
      }

      // set values for handleCellClick
      const row = Number(childElement.dataset.row)
      const cell = Number(childElement.dataset.cell)

      // set the current active state to the opposite of the first cell that was touched/where the mouseDown started
      // by this you can actually draw big elements and not constantly flicker cells on and off
      // only bug/problem for now is that the cell where you start does not change state
      if (
        isActive === null &&
        mouseDown &&
        (event.type === 'mousemove' || event.type === 'touchmove')
      ) {
        setIsActive(() => !childElement.matches(`.${gameStyles.active}`))
      }

      // check if mouse is down
      // check if the event is a mousemove or touchmove (prevent click event and others from triggering this
      // check if the element is a cell
      // compare to active state (draw big elements)
      // compare to currentChildElement (prevent flickering)
      if (
        mouseDown &&
        (event.type === 'mousemove' || event.type === 'touchmove') &&
        childElement.matches(`.${gameStyles.cell}`) &&
        childElement.matches(`.${gameStyles.active}`) !== isActive &&
        currentChildElement?.id !== childElement.id
      ) {
        handleCellClick(row, cell)
        setCurrentChildElement(childElement)
        setHasMouseMoveEvent(true)

        // case for clicking on a cell
      } else if (event.type === 'click' && !hasMouseMoveEvent) {
        handleCellClick(row, cell)

        // reset isActive, currentChildElement and setHasMouseMoveEvent if mouse is not down anymore/touch is over
      } else if (!mouseDown || touchOver) {
        setIsActive(null)
        setCurrentChildElement(null)
        setHasMouseMoveEvent(false)
      }
    },
    10
  )
}
