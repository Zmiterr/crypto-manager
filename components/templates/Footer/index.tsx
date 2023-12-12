import { Typography } from '@mui/material'

import { StyledFooter } from './styles'

type Props = {
  className?: string
}

const Footer = ({ className }: Props) => {
  const year = new Date().getFullYear()

  return (
    <StyledFooter className={className}>
      <div className="main">
        <Typography variant="subtitle1" color="neutrals.light">
          © {year}
        </Typography>
      </div>
    </StyledFooter>
  )
}

export default Footer
