import cybaseMethod from './basePage';
import * as elementNewAccount from '../elements/newAccountElement'
import * as baseElement from '../elements/baseElements'
import * as data from '../dataDriven/datatest';
import { randomNumber } from '../dataDriven/generateData';
const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });



class newAccount {

    clickOnCreateNewAccount() {
        cybaseMethod.clickLastButton(baseElement.buttonCreateNewAccount)
    }


    fillFormCreateNewAccount() {

        cybaseMethod.typeElement(elementNewAccount.field.name, data.name + randomNumber(10))
        cybaseMethod.typeElement(elementNewAccount.field.lastname, data.lastName)
        cybaseMethod.typeElement(elementNewAccount.field.email, data.email + randomNumber(10))
        cy.log("ENV VALUE ==> " + process.env.PASSWORD)
        cybaseMethod.typeElement(elementNewAccount.field.password, data.password)

        cybaseMethod.typeElement(elementNewAccount.field.confirmPassword, data.confirmPassword)
        cybaseMethod.clickButton(elementNewAccount.field.buttonNext);

    }

    fieldPersonAccount() {
        cybaseMethod.ifExistElement(baseElement.fieldPersonalAccountfor, baseElement.choosePersonalaccountfor)
    }

}

const newAccountPage = new newAccount();
export default newAccountPage;