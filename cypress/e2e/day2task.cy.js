describe('amazon order',()=>{
    it('order product',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('[type="text"]').type("iphone14 pro max")
        cy.get('[type="submit"]').click()
        
        cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click()
        cy.get('input[name="submit.add-to-cart"]').eq(1).click()
        
      
        

        
       
    })
})