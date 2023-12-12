import { TooltipProps } from '@mui/material'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import { useIntlHelpers } from '@/lib/i18n'

import { StyledTooltip } from './styles'

export type Props = TooltipProps

/**
 * A customizable tooltip component for providing additional information or context to users.
 *
 * The `Tooltip` component allows you to create tooltips for various UI elements. Tooltips provide additional information or context when users interact with an element, such as hovering over an icon or button.
 *
 * @component
 *
 * @param {Props} props - The props for configuring the `Tooltip` component.
 * @param {React.ReactNode} [props.children] - The content that triggers the tooltip when interacted with (e.g., hovered over).
 * @param {string | React.ReactNode} props.title - The content to display within the tooltip. This can be a simple text string or more complex JSX content.
 *
 * @returns {FC} The `Tooltip` component for creating customizable tooltips.
 */
const Tooltip: FC<Props> = (props) => {
  const { children, title, ...rest } = props

  const { formatMessage } = useIntl()
  const { isFormattedMessageId } = useIntlHelpers()

  return (
    <StyledTooltip {...rest} title={isFormattedMessageId(title) ? formatMessage({ id: title }) : title} arrow>
      {children}
    </StyledTooltip>
  )
}

export default Tooltip
