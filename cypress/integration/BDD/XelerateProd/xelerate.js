import { Given , When , And, Then } from "cypress-cucumber-preprocessor/steps";
import BrandingPage from "../../PageObject/BrandingPage";
import LoginPage from "../../PageObject/LoginPage";
import SolutionsPage from "../../PageObject/SolutionsPage";

let branding = new BrandingPage()
let login = new LoginPage()
let solutionsPage =  new SolutionsPage()

Given('User is on login page' , ()=> {
    login.navigate()
})

When('User Enters valid User name {string}', username => {
    const value =  Cypress.env(username)
    login.enterEmail(value)
})

And('Enters valid password {string}', password => {

    const value = Cypress.env(password)

    login.enterPassword(value)
})

And('Clicks on submit button', ()=> { 
    login.submit()
})

Then('Should mavigate user to solution catalogue page', ()=> {
    // solutionsPage.pagetitle('Solution Catalogue')
})
