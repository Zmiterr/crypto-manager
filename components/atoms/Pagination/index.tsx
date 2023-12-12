import { PaginationProps, PaginationRenderItemParams, Typography } from '@mui/material'
import { FC, PropsWithChildren, ReactEventHandler } from 'react'

import { useMediaQuery } from '@/lib/theme'
import { ArrowRightIcon } from '@/public/icons'

import { StyledArrowContainer, StyledFigureContainer, StyledMUIPagination } from './styles'

export type Props = {
  count: number
  page: number
  onChange: (page: number) => void
  isDisabled?: boolean
  className?: string
} & PaginationProps

const Pagination: FC<Props> = ({ count, page, onChange, className, isDisabled }) => {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <StyledMUIPagination
      disabled={isDisabled}
      className={className}
      siblingCount={isSm ? 0 : 1}
      count={count}
      page={page}
      onChange={(_, page) => onChange(page)}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  )
}

const PaginationItem = ({ page, type, ...restProps }: PaginationRenderItemParams) => {
  if (['next', 'previous'].includes(type) && restProps.disabled) {
    return <Arrows type={type} isDisabled {...restProps} />
  }

  if (['end-ellipsis', 'start-ellipsis'].includes(type)) {
    return (
      <Typography variant={'subtitle1'} color={'neutrals.secondaryText'}>
        . . .
      </Typography>
    )
  }

  if (type === 'page') {
    return (
      <Figure {...restProps}>
        <Typography variant="subtitle2" fontWeight={restProps.selected ? 500 : 400}>
          {page}
        </Typography>
      </Figure>
    )
  }

  if (type === 'previous' || type === 'next') {
    return <Arrows type={type} {...restProps} />
  }
}

type FigureProps = PropsWithChildren & {
  selected?: boolean
  onClick?: ReactEventHandler
  isDisabled?: boolean
}

const Figure: FC<FigureProps> = ({ children, onClick, selected, isDisabled }) => {
  return (
    <StyledFigureContainer onClick={onClick} $isSelected={selected} $isDisabled={isDisabled}>
      {children}
    </StyledFigureContainer>
  )
}

type ArrowsProps = {
  type: PaginationRenderItemParams['type']
  isDisabled?: boolean
}
const Arrows: FC<ArrowsProps> = ({ type, isDisabled, ...restProps }) => (
  <Figure {...restProps} isDisabled={isDisabled}>
    <StyledArrowContainer $rotate={type === 'previous'}>
      <ArrowRightIcon />
    </StyledArrowContainer>
  </Figure>
)

export default Pagination
