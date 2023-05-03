import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";


describe('Verifying login functionality', () => {
  let url = 'https://www.xelerate.solutions/login'

  it('Should not allow user to login', () => {
    let username = 'abc'
    let password = 'abc'    
     cy.visit(url)
     cy.get('input[type= "text"]').type(username)
     cy.get('input[type= "password"]').type(password)
     // Click on Login button
     cy.get('button[type="button"]').contains('LOGIN').click().wait(1000)
     // writing assertion should have output credentials not valid
     cy.contains("Credentials not valid!").should("exist")
    //  cy.contains("Credentials not valid!").should("exist")

})
  
  
  it('Should allow user to login', () => {


        let username = 'farhan.qazi@invixible.com'
        let password = '@Test123'

        // let url = 'https://www.xelerate.solutions/login'
        //  cy.visit(url)
         cy.get('input[type= "text"]').clear().type(username)
         cy.get('input[type= "password"]').clear().type(password)
         // Click on login button
         cy.get('button[type="button"]').contains('LOGIN').click()
         .wait(1000)
        //  cy.contains('Solutions').should('be.visible')
        //  cy.get('selector').should('have.text', 'Farhan qazi')   
        url = cy.url() 
        
    })
  
  it('should run performance audits using custom thresholds', () => {
    // cy.visit(url)
      const customThresholds = {
        performance: 50,
        accessibility: 50,
        seo: 50,
        // 'first-contentful-paint': 2000,
        // 'largest-contentful-paint': 3000,
        // 'cumulative-layout-shift': 0.1,
        // 'total-blocking-time': 500,
      };  
      cy.lighthouse(customThresholds)
    })





  })