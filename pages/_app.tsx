import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { InitAppWrapper } from '@/hocs'
import I18nProvider from '@/lib/i18n/I18nProvider'
import { ThemeProvider } from '@/lib/theme'
import { store } from '@/store'

import { Head } from '@/components/templates'

import 'styles/index.scss'

const App = ({ Component, ...props }: AppProps) => {
  return (
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
  )
}

export default App
