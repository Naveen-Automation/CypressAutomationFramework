/// <reference types="Cypress" />

class Basket {

    /********************************************************************************************************
    Description: Validate that basket icon element is displayed.
    Parameters: NA
    *********************************************************************************************************/
    ValidateVisibilityOfBasketIcnElm() {
        cy.contains('h1', 'Basket').should('be.visible')
    }


    /********************************************************************************************************
    Description: Validate that empty basket label webelement is displayed.
    Parameters: NA
    *********************************************************************************************************/
    ValidateVisibilityOfEmptyBasketLblElm() {
        cy.contains('h1', 'Your basket is empty.').should('be.visible')
    }


    /********************************************************************************************************
     Description: Click on all the 'remove item' links on the basket screen (Action).
     Parameters: NA
     *********************************************************************************************************/
    DeleteAllTheProductsAct() {
        cy.contains('button', 'Remove item').each(($btn, index) => {
            if (index >= 1) {
                cy.wrap($btn).click()
            }
        })
    }

}
export default Basket