import { alpha, Box, Pagination, styled } from '@mui/material'

import { shouldForwardProp } from '@/helpers'

type FigureContainerProps = {
  $isSelected?: boolean
  $isDisabled?: boolean
}

const flexCenterStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as const

const disabledProperties = {
  opacity: 0,
  pointerEvents: 'none',
} as const

export const StyledFigureContainer = styled(Box, {
  shouldForwardProp,
  name: 'StyledFigureContainer',
})<FigureContainerProps>(({ $isSelected, $isDisabled, theme }) => {
  const stateColors = {
    default: {
      color: theme.palette.background.light,
      backgroundColor: 'transparent',
      hoverColor: theme.palette.general.secondaryText,
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.dark,
      hoverColor: theme.palette.background.dark,
    },
  }

  const currentStateColors = $isSelected ? stateColors.selected : stateColors.default
  const disabledStyles = $isDisabled ? disabledProperties : {}

  return {
    ...flexCenterStyles,
    ...disabledStyles,
    position: 'relative',
    minWidth: '2rem',
    height: '2rem',
    cursor: 'pointer',
    backgroundColor: currentStateColors.backgroundColor,
    color: currentStateColors.color,
    borderRadius: '1.5rem',
    transition: 'all 0.2s',
    '&:before': {
      content: "''",
      position: 'absolute',
      inset: -2,
      borderRadius: '50%',
      padding: '2px',
      background: theme.palette.general.border,
      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
    },

    '& svg *': {
      fill: currentStateColors.color,
      transition: 'color 0.2s',
    },

    '&:hover': {
      '@media(hover: hover) and (pointer: fine)': {
        color: currentStateColors.hoverColor,
        '&:before': {
          background: alpha(theme.palette.common.white, 0.05),
        },

        '& svg *': {
          fill: currentStateColors.hoverColor,
          transition: 'color 0.2s',
        },
      },
    },
  }
})

export const StyledMUIPagination = styled(Pagination, { name: 'StyledMUIPagination' })(({ theme }) => ({
  width: 'fit-content',

  '& .MuiPagination-ul': {
    flexWrap: 'nowrap',
    gap: '0.5rem',

    [theme.breakpoints.down('sm')]: {
      gap: '0.25rem',
    },
  },
}))

export const StyledArrowContainer = styled(Box, { name: 'StyledArrowContainer', shouldForwardProp })<{
  $rotate?: boolean
}>(({ $rotate }) => ({
  transform: $rotate ? 'rotate(180deg)' : 'initial',
  ...flexCenterStyles,
}))
