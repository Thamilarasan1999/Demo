describe('Login Test Practice',()=>{
    it('Verify Login With Given positive and negative Cases',()=>{
      cy.visit('https://www.saucedemo.com/v1/')
      cy.get('input[type="text"]').type("standard_user")
      cy.get('input[type="password"]').type("secret_sauce")
      cy.get('input[type="submit"]').click()
      cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
      cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
      cy.get('path[fill="currentColor"]').click()
      cy.get('.inventory_item_price').eq(0).should('have.text','29.99')
      cy.get('.inventory_item_price').eq(1).should('have.text','9.99')
      cy.get('a[class="btn_action checkout_button"]').click()
      cy.get('input[id="first-name"]').type("Thamilarasan")
      cy.get('input[id="last-name"]').type("T")
      cy.get('input[id="postal-code"]').type("611112")
      cy.get('[value="CONTINUE"]').click()
      cy.get('[class="btn_action cart_button"]').click()
    })
  })
  