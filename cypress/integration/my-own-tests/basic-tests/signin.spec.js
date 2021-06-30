describe('basic login/create user features work',()=>{
    
     it('Path to Join now Page works',()=>{
        cy.contains("Join now").click()
        cy.url().should('include','/signup')
        cy.contains("button","Agree & Join").should("exist")
        cy.contains("button","Join with Google").should("exist")
     })

})