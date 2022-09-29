/// <reference types="cypress" />
import "cypress-localstorage-commands";

context("Actions", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Sign in Successful ", () => {
    cy.visit("http://localhost:3000");
    cy.get('[type="email"]').type("shashank.chutke@gmail.com");
    cy.get('[type="password"]').type("R!nkuj05");
    cy.get('[type="password"]').should("have.value", "R!nkuj05");
    cy.contains("Sign In").click();
    cy.contains("GPS").should("be.visible");
  });

  it('Table visible', () => {
      cy.get('.table_main').should('be.visible')
      cy.get('.d-inline-flex > :nth-child(3)').click().click().dblclick()
      cy.get('.mx-5').should('contain.text', '15 - 17 of 17')

  })

  it('paganition see next pages', () => {
      cy.get('.d-inline-flex > :nth-child(3)').click().click().dblclick()
      cy.get('.mx-5').should('contain.text', '15 - 17 of 17')

  })

  it('Pagination see previous pages', () => {
      cy.get('.d-inline-flex > :nth-child(2)').click().click().dblclick()
      cy.get('.mx-5').should('contain.text', '0 - 5 of 17')
  })

  it('Sorting of Device Type', () => {
      cy.get('#Type').click().click()
      cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)').should('not.have.text', 'Aircraft')
  })

  it('Searching of Device', () => {

      cy.get('.border').type('personal')
      cy.get('.mx-5').should('contain.text', '0 - 5 of 6')
      cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)').should('have.text', 'Personal')
      cy.get('.border').clear()
      cy.get('.border').type('1570')
      cy.get('[scope="row "]').should('have.text', 'D-1570')
      cy.get('.border').clear()

  })

  it("Searching of Device",  () => {
    cy.get(":nth-child(2) > .navigate1").click();
    cy.get('[role="img"]').should("be.visible");
  });
});
