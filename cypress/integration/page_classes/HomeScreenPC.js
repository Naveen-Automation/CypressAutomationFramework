/// <reference types="Cypress" />

import { should } from "chai"

class HomeScreenPC {

    /********************************************************************************************************
    Description: Method to launch home screen
    Parameters: NA
    *********************************************************************************************************/
    VisitHomeScreen() {
        cy.visit(Cypress.env('url'))
    }


    /********************************************************************************************************
    Description: Allow cookies banner for the very first time
    Parameters: NA
    *********************************************************************************************************/
    AcceptCookiesBanner() {
        cy.get('[data-test=allow-all]').should('be.visible').should('be.enabled').click()
    }

    
    /********************************************************************************************************
     Description: Method to Search Product
     Parameters: NA
     *********************************************************************************************************/
    SearchProduct(productName) {
        cy.get('#mobileSearch').should('be.visible').type(productName)
        cy.get('#mobileSearch').type('{enter}')
    }
}
export default HomeScreenPC