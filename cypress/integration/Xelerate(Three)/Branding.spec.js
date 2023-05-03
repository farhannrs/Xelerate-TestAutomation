describe('validating branding functionality', () => {
  let url = 'https://www.three.xelerate.solutions/login'

    it('Should login', () => { 
  
        let username = 'umer.fraz@invixible.com'
        let password = 'Inx_2022!'      
      // Vsist url
       cy.visit(url)
       // Enter username
       cy.get('input[type= "text"]').type(username)
       // Enter password
       cy.get('input[type= "password"]').type(password)
       // Click on Login button
       cy.get('button[type="button"]').contains('LOGIN').click()
       url = cy.url()

  })


  it('Should have logo with title xelerate', () => {    
    // Click on settings
    cy.get('path[d = "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"]').click()
    // Click on settings
    cy.get('p[class= "title"]').contains('Settings').click()
    // validate logo title
    cy.get('a[href = "/services"]')
    .children()
    .invoke('attr', 'src')
    .should('include','xelerate')
  })  
})