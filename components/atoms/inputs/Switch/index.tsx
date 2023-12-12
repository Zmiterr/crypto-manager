import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  FormControlLabel,
  FormHelperText,
} from '@mui/material'
import clsx from 'clsx'
import React, { FC } from 'react'

import { renderInputText } from '../helpers'
import { CommonInputProps, InputText, LabelPlacement } from '../types'
import { StyledSwitchContainer } from './styles'

export type Props = CommonInputProps &
  Partial<{
    id: string
    value: boolean
    defaultChecked: boolean
    labelPlacement: LabelPlacement
    caption: InputText
    label: InputText
    onChange: MUICheckboxProps['onChange']
  }>

/**
 * A checkbox input element for selecting options.
 *
 * The `Checkbox` component allows users to select options by toggling a checkbox. It can be customized with various props to control its behavior and appearance.
 *
 * @component
 *
 * @param {Props} props - The props for configuring the `Checkbox` component.
 * @param {string} [props.id] - The unique identifier for the checkbox.
 * @param {boolean} [props.value=false] - The current state of the checkbox.
 * @param {boolean} [props.defaultChecked=false] - The initial state of the checkbox.
 * @param {string} [props.name] - The name of the checkbox.
 * @param {InputText} [props.label] - The label to display next to the checkbox.
 * @param {LabelPlacement} [props.labelPlacement] - The placement of the label in relation to the checkbox.
 * @param {InputText} [props.caption] - Additional text to display below the checkbox.
 * @param {MUICheckboxProps['onChange']} [props.onChange] - A callback function to handle changes in the checkbox state.
 * @param {string} [props.className] - Additional CSS classes to apply to the `Checkbox` component.
 * @param {boolean} [props.isError] - Specifies whether the checkbox has an error.
 * @param {boolean} [props.isRequired] - Specifies whether the checkbox is required.
 * @param {boolean} [props.isDisabled] - Specifies whether the checkbox is disabled.
 *
 * @returns {FC} The `Checkbox` component, a checkbox input element.
 */
const Checkbox: FC<Props> = (props) => {
  const {
    onChange,
    id,
    value = false,
    name,
    isError,
    caption,
    isRequired,
    isDisabled,
    labelPlacement,
    className,
    label,
  } = props

  return (
    <StyledSwitchContainer className={className} required={isRequired} error={isError}>
      <FormControlLabel
        id={id}
        labelPlacement={labelPlacement}
        label={renderInputText(label)}
        disabled={isDisabled}
        className="formControlLabel"
        control={
          <MUICheckbox
            checkedIcon={<span className={clsx('icon', 'checkedIcon')} />}
            icon={<span className="icon" />}
            name={name}
            checked={Boolean(value)}
            value={value}
            onChange={onChange}
            disableRipple
          />
        }
      />
      {isError && <FormHelperText>{renderInputText(caption)}</FormHelperText>}
    </StyledSwitchContainer>
  )
}

export default Checkbox
