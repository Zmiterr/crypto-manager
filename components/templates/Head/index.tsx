import NextHead from 'next/head'
import { FC } from 'react'
import { useIntl } from 'react-intl'

type Props = {
  title?: string
}

const Head: FC<Props> = ({ title }) => {
  const { formatMessage } = useIntl()

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      />
      <meta name="keywords" content="" />

      <meta property="og:title" content={formatMessage({ id: 'META.TITLE' })} />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="/" />
      <meta property="og:description" content={formatMessage({ id: 'META.DESCRIPTION' })} />
      <meta property="og:image" content="/images/meta_crypto-manager.png" />
      <meta property="og:image:type" content="image/png" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      <title>Crypto manager {title && ` | ${formatMessage({ id: title })}`}</title>
    </NextHead>
  )
}

export default Head
