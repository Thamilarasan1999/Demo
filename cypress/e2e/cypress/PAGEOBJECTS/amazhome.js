class HomePage{
    visitingAmazon(){
        return  cy.visit('https://www.amazon.in/')
    }
    verifytitleofhomepage(title){
        return cy.title().should('include',title)
    }
    findHelloSigninAndClickSignin(){
        return cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover').then(()=>{
            cy.get('#nav-flyout-ya-signin a').eq(0).click()
        }

        )
    }
    searchacategoryandClick(){
        return cy.get('.nav-progressive-content a').each(($categories)=>{
            if($categories.text().includes('Today')){
                cy.wrap($categories).click()
            }

            
        }

        )
    }
    

        
    
        
    

}
export default HomePage;