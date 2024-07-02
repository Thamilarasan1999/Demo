class Signin{
    aftersigninGobacktoHome(){
        cy.wait(2000)
        cy.go('back')
    }
}
export default Signin;