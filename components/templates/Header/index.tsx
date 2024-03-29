import { Stack, styled } from '@mui/material'

import { formatAddress } from '@/helpers'
import { useMetaMask } from '@/hooks/useMetamask'
import { useMediaQuery } from '@/lib/theme'
import { LogoDesktop, LogoMobile } from '@/public/icons'

import { Button, Link } from '@/components/atoms'

const StyledHeader = styled('header', { name: 'StyledHeader' })(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 4rem',
}))

type Props = { className?: string }

const Header = ({ className }: Props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()

  const isConnected = wallet.accounts.length > 0

  return (
    <StyledHeader className={className}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
        {isMobile ? <LogoMobile /> : <LogoDesktop />}
        <Stack direction={'row'}>
          {!hasProvider && (
            <Link component={'a'} href="https://metamask.io" target="_blank">
              Install MetaMask
            </Link>
          )}
          {window.ethereum?.isMetaMask && (
            <Button variant={'secondary'} id="connectButton" isDisabled={isConnecting} onClick={connectMetaMask}>
              {isConnected ? 'Connected' : 'Connect MetaMask'}
            </Button>
          )}
          {hasProvider && isConnected && (
            <Link>
              <a
                href={`https://bscscan.com/address/${wallet.accounts[0]}`}
                target="_blank"
                data-tooltip="Open in Block Explorer"
                rel="noreferrer"
              >
                {formatAddress(wallet.accounts[0])}
              </a>
            </Link>
          )}
        </Stack>
      </Stack>
    </StyledHeader>
  )
}

export default Header
