/// <reference types="cypress" />

class CypressMethods {

  openUrl(url) {
    cy.clearCookies();
    cy.clearLocalStorage();
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

  clickLastButton(element) {
    cy.get(element).last().click();
  }

  ifExistElement(element, element2) {
    cy.get("body").then($body => {
      if ($body.find(element).length > 0) {
        cy.get(element2).click()
      }
    });
  }

  ifExistButton(element, element2) {
    cy.wait(20000);
    cy.get("body").then($body => {
      if ($body.find(element).length > 0) {
        cy.contains(element).click()
      }
      else {
        cy.contains(element2).click()
      }

    });
  }

  ifElementIsVisible(element) {
    cy.get(element).should('be.visible')
  }

}

const cypressMethods = new CypressMethods();
export default cypressMethods;
