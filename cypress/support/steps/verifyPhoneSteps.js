/* global Given, Then, When */

import baseMethod from '../pageObject/basePage'
import newAccount from '../pageObject/newAccountPage'
import phonePage from '../pageObject/verifyPhonePage'

And("fill data on verify your number form correctly", () => {
    phonePage.fillFormPhone()
})

And("fill verification code correctly", () => {
    cy.log('Doesnt have steps for this line')
})

And("fill personal information on welcome form", () => {
    cy.log('Doesnt have steps for this line')
})

And("agree with Privacy & Terms", () => {
    cy.log('Doesnt have steps for this line')
})

Then("the user will be able to acess email and google resources", () => {
    cy.log('Doesnt have steps for this line')
})