import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { InitAppWrapper } from '@/hocs'
import { MetaMaskContextProvider } from '@/hooks/useMetamask'
import I18nProvider from '@/lib/i18n/I18nProvider'
import { ThemeProvider } from '@/lib/theme'
import { MetamaskProvider } from '@/metamask/providers'
import { store } from '@/store'

import { Head } from '@/components/templates'

import 'styles/index.scss'

const App = ({ Component, ...props }: AppProps) => {
  return (
    <MetamaskProvider>
      <MetaMaskContextProvider>
        <ThemeProvider>
          <Provider store={store}>
            <I18nProvider>
              <Head />
              <InitAppWrapper>
                <Component {...props} />
              </InitAppWrapper>
            </I18nProvider>
          </Provider>
        </ThemeProvider>
      </MetaMaskContextProvider>
    </MetamaskProvider>
  )
}

export default App
