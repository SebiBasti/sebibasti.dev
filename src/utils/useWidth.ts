import useResizeObserver from '@react-hook/resize-observer'
import { useDebouncedCallback } from 'use-debounce'

import { RefObject, useLayoutEffect, useState } from 'react'

// This hook returns a debounced callback function that handles resize events
// export const useHandleResize =
//   // The setVisible function is passed in as a parameter to update the width state
//   (setWidth: (width: number) => void, mainRef: RefObject<HTMLDivElement>) => {
//     // Return a debounced callback function that will be called when the user resizes the window
//     return useDebouncedCallback(() => {
//       console.log('handleResize fired')
//       console.log({ mainRef })
//       // Set the width state based on parent width
//       if (mainRef.current) {
//         setWidth(mainRef.current.offsetWidth)
//       }
//     }, 100)
//   }

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
