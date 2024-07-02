describe('Negative Username Test',()=>{
    it('Verify Login With Given Positive and Negative Cases',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input[name="username"]').type("incorrectUser")
        cy.get('input[name="password"]').type("Password123")
        cy.get('.btn').click()
        cy.get('div[id="error"]').should('be.visible')
        cy.get('div[id="error"]').should('have.text','Your username is invalid!')
    })

}
)