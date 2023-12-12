import { Box, MenuItem, SelectChangeEvent, SelectProps as MUISelectProps, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'

import { ArrowRightIcon } from '@/public/icons'

import { getInputPlaceholder, renderInputText } from '../helpers'
import { CommonInputProps, InputPlaceholder, InputText } from '../types'
import { Select as MuiSelect, StyledSelectContainer } from './styles'

export type OptionType<T> = {
  value: T
  label?: InputText
  isDisabled?: boolean
}

export type Props = CommonInputProps & {
  options: OptionType<string | string[]>[]
  value: string | string[]
  isAutoWidth?: boolean
  variant?: 'primary' | 'transparent'
  label?: InputText
  placeholder?: InputPlaceholder
  caption?: InputText
  input?: ReactElement
  isChevronHidden?: boolean
  onChange?: MUISelectProps<string | string[]>['onChange']
}

/**
 * A select input element for choosing options from a dropdown menu.
 *
 * The `Select` component allows users to choose from a list of options in a dropdown menu. It can be customized with various props to control its behavior and appearance.
 *
 * @component
 *
 * @param {Props} props - The props for configuring the `Select` component.
 * @param {OptionType<string | string[]>[]} props.options - An array of options for the dropdown.
 * @param {InputText} [props.label] - The label to display above the select input.
 * @param {string | string[]} props.value - The currently selected value(s).
 * @param {MUISelectProps<string | string[]>['onChange']} [props.onChange] - A callback function to handle changes in the selected value(s).
 * @param {'primary' | 'transparent'} [props.variant="primary"] - The style variant of the select input.
 * @param {string} [props.className] - Additional CSS classes to apply to the `Select` component.
 * @param {boolean} [props.isError] - Specifies whether the select input has an error.
 * @param {boolean} [props.isDisabled] - Specifies whether the select input is disabled.
 * @param {InputPlaceholder} [props.placeholder] - The placeholder text to display when no option is selected.
 * @param {InputText} [props.caption] - Additional text to display below the select input.
 * @param {ReactElement} [props.input] - A custom input element to use.
 * @param {boolean} [props.isChevronHidden] - Specifies whether the chevron icon is hidden.
 *
 * @returns {FC} The `Select` component, a select input element.
 */
const Select: FC<Props> = (props) => {
  const {
    options,
    label,
    value,
    onChange,
    variant = 'primary',
    className,
    isError,
    isDisabled,
    isChevronHidden,
    placeholder,
    caption,
    ...rest
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const { formatMessage } = useIntl()

  const [option, setOption] = useState<string | string[]>(value)
  const [isOpen, setIsOpen] = useState(false)

  const onSelectChange = useCallback(
    (event: SelectChangeEvent<string | string[]>, child: ReactNode) => {
      setOption(event.target.value)
      onChange?.(event, child)
    },
    [onChange]
  )

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (value) {
      setOption(value)
    }
  }, [value])

  const placeholderText = getInputPlaceholder(formatMessage)(placeholder)

  return (
    <StyledSelectContainer>
      {label && (
        <Box className="title">
          <Typography variant="body2" color="neutrals.secondaryText">
            {renderInputText(label)}
          </Typography>
        </Box>
      )}
      <MuiSelect
        {...rest}
        placeholder={placeholderText}
        disabled={isDisabled}
        open={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onClick={() => setIsOpen(!isOpen)}
        value={option}
        onChange={(event, child) => onSelectChange(event as SelectChangeEvent<string | string[]>, child)}
        disableUnderline
        disableInjectingGlobalStyles
        variant="standard"
        inputRef={ref}
        IconComponent={() => {
          if (isChevronHidden) return null

          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: isOpen ? 'none' : 'rotate(180deg)',
              }}
            >
              <ArrowDown />
            </Box>
          )
        }}
        className={clsx(className, {
          [variant]: variant,
          isError,
          isDisabled,
        })}
      >
        {options.map(({ value, label, isDisabled }, index) => {
          return (
            <MenuItem
              key={index}
              value={value}
              className="menuItem"
              disabled={isDisabled}
              disableGutters
              disableRipple
              disableTouchRipple
            >
              {renderInputText(label)}
            </MenuItem>
          )
        })}
      </MuiSelect>
      {caption && (
        <Typography variant="body2" className={clsx('captionWrapper', { isError })}>
          {renderInputText(caption)}
        </Typography>
      )}
    </StyledSelectContainer>
  )
}

const ArrowDown = () => (
  <Box sx={{ transform: 'rotate(270deg)' }}>
    <ArrowRightIcon />
  </Box>
)

export default Select
