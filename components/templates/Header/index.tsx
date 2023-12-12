import { styled } from '@mui/material'

import { useMediaQuery } from '@/lib/theme'
import { LogoDesktop, LogoMobile } from '@/public/icons'

const StyledHeader = styled('header', { name: 'StyledHeader' })(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 4rem',
}))

type Props = { className?: string }

const Header = ({ className }: Props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return <StyledHeader className={className}>{isMobile ? <LogoMobile /> : <LogoDesktop />}</StyledHeader>
}

export default Header
