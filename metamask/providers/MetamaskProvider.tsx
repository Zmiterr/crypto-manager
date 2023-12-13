import detectEthereumProvider from '@metamask/detect-provider'
import { BrowserProvider, Eip1193Provider } from 'ethers'
import React, { createContext, type PropsWithChildren, useContext, useState } from 'react'

import { useEffectOnce } from '@/hooks'

type State = {
  hasAccess: boolean
  isLoading: boolean
  metamaskProvider: Eip1193Provider | null
  provider: BrowserProvider | null
}

const MetamaskContext = createContext<State | undefined>(undefined)

function MetamaskProvider({ children }: PropsWithChildren) {
  const [hasAccess, setAccess] = useState(false)
  const [metamaskProvider, setMetamaskProvider] = useState<Eip1193Provider | null>(null)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleEthereum = async () => {
    try {
      const metamaskProvider = await detectEthereumProvider<Eip1193Provider>({ mustBeMetaMask: true })

      if (metamaskProvider && metamaskProvider === window.ethereum) {
        const provider = new BrowserProvider(metamaskProvider)

        setMetamaskProvider(metamaskProvider)
        setProvider(provider)
        setAccess(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffectOnce(() => {
    try {
      window && handleEthereum()
    } catch (err) {
      setIsLoading(false)
    }
  })

  return (
    <MetamaskContext.Provider value={{ metamaskProvider, hasAccess, isLoading, provider }}>
      {children}
    </MetamaskContext.Provider>
  )
}

function useMetamaskProvider() {
  const context = useContext(MetamaskContext)

  if (context === undefined) {
    throw new Error('useMetamaskProvider must be used within a MetamaskProvider')
  }
  return context
}

export { MetamaskProvider, useMetamaskProvider }
