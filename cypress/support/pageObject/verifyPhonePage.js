import cybaseMethod from './basePage';
import * as elementNewAccount from '../elements/newAccountElement'
import * as baseElement from '../elements/baseElements'
import * as data from '../dataDriven/datatest';
import {randomTelephoneNumber} from '../dataDriven/generateData';
const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });



class phonePage {

    fillFormPhone(){
        cybaseMethod.typeElement(baseElement.telefone, randomTelephoneNumber)
        cybaseMethod.clickButton(baseElement.buttonNext);
    }

   

}

const phoneForm = new phonePage();
export default phoneForm;