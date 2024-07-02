describe('Negative Password Test',()=>{
    it('Verify Login With Given Positive and Negative Cases',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.get('input[name="username"]').type("student")
        cy.get('input[name="password"]').type(" incorrectPassword")
        cy.get('.btn').click()
        cy.get('div[id="error"]').should('be.visible')
        cy.get('div[id="error"]').should('have.text','Your password is invalid!')
    })

}
)
