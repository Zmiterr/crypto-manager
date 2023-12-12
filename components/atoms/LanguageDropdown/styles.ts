import { Box, InputBase, styled } from '@mui/material'

export const LanguageSelectorWrapper = styled(Box, { name: 'LanguageSelectorWrapper' })(() => ({
  '&& .MuiInputBase-root': {
    backgroundColor: 'transparent',
    padding: 0,
    '&:not(.isError):not(.isDisabled):hover': { border: 'none' },
  },

  '&.disabledSelector': { pointerEvents: 'none' },
}))

export const SelectInput = styled(InputBase)(() => ({
  cursor: 'pointer',

  '&:not(.open):hover': {
    opacity: 0.6,
  },
  '& .MuiSelect-select': {
    display: 'none',
  },
  '& .localeButton': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  '& .open': {
    opacity: 0.4,
  },
}))
