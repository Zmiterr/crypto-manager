import { Box } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'

import Header from '../Header'
import { StyledLayout, StyledMainContent } from './styles'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledMainContent>
        <Header />
        <Box className="children">{children}</Box>
      </StyledMainContent>
    </StyledLayout>
  )
}

export default Layout
