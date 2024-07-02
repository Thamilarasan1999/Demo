describe('login protocommerce',()=>{
    let collect;
    before(()=>{
        cy.fixture('example').then((testdata)=>{
            collect = testdata
        })

    })
    
    it('verify login with given positive and negative cases',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
       // cy.get('[class="form-control ng-pristine ng-invalid ng-touched"]').type(cred.Name)
        //cy.get('[name="email"]').type(cred.Email)
        //cy.get('[class="form-control"]').type(cred.Password)

    } )
        

    })
