class Category{
    verifytitleofCategoryPage(){
       return cy.title().should('include',"Deals")

    }
    gobacktohome(){
       return cy.get('back')
    }

}
export default Category;