Feature: Solution Catalogue

    Xelerate Regression

    Scenario: Validating user can login. 
    Given User is on login page 
    When User Enters valid User name "USER_NAME"
    And Enters valid password "PASSWORD"
    And Clicks on submit button
    Then Should mavigate user to solution catalogue page

    Scenario: Validating user is able to navigate to soluiton Catalogue. 
    Given User is on login page
    When User Enters valid User name "USER_NAME"
    And Enters valid password "PASSWORD"
    And Clicks on submit button
    Then Should mavigate user to solution catalogue page