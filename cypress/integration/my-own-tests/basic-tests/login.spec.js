/// <reference types="cypress" />

describe('basic website features',()=>{

    it('Webpage Loads',()=>{
       cy.visit('https://linkedin.com') 
    })
})


describe('basic login/create user features work',()=>{

    it('Path to Login Page Works',()=>{
        cy.contains("Sign in").click()
        cy.url().should('include','/login')
        cy.contains("button","Sign in").should("exist")
    
     })

     it('Path to Join now Page works',()=>{
        cy.contains("Join now").click()
        cy.url().should('include','/signup')
        cy.contains("button","Agree & Join").should("exist")
        cy.contains("button","Join with Google").should("exist")
     })


     it('Path to Rest Password Works',()=>{
        cy.contains("Sign in").click()
        cy.url().should('include','/login')
        cy.contains("button","Sign in").should("exist")
        cy.contains("password").click()
        cy.url().should('include','/')
     })
})