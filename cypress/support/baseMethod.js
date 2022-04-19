/// <reference types="cypress" />

class CypressMethods {
    
    openUrl(url) {
    cy.visit('/')
    }

    getElement(element) {
    return cy.get(element);
    }

    typeElement(element, value) {
      cy.get(element).type(value)
    }

    clickButton(element) {
      cy.get(element).click()
    }

    enter(element) {
      cy.get(element).click('{enter}')
    }

    containsValueClick(element){
        cy.contains(element).click();
    }

    containsValueClick(element){
      cy.contains(element).should('be.checked');
  }

  doubleClick(element) {
    cy.get(element).dblclick();
  }
  
  rightClick(element) {
    cy.get(element).rightclick();
  }

  clickMe(element){
    cy.get(element).eq(3).click();
  }

  }
  
  const cypressMethods = new CypressMethods();
  export default cypressMethods;
  