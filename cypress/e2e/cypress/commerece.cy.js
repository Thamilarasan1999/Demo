describe('Negative Password Test',()=>{
    it('Verify Login With Given Positive and Negative Cases',()=>{
        cy.visit('https://commercejs-demo-store.netlify.app/')
        cy.get('a[class="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn"]').eq(0).click( {force: true} )
        cy.get('[class="mb-2 position-relative cursor-pointer"]').eq(0).click()
        cy.get('[class="mb-3"]').eq(0).click()
        cy.get('[class="flex-grow-1 mr-3 text-center"]').click()
        cy.get('[height="24"]').eq(0).click()
        cy.wait(3000)
       
       cy.get('div[class="col-12 col-md-6"]').click()
       cy.get('input[name="customer[phone]"]').type("8838380275")
       //cy.get('select[name="fulfillment[shipping_method]"]').type("Worldwide - 5.00 USD")
       



        

        
    })

}
)
