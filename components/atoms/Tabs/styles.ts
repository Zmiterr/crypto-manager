import { styled, Tab as MUITab, Tabs as MUITabs } from '@mui/material'

import { shouldForwardProp } from '@/helpers'

import { TabSize } from './index'

export const StyledTab = styled(MUITab, { name: 'StyledTab', shouldForwardProp })<{
  $orientation?: 'vertical' | 'horizontal'
}>(({ theme, $orientation }) => ({
  padding: '0 1.5rem',
  minHeight: '2.875rem',
  justifyContent: 'flex-start',
  maxWidth: '100%',
  color: theme.palette.general.secondaryText,
  textTransform: 'capitalize',
  zIndex: 2,
  flexGrow: 1,
  transition: 'all 0.3s',

  ...theme.typography.subtitle1,

  [theme.breakpoints.down('md')]: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },

  '&.Mui-selected': {
    color: theme.palette.primary.main,

    '&:before': {
      display: $orientation === 'vertical' ? 'block' : 'none',
      content: "''",
      position: 'absolute',
      bottom: 0,
      borderRadius: '0.5rem',
      width: '100%',
      height: '4px',
      background: theme.palette.primary.main,
    },
  },

  '&:hover': {
    color: theme.palette.background.light,
  },
}))

export const StyledTabs = styled(MUITabs, { name: 'StyledTabs', shouldForwardProp })<{ $size?: TabSize }>(
  ({ theme, $size, orientation }) => ({
    width: 'fit-content',
    backgroundColor: 'transparent',
    minHeight: $size === 'small' ? '2.25rem' : '3.5rem',

    '& .MuiTabs-indicator': {
      display: orientation === 'vertical' ? 'none' : 'block',
    },

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  })
)
