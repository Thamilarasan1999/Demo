describe('Login Test Practice',()=>{
    it('Verify Login With Given positive and negative Cases',()=>{
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('input[name="username"]').type("student")
      cy.get('input[name="password"]').type("Password123")
      cy.get('.btn').click()
      cy.url().should('include',"practicetestautomation.com/logged-in-successfully/")
      cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')
      cy.get('.post-title').should('have.text','Logged In Successfully')
      cy.get('a[href="https://practicetestautomation.com/practice-test-login/"').should('be.visible')
    })
  })