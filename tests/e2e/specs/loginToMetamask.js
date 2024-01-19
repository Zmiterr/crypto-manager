describe('Metamask Extension tests', () => {
  it('connect to DApp with Metamask extension example', () => {
    cy.visit('/')
    cy.get('#connectButton').click()
    cy.acceptMetamaskAccess().should('be.true')
    cy.get('#connectButton').should('have.text', 'Connected')
  })

  it('create transaction example', () => {
    cy.get('#sendButton').click()
    cy.confirmMetamaskTransaction().should('be.true')
  })

  it('confirm signature example', () => {
    cy.get('#personalSign').click()
    cy.confirmMetamaskSignatureRequest().should('be.true')
  })
})
