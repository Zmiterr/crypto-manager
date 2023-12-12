import { Accordion, AccordionDetails, AccordionSummary, Box, styled } from '@mui/material'

import { shouldForwardProp } from '@/helpers'

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp,
  name: 'StyledAccordion',
})<{ $backgroundColor?: string }>(({ theme, $backgroundColor = 'intial' }) => {
  return {
    '&.MuiAccordion-root': {
      boxShadow: 'none',
      color: 'initial',
      padding: '1rem',
      marginTop: 0,
      borderRadius: 0,
      backgroundColor: $backgroundColor,

      '&.Mui-expanded': {
        margin: 0,
      },

      [theme.breakpoints.down('lg')]: {
        padding: '1rem 1.5rem',
      },

      [theme.breakpoints.down('md')]: {
        padding: '1rem',
      },
    },

    '&.MuiAccordion-root:not(.Mui-expanded):not(.hasUnexpandedDetails)': {
      paddingBottom: 0,
    },

    '&.MuiAccordion-root:before': {
      display: 'none',
    },
  }
})

export const StyledAccordionSummary = styled(AccordionSummary, { name: 'StyledAccordionSummary' })(() => ({
  boxShadow: 'none',

  '&.MuiAccordionSummary-root': {
    minHeight: 0,
    padding: 0,
  },

  '& .MuiAccordionSummary-content': {
    margin: 0,

    '&.Mui-expanded': {
      margin: 0,
    },
  },
}))

export const StyledAccordionDetails = styled(AccordionDetails, { name: 'StyledAccordionDetails' })(() => ({
  padding: 0,
}))

export const StyledExpandIconContainer = styled(Box, { name: 'StyledExpandIconContainer' })(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  margin: '-0.5rem',

  '& svg path': {
    stroke: theme.palette.common.white,
  },
}))
