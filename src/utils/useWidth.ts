import useResizeObserver from '@react-hook/resize-observer'

import { RefObject, useLayoutEffect, useState } from 'react'

export const useWidth = (target: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useLayoutEffect(() => {
    if (target.current) {
      setWidth(target.current.getBoundingClientRect().width)
    }
  }, [target])

  useResizeObserver(target, (entry) => setWidth(entry.contentRect.width))
  return width
}
