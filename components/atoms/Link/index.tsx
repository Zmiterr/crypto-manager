import NextLink from 'next/link'
import React, { ElementType, FC, ReactNode } from 'react'

import { StyledLink } from './styles'

export type Props = {
  children: ReactNode
  href?: string
  className?: string
  target?: string
  locale?: string | false
  component?: ElementType
}

/**
 * A versatile link component that supports routing in Next.js applications.
 *
 * The `Link` component is used to create links in Next.js applications, allowing for client-side navigation. It can render as a simple anchor link or a `NextLink` for improved performance when routing within the application. It accepts various props to customize the link's behavior and appearance.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {ReactNode} props.children - The content of the link, typically text or other elements.
 * @param {string} [props.href=''] - The URL to navigate to when the link is clicked.
 * @param {string} [props.className] - Additional CSS class name to apply to the link.
 * @param {string} [props.target] - The target attribute for the link, which specifies where to open the linked document.
 * @param {string | false} [props.locale] - The locale for the link when using Next.js internationalization. Set to `false` for no localization.
 * @param {ElementType} [props.component = 'span'] - HTML tag that wraps the link
 *
 * @returns {FC} The Link component, which can be a Next.js `NextLink` or a standard anchor link.
 */
const Link: FC<Props> = (props) => {
  const { children, href = '', className, target, locale, component = 'span' } = props

  if (href) {
    return (
      <NextLink href={href} locale={locale} className={className} target={target}>
        <StyledLink component={component} variant={'link'}>
          {children}
        </StyledLink>
      </NextLink>
    )
  }

  return (
    <StyledLink variant={'link'} className={className}>
      {children}
    </StyledLink>
  )
}

export default Link
