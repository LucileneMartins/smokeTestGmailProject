import cybaseMethod from './basePage';
import * as baseElement from '../elements/baseElements'
import { randomTelephoneNumber } from '../dataDriven/generateData';


class phonePage {

    verifyIfPageIsVisible() {
        cybaseMethod.ifElementIsVisible(baseElement.pagePhone)
    }

    fillFormPhone() {
        cybaseMethod.typeElement(baseElement.telefone, randomTelephoneNumber())
        cybaseMethod.clickButton(baseElement.buttonNext);
    }

}

const phoneForm = new phonePage();
export default phoneForm;