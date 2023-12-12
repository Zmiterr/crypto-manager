import React from 'react'

import { Page } from '@/components/templates'

import { StyledNotFoundWrapper } from './styles'

//TODO: make 404 page
const NotFoundTemplate = () => (
  <Page title="NOT_FOUND.PAGE_NOT_FOUND">
    <StyledNotFoundWrapper>
      <div className={'main'}>404</div>
    </StyledNotFoundWrapper>
  </Page>
)

export default NotFoundTemplate
