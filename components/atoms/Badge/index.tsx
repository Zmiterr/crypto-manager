import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import { StyledBadge } from './styles'

// Theme badge colors
type BadgeColorVariant = 'send'

export type Props = PropsWithChildren<{
  colorVariant?: BadgeColorVariant
  className?: string
}>

/**
 * A customizable badge component that applies thematic colors to children elements.
 *
 * The `Badge` component is used to create badges with thematic colors for various purposes such as 'send', 'bond', 'unbond', etc.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {BadgeColorVariant} [props.colorVariant='other'] - The thematic color variant for the badge.
 * @param {string} [props.className] - An optional CSS class name to apply to the badge.
 * @param {ReactNode} props.children - The child elements to be wrapped by the badge.
 *
 * @returns {FC} The Badge component.
 */
const Badge: FC<Props> = ({ colorVariant = 'other', children, className }) => {
  return <StyledBadge className={clsx(colorVariant, className)}>{children}</StyledBadge>
}

export default Badge
