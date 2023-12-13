import { Stack } from '@mui/material'

import { formatBalance, formatChainAsNum } from '@/helpers'
import { useMetaMask } from '@/hooks/useMetamask'

import { Block } from '@/components/molecules'
import { Layout, Page } from '@/components/templates'

const Home = () => {
  const { wallet, error, errorMessage, clearError } = useMetaMask()

  return (
    <Page title="SUMMARY.MAIN">
      <Layout>
        <Stack maxWidth={'30rem'} justifyContent={'center'} alignItems={'center'}>
          {wallet.accounts.length > 0 && (
            <Block gap={'2rem'}>
              <Stack gap={'2rem'}>
                <div>Wallet Accounts: {wallet.accounts[0]}</div>
                <div>Wallet Balance: {formatBalance(wallet.balance)}</div>
                <div>Hex ChainId: {wallet.chainId}</div>
                <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
              </Stack>
            </Block>
          )}
          {error && (
            <div onClick={clearError}>
              <strong>Error:</strong> {errorMessage}
            </div>
          )}
        </Stack>
      </Layout>
    </Page>
  )
}

export default Home
