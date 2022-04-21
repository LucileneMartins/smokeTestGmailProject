/* global Given, Then, When */

import baseMethod from '../pageObject/basePage'
import newAccount from '../pageObject/newAccountPage'

Given("The user access the gmail on browser", () => {
    baseMethod.openUrl();
})

When("access the link create a new account", () => {
    newAccount.clickOnCreateNewAccount();
    //newAccount.fieldPersonAccount();
})

And("fill in the data correctly in the form", () => {
    newAccount.fillFormCreateNewAccount();
})

And("fill data on verify your number form correctly", () => {
    cy.log("Doesnt have steps in  here")
})

And("fill verification code correctly", () => {
    cy.log("Doesnt have steps in  here")
})

And("fill personal information on welcome form", () => {
    cy.log("Doesnt have steps in  here")
})

And("link your phone number at your google account", () => {
    cy.log("Doesnt have steps in  here")
})

And("agree with Privacy & Terms", () => {
    cy.log("Doesnt have steps in  here")
})

Then("the user will be able to acess email and google resources", () => {
    cy.log("Doesnt have steps in  here")
})


