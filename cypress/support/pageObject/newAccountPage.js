import cybaseMethod from './basePage';
import * as elementNewAccount from '../elements/newAccountElement'
import * as baseElement from '../elements/baseElements'
import * as data from '../dataDriven/datatest';
import { randomNumber } from '../dataDriven/generateData';

class newAccount {

    clickOnCreateNewAccount() {
        cybaseMethod.ifExistButton("Create an account", "Criar")

    }


    fillFormCreateNewAccount() {

        cybaseMethod.typeElement(elementNewAccount.field.name, data.name + randomNumber(10))
        cybaseMethod.typeElement(elementNewAccount.field.lastname, data.lastName)
        cybaseMethod.typeElement(elementNewAccount.field.email, data.email + randomNumber(10))
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