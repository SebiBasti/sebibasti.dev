import useLayoutEffect from '@react-hook/passive-layout-effect'
import useResizeObserver from '@react-hook/resize-observer'

import { RefObject, useState } from 'react'

// source: https://github.com/jaredLunde/react-hook/tree/master/packages/passive-layout-effect#readme
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
