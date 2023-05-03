/// <reference types = "cypress"/>

import LoginPage from "../PageObject/LoginPage"
import SolutionPage from "../PageObject/SolutionPage"
import Performance from "../PageObject/Performance"

describe('Verifying login functionality', () => {
    let username = 'umer.fraz@invixible.com'
    let pswd = 'Inx_2022!'
    let url = "https://www.three.xelerate.solutions/login"
    let login = new LoginPage()
    let solution =  new SolutionPage()
    let performance = new Performance()
  

  beforeEach(() => {    
    login.login(username,pswd,url)
  })  
  
  it('Solution loading', () => {
    cy.wait(2000)
    let servicesName = ["Straddle Carrier Monitoring", "Smart Container Tracking","Smart Worker Safety","Smart Tank Monitoring","Air Quality Monitoring","Assembly Line Monitoring","Conveyor Belt Monitoring","Gas Chillers Monitoring","Smart Security and Access","Retail Cold Chain"]
    servicesName.forEach((elment) => {
      solution.shouldVisible(elment)
      cy.wait(1000)
    })
    // solution.shouldVisible("Straddle Carrier Monitoring")
  })

  it('Tags Filters', () =>{
    solution.clickOnFilter()
  })

  // it('Perfromance test' , () =>{
    
  //   const customThresholds = {
  //     performance: 50,
  //     accessibility: 50,
  //     seo: 50
  // };

  //  performance.Lighthouse(customThresholds)
  
  // })
    
      


//  it('should run performance audits using custom thresholds', () => {
//       const customThresholds = {
//         performance: 50,
//         accessibility: 50,
//         seo: 50,
//         // 'first-contentful-paint': 2000,
//         // 'largest-contentful-paint': 3000,
//         // 'cumulative-layout-shift': 0.1,
//         // 'total-blocking-time': 500,
//       };  
//       cy.lighthouse(customThresholds)
//     })




})