/// <reference types="cypress"/>

describe('APP Component', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    
    // need to change the email id every time before testing

    const first_name = 'first'
    const last_name = 'last'
    const email = 'abcd@gmail.com'
    const password = '123456'
    const wrong_password = 'akjdfhskdj'


    
    // need to change the email id every time before testing or comment out this test
    it('Sign up Successfull', () => {
        cy.get('.white_btn').click()
        cy.get('[placeholder="First Name"]').type(first_name)
        cy.get('[placeholder="Last Name"]').type(last_name)
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(password)
        cy.get('.green_btn').click()
        cy.get('.form_container > h1').should('have.text', 'Login to Your Account')
    })
    
    it('Sign in Successful ', () => {
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(password)
        cy.contains('Sign In').click()
        cy.contains('GPS').should('be.visible')
    })

    it('Wrong password', () => {
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(wrong_password)
        cy.contains('Sign In').click()
        cy.get('.error_msg').should('have.text', 'Invalid Password')
    })

    it('Email already exist error while signing up', () => {
        cy.get('.white_btn').click()

        cy.get('[placeholder="First Name"]').type(first_name)
        cy.get('[placeholder="Last Name"]').type(last_name)
        cy.get('[type="email"]').type(email)
        cy.get('[type="password"]').type(password)
        cy.contains('Sign Up').click()
        cy.get('.error_msg').should('have.text', 'User with given email alreay exists ')
    })


}
)
