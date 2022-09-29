/// <reference types="cypress"/>

describe('APP Component', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })


    
    it('Sign in Successful ', () => {
        cy.get('[type="email"]').type('shashank.chutke@gmail.com')
        cy.get('[type="password"]').type('R!nkuj05')
        cy.get('[type="password"]').should('have.value', 'R!nkuj05')
        cy.contains('Sign In').click()
        cy.contains('GPS').should('be.visible')
    })


    

    // // need to change the email id every time before testing

    // it('Sign up Successfull', () => {
    //     cy.get('.white_btn').click()

    //     cy.get('[placeholder="First Name"]').type('shashank')
    //     cy.get('[placeholder="Last Name"]').type('C')
    //     cy.get('[type="email"]').type('shashank@gmail.com')
    //     cy.get('[type="password"]').type('rinkuj')
    //     cy.get('.green_btn').click()
    //     cy.get('.form_container > h1').should('have.text', 'Login to Your Account')
    // })

    it('Email already exist error while signing up', () => {
        cy.get('.white_btn').click()

        cy.get('[placeholder="First Name"]').type('shashank')
        cy.get('[placeholder="Last Name"]').type('C')
        cy.get('[type="email"]').type('shashank@gmail.com')
        cy.get('[type="password"]').type('rinkuj')
        cy.contains('Sign Up').click()
        cy.get('.error_msg').should('have.text', 'User with given email alreay exists ')
    })


}
)