/// <reference types="Cypress" />

class SearchResultsPC {

    /********************************************************************************************************
    Description: Method to close the quick view window (Action).
    Parameters: NA
    *********************************************************************************************************/
    CloseQuickViewWindowAct() {
        cy.get('[data-test=modal-button-close] > svg > path').should('be.visible').click()
    }


    /********************************************************************************************************
    Description: Return No of items count Icon lable webelement. 
    Parameters: NA
    *********************************************************************************************************/
    GetNumberOfItemsInBasketLblElm() {
        cy.get('span.basket-amount-icon--c2f1a').should('be.visible')
        return cy.get('span.basket-amount-icon--c2f1a')
    }


    /********************************************************************************************************
    Description: Click on shopping basket (Action).
    Parameters: NA
    *********************************************************************************************************/
    ClickOnBasketIconAct() {
        cy.get('[data-test=basket-anchor]').should('be.visible').click()
    }


    /********************************************************************************************************
    Description: Returns the Search result lable webelement.
    Parameters: NA
    *********************************************************************************************************/
    GetNoOfSearchResultsMessageLblElm() {
        cy.get('[role=text]').should('be.visible')
        return cy.get('[role=text]')
    }


    /********************************************************************************************************
    Description: Return search results count lable webelement.
    Parameters: NA
    *********************************************************************************************************/
    GetCountOfSearchResultsLblElm() {
        cy.get('[data-test=heading-num-results]').should('be.visible')
        return cy.get('[data-test=heading-num-results]')
    }


    /********************************************************************************************************
    Description: Add products to basket based on no of quantities (Action).
    Parameter1: Number of items to be add (Numeric).
    *********************************************************************************************************/
    AddProductToBasketAct(quantity) {
        cy.contains('Quick view').first().click({ force: true })
        for (let i = 1; i < parseInt(quantity); i++) {
            cy.get('#addToBasket').click()
        }
    }

}
export default SearchResultsPC
