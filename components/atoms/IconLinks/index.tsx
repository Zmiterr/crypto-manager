import { FC } from 'react'

import { StyledLinks } from './styles'

export type LinkContent = {
  target?: string
  Icon?: FC
  href?: string
}

export type Props = {
  links: LinkContent[]
}

/**
 * A component that renders a list of links with associated icons.
 *
 * The `IconLinks` component is used to display a list of links, each with an optional associated icon. It is often used to create social media or external links in a user interface.
 *
 * @component
 *
 * @param {Props} props - The props for the component.
 * @param {LinkContent[]} props.links - An array of link content objects, each defining a link's properties.
 *
 * @returns {FC} The IconLinks component displaying the list of links.
 */
const IconLinks: FC<Props> = ({ links }) => {
  return (
    <StyledLinks>
      {links.map(({ Icon, href, target }, index) => {
        return (
          <a href={href} key={`IconLinks-${index}`} className="link" target={target || '_blank'}>
            {Icon && <Icon />}
          </a>
        )
      })}
    </StyledLinks>
  )
}

export default IconLinks
