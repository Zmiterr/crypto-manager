import { Input as MuiInput, InputBaseProps, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, ReactNode } from 'react'
import { useIntl } from 'react-intl'

import { getInputPlaceholder, renderInputText } from '../helpers'
import { CommonInputProps, InputPlaceholder, InputText } from '../types'
import { StyledInputContainer } from './styles'

export type Props = CommonInputProps &
  Partial<{
    value: string
    defaultValue: string
    maxLength: number
    placeholder: InputPlaceholder
    label: InputText
    caption: InputText
    prefix: ReactNode
    suffix: ReactNode
    isEditable: boolean
  }> &
  Pick<InputBaseProps, 'autoComplete' | 'onChange' | 'onBlur' | 'onKeyDown'>

/**
 * A customizable input field component that supports placeholders, labels, captions, and more.
 *
 * The `Input` component is a versatile input field that can be customized with various options such as labels, placeholders, prefixes, suffixes, and captions. It can be used for text inputs, number inputs, and more.
 *
 * @component
 *
 * @param {Props} props - The props for configuring the `Input` component.
 * @param {string} [props.value=""] - The value of the input field.
 * @param {string} [props.defaultValue] - The default value of the input field.
 * @param {number} [props.maxLength] - The maximum number of characters allowed in the input field.
 * @param {InputPlaceholder} [props.placeholder] - The placeholder text for the input field.
 * @param {InputText} [props.label] - The label displayed above the input field.
 * @param {InputText} [props.caption] - The caption displayed below the input field.
 * @param {ReactNode} [props.prefix] - The content to be displayed as a prefix inside the input field.
 * @param {ReactNode} [props.suffix] - The content to be displayed as a suffix inside the input field.
 * @param {boolean} [props.isEditable=true] - Specifies whether the input field is editable.
 * @param {InputBaseProps['autoComplete']} [props.autoComplete] - Controls browser auto-completion behavior.
 * @param {InputBaseProps['onChange']} [props.onChange] - A callback function to handle input changes.
 * @param {InputBaseProps['onBlur']} [props.onBlur] - A callback function to handle input blur events.
 * @param {InputBaseProps['onKeyDown']} [props.onKeyDown] - A callback function to handle keydown events in the input field.
 * @param {string} [props.className] - Additional CSS classes to apply to the `Input` component.
 * @param {boolean} [props.isDisabled=false] - Specifies whether the input field is disabled.
 * @param {boolean} [props.isError=false] - Specifies whether there is an error with the input field.
 * @param {boolean} [props.isRequired=false] - Specifies whether the input is required.
 *
 * @returns {FC} The `Input` component, a customizable input field for various use cases.
 */
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    placeholder,
    label,
    prefix,
    suffix,
    caption,
    isRequired,
    isError,
    onChange,
    isDisabled,
    className,
    isEditable = true,
    maxLength,
    ...other
  } = props

  const { formatMessage } = useIntl()

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }

  const placeholderText = getInputPlaceholder(formatMessage)(placeholder)

  return (
    <StyledInputContainer className={className}>
      {label && (
        <Typography variant="label" className="labelWrapper" color="general.secondaryText">
          {renderInputText(label)}
          {isRequired && <div className="isRequired">*</div>}
        </Typography>
      )}
      <MuiInput
        ref={ref}
        inputProps={{ maxLength }}
        readOnly={!isEditable}
        className={clsx({ isError, isDisabled, isEditable })}
        onChange={onChangeInput}
        placeholder={placeholderText}
        startAdornment={prefix && <div className="startAdornment">{prefix}</div>}
        endAdornment={suffix && <div className="endAdorned">{suffix}</div>}
        disableUnderline
        disabled={isDisabled || !isEditable}
        type={void 0}
        {...other}
      />
      {caption && (
        <Typography variant="label" className={clsx('captionWrapper', 'captionSpace', { isError })}>
          {renderInputText(caption)}
        </Typography>
      )}
    </StyledInputContainer>
  )
})

export default Input
