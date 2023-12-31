import { GlobalStyles } from '@mui/material'
import React from 'react'

/**
 * A component that disables the page scroll bar by applying CSS styles to the body element.
 *
 * The `ScrollDisabler` component is used to prevent scrolling of the page content by applying CSS styles to the `body` element. It calculates the scroll bar width to ensure that the content doesn't shift when the scroll bar is hidden.
 *
 * @component
 *
 * @returns {FC} The `ScrollDisabler` component that prevents page scrolling.
 */
const ScrollDisabler = () => {
  const documentWidth = document && document.documentElement.clientWidth
  const windowWidth = window.innerWidth
  const scrollBarWidth = windowWidth - documentWidth

  return (
    <GlobalStyles
      styles={{
        body: {
          overflow: 'hidden',
          webkitOverflowScrolling: 'touch',
          paddingRight: `${scrollBarWidth}px`,
        },
      }}
    />
  )
}

export default ScrollDisabler
