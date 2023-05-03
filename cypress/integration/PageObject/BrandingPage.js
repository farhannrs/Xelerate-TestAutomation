// import cypress from "cypress"
import LoginPage from "../PageObject/LoginPage"
import SolutionPage from "./SolutionsPage"
let login = new LoginPage()
let solutionCatalouge = new SolutionPage()
// let email = process.env.USER_NAME
// let password = process.env.password


class BrandingPage{
    
    navigate() {
        login.login()
        solutionCatalouge.clickOndrawer()
        solutionCatalouge.clickOnSettings()
        // login.enterEmail(Cypress.env("userName"))
        // login.enterPassword(Cypress.env("password"))    
        // solutionCatalouge.clickOndrawer()
    }

    selectPrimaryColor(){
        
    }

}

//new file
export default BrandingPage