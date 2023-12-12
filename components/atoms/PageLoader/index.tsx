import React, { FC } from 'react'

import { StyledPageLoaderContainer } from './styles'

export type Props = { className?: string }

/**
 * A full-page loader component for displaying during data loading or processing.
 *
 * The `PageLoader` component creates a full-page loader with animated figures and icons to indicate that a page is loading or data is being processed. It is typically used when waiting for data to load on a page.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {string} [props.className] - Additional CSS classes to apply to the component for styling.
 *
 * @returns {FC} The `PageLoader` component, which displays an animated full-page loader.
 */
//TODO: make custom page loader
const PageLoader: FC<Props> = ({ className }) => {
  return <StyledPageLoaderContainer className={className}>PageLoader</StyledPageLoaderContainer>
}

export default PageLoader
