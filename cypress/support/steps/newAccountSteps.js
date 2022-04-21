/* global Given, Then, When */

import baseMethod from '../pageObject/basePage'
import newAccount from '../pageObject/newAccountPage'
import phonePage from '../pageObject/verifyPhonePage'


Given("The user access the gmail on browser", () => {
    baseMethod.openUrl();
})

When("access the link create a new account", () => {
    newAccount.clickOnCreateNewAccount();
    newAccount.fieldPersonAccount();
})

And("fill in the data correctly in the form", () => {
    newAccount.fillFormCreateNewAccount();
})

And("fill data on verify your number form correctly", () => {
    phonePage.fillFormPhone()
})

And("fill verification code correctly", () => {
    cy.log('')
})

And("fill personal information on welcome form", () => {
    cy.log('')
})

And("agree with Privacy & Terms", () => {
    cy.log('')
})

Then("the user will be able to acess email and google resources", () => {
    cy.log('')
})