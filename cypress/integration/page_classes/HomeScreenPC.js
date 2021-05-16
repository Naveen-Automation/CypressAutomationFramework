/// <reference types="Cypress" />

import { should } from "chai"

class HomeScreenPC {

    /********************************************************************************************************
    Description: Method to launch home screen (Action).
    Parameters: NA
    *********************************************************************************************************/
    VisitHomeScreenAct() {
        cy.visit(Cypress.env('url'))
    }


    /********************************************************************************************************
    Description: Allow cookies banner for the very first time (Action).
    Parameters: NA
    *********************************************************************************************************/
    AcceptCookiesBannerAct() {
        cy.get('[data-test=allow-all]').should('be.visible').should('be.enabled').click()
    }


    /********************************************************************************************************
     Description: Method to Search Product (Action).
     Parameter1: Product name or Product code.
     *********************************************************************************************************/
    SearchProductAct(productName) {
        cy.get('#mobileSearch').should('be.visible').type(productName)
        cy.get('#mobileSearch').type('{enter}')
    }
}
export default HomeScreenPC