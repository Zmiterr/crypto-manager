describe('Test User Login', () => {
  it('Connects with Metamask', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Connect MetaMask').click()
    cy.switchToMetamaskWindow()
    cy.acceptMetamaskAccess().should('be.true')
    cy.confirmMetamaskSignatureRequest()
    cy.switchToCypressWindow()
    cy.contains('Add Project').should('be.visible')
  })
})
