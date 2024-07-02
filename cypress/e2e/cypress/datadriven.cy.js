describe('Login Test Practice',()=>{
    let cred;
    before(()=>{
        cy.viewport(1024,1366)
        cy.fixture('login').then((testdata)=>{
            cred = testdata
        }
    

        )
        
    }

    )
    it('verify login with given positive and negative cases',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input[name="username"]').type(cred.Username)
    cy.get('input[name="password"]').type(cred.Password)
    cy.get('.btn').click()

    }
    )
}

)