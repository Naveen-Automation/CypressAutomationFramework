/// <reference types="Cypress" />

class SearchResultsPC {

    /********************************************************************************************************
    Description: Method to close the quick view window
    Parameters: NA
    *********************************************************************************************************/
    CloseQuickViewWindow() {
        cy.get('[data-test=modal-button-close] > svg > path').should('be.visible').click()
    }


    /********************************************************************************************************
    Description: Validate if the items are added to the cart as mentioned in the feature file  
    Parameters: NA
    *********************************************************************************************************/
    GetNumberOfItemsInBasketLbl() {
        return cy.get('span.basket-amount-icon--c2f1a')
    }


    /********************************************************************************************************
    Description: Click on shopping basket  
    Parameters: NA
    *********************************************************************************************************/
    ClickOnBasketIcon() {
        cy.get('[data-test=basket-anchor]').should('be.visible').click()
    }


    /********************************************************************************************************
    Description:
    Parameters: NA
    *********************************************************************************************************/
    GetNoOfSearchResultsMessage() {
        return cy.get('[role=text]')
    }


    /********************************************************************************************************
    Description: 
    Parameters: NA
    *********************************************************************************************************/
    GetCountOfSearchResults() {
        return cy.get('[data-test=heading-num-results]')
    }


    /********************************************************************************************************
    Description:
    Parameters: NA
    *********************************************************************************************************/
    AddProductToBasket(quantity) {
        cy.contains('Quick view').first().click({ force: true })
        for (let i = 1; i < parseInt(quantity); i++) {
            cy.get('#addToBasket').click()
            //cy.get('#addToBasket').invoke('mouseenter')
        }
        //document.getElementById("addToBasket")
        //cy.get('#addToBasket').invoke('click')

    }

}
export default SearchResultsPC
