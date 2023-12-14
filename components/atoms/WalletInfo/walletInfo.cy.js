import * as MetaMaskModule from '../../../hooks/useMetamask'
import WalletInfo from './index.tsx'

describe('WalletInfo component', () => {
  const mockMetaMaskData = {
    wallet: {
      accounts: [
        '0xbc81830f04cec5b0807e92a57a6de4604668e913',
        '0xe2033387499f5629856d325e39a2b0c5ffa4988c',
        '0xf7746da9d9f63407ba4248cc4e1ee0380a999751',
      ],
      balance: '0xa3873242942ca7f',
      chainId: '0x61',
    },
    hasProvider: true,
    error: false,
    errorMessage: '',
    isConnecting: false,
  }

  beforeEach(() => {
    // Mock the useMetaMask hook to return the provided data
    cy.stub(MetaMaskModule, 'useMetaMask').returns(mockMetaMaskData)

    // Visit the page with the WalletInfo component
    // Mount the WalletInfo component with the mock data
    cy.mount(<WalletInfo />)
  })

  it('displays wallet information', () => {
    // Assert that the wallet information is displayed correctly
    cy.get('[data-testid=wallet-accounts]').should('contain.text', 'Wallet Accounts:')
    cy.get('[data-testid=wallet-balance]').should('contain.text', 'Wallet Balance:')
    cy.get('[data-testid=hex-chainId]').should('contain.text', 'Hex ChainId:')
    cy.get('[data-testid=numeric-chainId]').should('contain.text', 'Numeric ChainId:')
  })

  it('displays error message on error', () => {
    // Modify the mock data to simulate an error
    mockMetaMaskData.error = true
    mockMetaMaskData.errorMessage = 'Simulated error message'

    // Assert that the error message is displayed
    cy.get('[data-testid=error-message]').should('contain.text', 'Error:')
  })
})
