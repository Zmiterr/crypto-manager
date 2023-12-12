import React, { FC, HTMLAttributes } from 'react'

import { Spinner } from '@/components/atoms'

import { StyledBlockLoader } from './styles'

/**
 * A block loader component for displaying animated loading dots.
 *
 * The `BlockLoader` component is used to create a block loader with animated loading dots. It's typically used to indicate ongoing processes or loading states.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {string} [props.className] - An optional CSS class name to apply to the block loader container.
 *
 * @returns {FC} The BlockLoader component.
 */
//TODO: make custom block loader
const BlockLoader: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <StyledBlockLoader className={className}>
      <Spinner />
    </StyledBlockLoader>
  )
}

export default BlockLoader
