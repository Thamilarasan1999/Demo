describe("Basic UI elements handling",()=>{
    it('UI elements validate and test',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //radio button
        cy.get('[value="radio2"]').check().should('be.checked')
        //check box
        cy.get('#checkBoxOption1').check().should('be.checked').check({force: true})
        cy.wait(4000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('label input[type="checkbox"]').check(["option1","option3"]).should('be.checked')
        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        //dynamic dropdown
        cy.get('[placeholder="Type to Select Countries"]').type('in')
        cy.get('.ui-menu-item div').each(($options)=>{
            if($options.text().includes('India')){
                cy.wrap($options).click({force: true})
            }
    })
    cy.get('[placeholder="Type to Select Countries"]').should('have.value','India')
    
    //open window
    cy.on('window:before:load',(win)=>{
        cy.stub(win,'open').callsFake((url)=>{
            win.location.href = url
        }
        )
    })
    cy.get('#openwindow').click()


        

    })

})