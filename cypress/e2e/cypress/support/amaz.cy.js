import HomePage from "../PAGEOBJECTS/amazhome";
import Category from "../PAGEOBJECTS/TODAYDEALS.JS";
import Signin from "../PAGEOBJECTS/signin";
import { sign } from "http-signature";

describe('implementing page object model',()=>{
    let amazonData;
    let homepage = new HomePage()
    let category = new Category()
    let signinpage = new Signin()
    before(()=>{
        cy.fixture('amazdata').then((amz)=>{
            amazonData = amz
        }

        )
    }

    )
    it('automate amazon',()=>{
        homepage.visitingAmazon()
        homepage.verifytitleofhomepage(amazonData.pageTitle)
        homepage.findHelloSigninAndClickSignin()
        signinpage.aftersigninGobacktoHome()
        homepage.searchacategoryandClick()
       // category.searchacategoryandClick()
        cy.get('#twotabsearchtextbox').type(amazonData.phone)
        cy.get('#twotabsearchtextbox').type('{entetr}')
        cy.wait(6000)
    }

    )
    

}
)

    

    