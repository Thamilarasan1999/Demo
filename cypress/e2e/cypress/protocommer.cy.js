describe('login test practice',()=>{
    let collect;
before(()=>{
    cy.fixture('login').then((testdataa)=>{
        collect = testdataa
    })
})
it('data driven',()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]').eq(0).type(collect.Name)
        cy.get('[name="email"]').type(collect.Email)
        cy.get('input[placeholder="Password"]').type(collect.Password)
        cy.get('[id="exampleCheck1"]').click()
        cy.get('[id="inlineRadio2"]').click()
        
        cy.get('[name="bday"]').type(collect.Date_of_Birth)
        cy.get('[class="ng-untouched ng-pristine ng-valid"]').should('have.text','')

        cy.get('input[type="submit"]').click()
        //cy.get('div.alert alert-success alert-dismissible').should('have.text','Success! The Form has been submitted successfully!.')
        cy.get('a[class="nav-link"]').eq(1).click()
        collect.ProductsToAdd.forEach((mobiles)=>{
            cy.addingproductToCart(mobiles)
            
        }

        )
        cy.wait(3000)
            cy.get('a[class="nav-link btn btn-primary"]').click()
            cy.get('button[class="btn btn-success"]').click()
            cy.get('input[id="country"]').type("India")
            cy.wait(4000)
            cy.contains("India").click()
            cy.get('#checkbox2').click( {force: true})
            cy.get('input[class="btn btn-success btn-lg"]').click()
            cy.wait(4000)
            cy.get('alert alert-success alert-dismissible').should('include','Success!')
}

)
}


)