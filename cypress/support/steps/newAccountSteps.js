/* global Given, Then, When */

import baseMethod from '../pageObject/basePage'
import newAccount from '../pageObject/newAccountPage'


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

And("fill all data on 'verify your number' form correctly", () => {
    console.log("Entrei no And 2 ")
})

// Then("fill all data on 'verify your number' form  correctly", () => {
//     loginPage.visualizarBotaoRecuperarSenha();
// })