import React, { FC, PropsWithChildren } from 'react'

import Head from '../Head'

type Props = {
  title?: string
} & PropsWithChildren

// TODO: add default title
const Page: FC<Props> = ({ children, title = '' }) => {
  return (
    <>
      <Head title={title} />
      <noscript>no script</noscript>
      {children}
    </>
  )
}

export default Page
