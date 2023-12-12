import { Box } from '@mui/material'
import clsx from 'clsx'
import { FC, useState } from 'react'

import { ArrowRightIcon } from '@/public/icons'

import { Divider } from '@/components/atoms'

import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary, StyledExpandIconContainer } from './styles'

export type Props = {
  headerSlot: JSX.Element
  detailsSlot: JSX.Element
  unexpandedDetailsSlot?: JSX.Element | null
  backgroundColor?: string
}

/**
 * A customizable Accordion component for expanding and collapsing content.
 *
 * The `Accordion` component can display a header slot and a details slot that can be expanded and collapsed.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {JSX.Element} props.headerSlot - The element to be displayed in the header section of the Accordion.
 * @param {JSX.Element} props.detailsSlot - The element to be displayed in the details section of the Accordion.
 * @param {JSX.Element|null} [props.unexpandedDetailsSlot] - An optional element to be displayed in the details section when the Accordion is not expanded.
 * @param {string} [props.backgroundColor] - The background color of the Accordion.
 *
 * @returns {FC} The Accordion component.
 */
const Accordion: FC<Props> = ({ headerSlot, detailsSlot, unexpandedDetailsSlot, backgroundColor }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <StyledAccordion
      className={clsx({ hasUnexpandedDetails: unexpandedDetailsSlot })}
      $backgroundColor={backgroundColor}
      expanded={expanded}
    >
      <Box>
        <StyledAccordionSummary
          expandIcon={
            <StyledExpandIconContainer onClick={() => setExpanded((expanded) => !expanded)}>
              <ArrowRightIcon />
            </StyledExpandIconContainer>
          }
        >
          {headerSlot}
        </StyledAccordionSummary>
        <Divider sx={{ mt: '0.75rem' }} />
        {unexpandedDetailsSlot}
      </Box>
      <StyledAccordionDetails>{detailsSlot}</StyledAccordionDetails>
    </StyledAccordion>
  )
}

export default Accordion
