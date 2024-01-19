import { Box, ButtonProps } from '@mui/material'
import clsx from 'clsx'
import React, { FC, forwardRef, MouseEventHandler, PropsWithChildren, ReactNode } from 'react'

import Spinner from '../Spinner'
import { StyledButton } from './styles'

type ButtonSize = 'm' | 'l' | 'round'

type ButtonVariant = 'primary' | 'secondary' | 'transparent'

export type Props = PropsWithChildren<
  Partial<{
    size: ButtonSize
    variant: ButtonVariant
    isLoading: boolean
    isDisabled: boolean
    startIcon: ReactNode
    endIcon: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
    className: string
    isFullWidth: boolean
    type: 'submit' | 'button'
  }> &
    Omit<ButtonProps, 'variant' | 'size'>
>

/**
 * A customizable button component with various sizes and loading state support.
 *
 * The `Button` component is used to create customizable buttons with different sizes and loading state support. It can be used to trigger various actions in the application.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {ButtonSize} [props.size='m'] - The size of the button ('m', 'l', 'round').
 * @param {ButtonVariant} [props.variant='primary'] - The variant of the button ('primary', 'secondary', 'transparent').
 * @param {boolean} [props.isLoading] - A boolean to indicate if the button is in a loading state.
 * @param {boolean} [props.isDisabled] - A boolean to disable the button.
 * @param {ReactNode} [props.startIcon] - An optional icon or element to be displayed at the start of the button.
 * @param {ReactNode} [props.endIcon] - An optional icon or element to be displayed at the end of the button.
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - The click event handler for the button.
 * @param {string} [props.className] - An optional CSS class name to apply to the button.
 * @param {boolean} [props.isFullWidth] - A boolean to make the button full width.
 * @param {'submit' | 'button'} [props.type] - The type of the button ('submit', 'button').
 * @param {ReactNode} props.children - The child elements to be displayed within the button.
 *
 * @returns {FC} The Button component.
 */
const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    size = 'm',
    isLoading,
    isDisabled,
    variant = 'primary',
    startIcon,
    endIcon,
    onClick,
    children,
    className,
    isFullWidth,
    ...other
  } = props

  return (
    <StyledButton
      ref={ref}
      className={clsx(className, {
        [variant]: variant,
        [size]: size,
        isFullWidth,
        isLoading,
      })}
      disabled={isDisabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disableRipple
      {...other}
    >
      {isLoading && <Loader />}
      <div className={clsx('buttonChildren', isLoading && 'transparent')}>{children}</div>
    </StyledButton>
  )
})

const Loader: FC = () => (
  <Box className="loaderWrapper">
    <Spinner />
  </Box>
)

export default Button
