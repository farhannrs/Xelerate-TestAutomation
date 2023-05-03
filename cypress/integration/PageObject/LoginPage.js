class LoginPage{

    navigate() {
        cy.visit('https://www.e2e.xelerate.solutions/solutions')    
    }
    enterEmail(username){
        cy.get('[id=userName]').clear().type(username)
        return this
    }

    enterPassword(pswd){
        cy.get('[type=password]').clear().type(pswd)
        return this
    }
    submit(){
        cy.get('button[type=submit]').click()
    }

    login(){

        cy.visit('https://www.e2e.xelerate.solutions/solutions')    
        cy.get('input[id=userName]').type('farhan.qazi.invixible@gmail.com')
        cy.get('input[id=password]').type('@Test123')
        cy.get('button[type=submit]').click()

        // cy.get('[id=userName]').clear().type(Cypress.env("userName"))
        // cy.get('[type=password]').clear().type(Cypress.enenv("password"))
        // cy.get('[type=submit]').contains('Login').click()
        // cy.wait(5000)
    
    }
 
    
}


export default LoginPage
