import { Box, StackProps, SxProps, Typography } from '@mui/material'
import React, { FC, PropsWithChildren, ReactElement } from 'react'
import { FormattedMessage } from 'react-intl'

import { useIntlHelpers } from '@/lib/i18n'

import { Loader } from '@/components/atoms'

import { StyledBlock } from './styles'

export type Props = PropsWithChildren<{
  isLoading?: boolean
  /** @type {FormattedMessageId | ReactElement} */
  title?: string | ReactElement
  className?: string
  titleSx?: SxProps
}> &
  Omit<StackProps, 'title'>

const Block: FC<Props> = ({ title, children, className, isLoading, titleSx, ...props }) => {
  const { isFormattedMessageId } = useIntlHelpers()

  return (
    <StyledBlock className={className} {...props}>
      {title && (
        <Box className={'blockTitleContainer'} sx={titleSx}>
          {isFormattedMessageId(title) ? (
            <Typography variant={'h4'} color={'background.light'}>
              <FormattedMessage id={title} />
            </Typography>
          ) : (
            title
          )}
        </Box>
      )}
      <Box className={'blockChildren'}>{children}</Box>
      {isLoading && <Loader />}
    </StyledBlock>
  )
}

export default Block
