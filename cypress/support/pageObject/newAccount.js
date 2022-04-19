import cybaseMethod from '../baseMethod';
import * as data from '../dataDriven/datatest';
import {randomNumber} from '../dataDriven/generateData';

class newAccount {

    element= {
        name :'.firstName',
        lastname : '.lastName',
        email : '.username',
        password : '[name="Passwd"]',
        confirmPassword : '[name="ConfirmPasswd"]',
        buttonNext: '.accountDetailsNext'
    }

    fillFormCreateNewAccount(){

        cybaseMethod.typeElement(this.element.name, data.name+randomNumber())
        cybaseMethod.typeElement(this.element.lastname, data.lastName)
        cybaseMethod.typeElement(this.element.email, data.email+randomNumber())
        cybaseMethod.typeElement(this.element.password, data.password)
        cybaseMethod.typeElement(this.element.confirmPassword, data.confirmPassword)
        cybaseMethod.clickButton(buttonNext);

    }

}

const newAccountPage = new newAccount();
export default newAccountPage;