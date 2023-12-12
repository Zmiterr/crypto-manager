import { PopperOwnProps } from '@mui/base/Popper/Popper.types'
import { Box, ButtonProps, Stack, TooltipProps, Typography, Zoom } from '@mui/material'
import React, { ElementType, FC, useCallback, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import { useMediaQuery } from '@/lib/theme'
import { CheckIcon, CopyIcon } from '@/public/icons'

import { Divider, Tooltip } from '@/components/atoms'

import Icon from '../Icon'
import { StyledButton } from './styles'

const ANIMATION_DELAY_MILLISECONDS = 1500
const TOOLTIP_ANIMATION_DURATION = 100

type CommonProps = Partial<{
  className: string
  value: string
}>

type VariantedProps =
  | {
      variant: 'button'
    }
  | {
      variant: 'tooltip'
      children: TooltipProps['children']
      placement?: TooltipProps['placement']
      PopperProps?: Partial<PopperOwnProps>
    }

export type Props = CommonProps & VariantedProps

type CustomTitleProps = {
  text: string
  iconSrc: ElementType
  iconViewBox: string
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => Promise<void>
}

/**
 * A component for copying text to the clipboard, available as a button or a tooltip.
 *
 * The `Copy` component allows users to copy text to the clipboard. It can be used as a button or as a tooltip with an associated component. It provides options for customizing the appearance and behavior of the copy feature.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {string} [props.className] - An optional CSS class name to apply to the component.
 * @param {string} [props.value] - The text value to be copied to the clipboard.
 * @param {Props} props.variant - The variant of the `Copy` component. Choose between 'button' or 'tooltip'.
 * @param {TooltipProps['children']} [props.children] - The children to be displayed within the tooltip when the variant is 'tooltip'.
 * @param {TooltipProps['placement']} [props.placement] - The placement of the tooltip when the variant is 'tooltip'.
 * @param {Partial<PopperOwnProps>} [props.PopperProps] - Additional props for the Popper component when the variant is 'tooltip'.
 *
 * @returns {FC} The Copy component.
 */
const Copy: FC<Props> = ({ className, value, ...props }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

  const [isCopied, setIsCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isShowCopiedComponent, setIsShowCopiedComponent] = useState(false)

  const onClick = useCallback(
    async (event: React.MouseEvent | React.KeyboardEvent) => {
      try {
        event.preventDefault()

        await navigator.clipboard.writeText(value || '')
        setIsCopied(true)

        if (isMobile) {
          setTimeout(() => {
            setIsCopied(false)
          }, ANIMATION_DELAY_MILLISECONDS)
        }
      } catch (e) {
        console.error('copy error', e)
      }
    },
    [isMobile, isCopied, value]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false)
        setIsOpen(false)
      }
    }, ANIMATION_DELAY_MILLISECONDS)

    return () => {
      clearInterval(timer)
    }
  }, [isCopied])

  useEffect(() => {
    if (!isCopied) return

    setIsShowCopiedComponent(true)
    setTimeout(() => {
      setIsShowCopiedComponent(false)
    }, ANIMATION_DELAY_MILLISECONDS + TOOLTIP_ANIMATION_DURATION)
  }, [isCopied])

  const CopyTitle = <CustomTitle text="SUMMARY.COPY" iconSrc={CopyIcon} iconViewBox="0 0 24 24" onClick={onClick} />

  const CopiedTitle = <CustomTitle text="SUMMARY.COPIED" iconSrc={CheckIcon} iconViewBox="0 0 24 24" />

  const tooltipTitle = isShowCopiedComponent ? CopiedTitle : CopyTitle

  if (props.variant === 'button') {
    return (
      <CopyTooltip open={isCopied} title={CopiedTitle}>
        <CopyButton hasText={false} onClick={onClick} onKeyDown={onClick} className={className} />
      </CopyTooltip>
    )
  }

  if (props.variant === 'tooltip') {
    return (
      <CopyTooltip
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        leaveDelay={isCopied ? ANIMATION_DELAY_MILLISECONDS : 0}
        title={tooltipTitle}
        placement={props.placement}
        {...props}
      >
        <Box sx={{ cursor: 'pointer' }}>{props.children}</Box>
      </CopyTooltip>
    )
  }
  return <></>
}

/**
 * A tooltip component that wraps children with the Zoom transition.
 *
 * @component
 *
 * @param {TooltipProps} props - The props for the Tooltip component.
 *
 * @returns {FC} The CopyTooltip component.
 */
const CopyTooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <Tooltip TransitionComponent={Zoom} placement="top" {...props}>
      {children}
    </Tooltip>
  )
}

type CopyButtonProps = ButtonProps & {
  isFilled?: boolean
  hasText?: boolean
}

/**
 * A button component with optional text and an icon for copying text.
 *
 * @component
 *
 * @param {CopyButtonProps} buttonProps - The props for the button.
 *
 * @returns {FC} The CopyButton component.
 */
const CopyButton = ({ isFilled, hasText = true, ...buttonProps }: CopyButtonProps) => {
  return (
    <StyledButton disableRipple $isFilled={isFilled} as={'div'} role={'button'} {...buttonProps}>
      <Stack direction="row" alignItems="center" gap="0.25rem">
        {hasText && (
          <Typography variant="body2">
            <FormattedMessage id="SUMMARY.COPY" />
          </Typography>
        )}
        <Icon sx={{ fontSize: '1.5rem' }} src={CopyIcon} viewBox="0 0 24 24" />
      </Stack>
    </StyledButton>
  )
}

const CustomTitle: FC<CustomTitleProps> = ({ text, iconSrc, iconViewBox, onClick }) => (
  <Stack
    direction={'row'}
    gap={'0.5rem'}
    alignItems={'center'}
    height={'100%'}
    onClick={onClick}
    sx={{ cursor: 'pointer' }}
  >
    <Typography color="background.light" variant="body2">
      <FormattedMessage id={text} />
    </Typography>
    <Divider orientation={'vertical'} sx={{ borderWidth: '0 1px 0 0' }} />
    <Icon src={iconSrc} viewBox={iconViewBox} />
  </Stack>
)

export default Copy
