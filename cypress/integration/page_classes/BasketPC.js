/// <reference types="Cypress" />

class Basket {
    
    /********************************************************************************************************
    Description: Method to validate if Basket screen is displayed
    Parameters: NA
    *********************************************************************************************************/
    GetBasketLabel() {
        return cy.contains('h1', 'Basket')
    }


    /********************************************************************************************************
    Description: Method to validate if Empty Basket screen is displayed
    Parameters: NA
    *********************************************************************************************************/
    GetEmptyBasketLabel() {
        return cy.contains('h1', 'Your basket is empty.')
    }


    /********************************************************************************************************
     Description: Click on all the 'remove item' links on the basket screen
     Parameters: NA
     *********************************************************************************************************/
    DeleteAllTheProducts() {
        cy.contains('button', 'Remove item').each(($btn, index) => {
            if (index >= 1) {
                cy.wrap($btn).click()
            }
        })
    }

}
export default Basket