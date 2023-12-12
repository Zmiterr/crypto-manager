import { Divider as DividerMui, DividerProps, useTheme } from '@mui/material'
import { FC } from 'react'

export type Props = DividerProps & { type?: 'primary' | 'secondary' }

/**
 * A thin horizontal or vertical line that separates content.
 *
 * The `Divider` component is used to create a visual separation between content, such as lists or sections, by rendering a thin line. It can be customized by setting its orientation and adding additional styles using the `sx` prop.
 *
 * @component
 *
 * @param {DividerProps} props - The props for the component.
 * @param {Props} [props.sx] - Additional styles to apply to the divider.
 * @param {'primary' | 'secondary'} [props.type] - The type of the divider. Use primary divider for common cases.
 * @param {string} [props.orientation = 'primary'] - The orientation of the divider. Set to 'vertical' for a vertical divider or 'horizontal' for a horizontal divider.
 * @param {...any} [props.other] - Additional props to be passed to the underlying Material-UI Divider component.
 *
 * @returns {FC} The Divider component.
 */
const Divider: FC<Props> = ({ sx, orientation, type = 'primary', ...other }) => {
  const theme = useTheme()

  const verticalSx = { width: 'inherit', height: 'inherit', borderWidth: '1px' }
  const horizontalSx = { width: '100%', height: '2px' }

  const typeStyles =
    type === 'primary'
      ? { borderColor: theme.palette.general.divider, borderWidth: '2px 0 0 0' }
      : { borderColor: theme.palette.general.secondary, borderWidth: '1px 0 0 0' }
  const orientationStyles = orientation === 'vertical' ? verticalSx : horizontalSx

  return (
    <DividerMui
      sx={{
        borderWidth: typeStyles.borderWidth,
        borderColor: typeStyles.borderColor,
        ...orientationStyles,
        ...sx,
      }}
      {...other}
    />
  )
}

export default Divider
