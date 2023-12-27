import { Stack, Typography } from '@mui/material'

import { formatBalance, formatChainAsNum } from '@/helpers'
import { useMetaMask } from '@/hooks/useMetamask'

import { Block } from '@/components/molecules'

const WalletInfo = () => {
  const { wallet, error, errorMessage, clearError } = useMetaMask()

  return (
    <Stack maxWidth={'30rem'} justifyContent={'center'} alignItems={'center'}>
      {wallet.accounts.length > 0 && (
        <Block gap={'2rem'} title={'Wallet info'}>
          <Stack gap={'2rem'}>
            <Typography variant="body1" color={'general.secondaryText'}>
              Wallet Accounts:{' '}
              <Typography component={'span'} variant="body2" color={'background.light'}>
                {wallet.accounts[0]}
              </Typography>
            </Typography>
            <Typography variant="body1" color={'general.secondaryText'}>
              Wallet Balance:{' '}
              <Typography component={'span'} variant="body2" color={'background.light'}>
                {formatBalance(wallet.balance)}
              </Typography>
            </Typography>
            <Typography variant="body1" color={'general.secondaryText'}>
              Hex ChainId:{' '}
              <Typography component={'span'} variant="body2" color={'background.light'}>
                {wallet.chainId}
              </Typography>
            </Typography>
            <Typography variant="body1" color={'general.secondaryText'}>
              Numeric ChainId:{' '}
              <Typography component={'span'} variant="body2" color={'background.light'}>
                {formatChainAsNum(wallet.chainId)}
              </Typography>
            </Typography>
          </Stack>
        </Block>
      )}
      {error && (
        <div onClick={clearError}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
    </Stack>
  )
}

export default WalletInfo
