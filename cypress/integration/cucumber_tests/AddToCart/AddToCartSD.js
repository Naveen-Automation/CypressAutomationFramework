/********************************************************************************************************
Import statements
*********************************************************************************************************/
/// <reference types="Cypress" />
import { Before, After, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomeScreenPC from '../../page_classes/HomeScreenPC'
import SearchResultsPC from '../../page_classes/SearchResultsPC'
import BasketPC from '../../page_classes/BasketPC'


/********************************************************************************************************
Page Objects Instantiation
*********************************************************************************************************/
const homeScreenPC = new HomeScreenPC()
const searchResultsPC = new SearchResultsPC()
const basketPC = new BasketPC()
let searchedProduct


/********************************************************************************************************
Hooks
*********************************************************************************************************/
// Cleanup before each test script execution 
Before(function () {
    cy.clearLocalStorage()
    cy.loadTestDataFile('AddToCart')
})


/********************************************************************************************************
Description: Clear cookies after each test
Parameters:
*********************************************************************************************************/
After(function () {
    cy.clearCookies()
})


/********************************************************************************************************
Description:Launch browser & navigate to URL
Parameters: NA
*********************************************************************************************************/
Given('I launch the website', () => {
    cy.visit(Cypress.env('url'))
})


/********************************************************************************************************
Description: Accept the cookies banner
Parameters: NA
*********************************************************************************************************/
When('I accept the cookies banner', () => {
    cy.log('Cookies banner accepted')
    homeScreenPC.AcceptCookiesBanner()
})


/********************************************************************************************************
Description: Search the product
Parameters: table value
*********************************************************************************************************/
And('I search the product', (datatable) => {
    datatable.hashes().forEach(element => {
        searchedProduct = element.ProductName
        cy.log('I am searching \'' + element.ProductName + '\'')
        homeScreenPC.SearchProduct(element.ProductName)
    });
})


/********************************************************************************************************
 *                                      BONUS POINT 2 Logic (No dependency on product)
/********************************************************************************************************
Description: Add multiple quantities of the product to the cart
Parameters:
*********************************************************************************************************/
And('Add {string} quantities of product to the cart', (quantity) => {

    //if the object is removed from website then go inside if condition otherwise go to else condition and add the product to cart
    const noResultsFoundLblElm = searchResultsPC.GetNoOfSearchResultsMessage()
    noResultsFoundLblElm.invoke('text').then((valueOfText) => {
        if (valueOfText.includes(data.noResultsMessage)) {
            cy.log(data.noResultsMessage)
            cy.log('Product is removed from the site')
        }
        else {
            //If/else condition to check if product is in-stock or out of stock
            const countOfSearchResultsLblElm = searchResultsPC.GetCountOfSearchResults()
            countOfSearchResultsLblElm.invoke('text').then((valueOfProductCount) => {
                if (valueOfText.includes('(0)')) {
                    cy.log('Product is out of stock')
                }
                else {
                    //Assertion to validate more than Zero products displayed on cart
                    expect(valueOfProductCount).to.not.eq('(0)')
                    cy.log('Product is in-stock')
                    searchResultsPC.AddProductToBasket(quantity)
                }
            })
        }
    })
    //searchResultsPC.CloseQuickViewWindow()
})


/********************************************************************************************************
Description: Validate the basket showing correct number of items
Parameters: Quantity of the product added
*********************************************************************************************************/
Then('I should be displayed with {string} quantities in the cart', (quantity) => {
    const noOfItemsInCartLblElm = searchResultsPC.GetNumberOfItemsInBasketLbl()
    noOfItemsInCartLblElm.invoke('text').then((noOfItemsInCart) => {
        //If the value of 'noOfItemsInCart' is integer then make 'quantity' as integer
        expect(noOfItemsInCart).to.eq(parseInt(quantity))
        cy.log("Quantity of the items added to basket is " + noOfItemsInCart)
    })
})


/********************************************************************************************************
Description: Click on the basket icon
Parameters:
*********************************************************************************************************/
When('I click on the basket icon', () => {
    searchResultsPC.ClickOnBasketIcon()
})


/********************************************************************************************************
Description: Verify Basket screen is displayed
Parameters:
*********************************************************************************************************/
Then('I should be displayed with Basket screen', () => {
    const basketLblElm = basketPC.GetBasketLabel()
    basketLblElm.should('be.visible')
})


/********************************************************************************************************
Description: Delete the product quantities from the basket
Parameters:
*********************************************************************************************************/
When('I delete the products from the basket', () => {
    basketPC.DeleteAllTheProducts()
})


/********************************************************************************************************
Description: Validate basket is empty after product quantities are deleted
Parameters:
*********************************************************************************************************/
Then('Basket should be empty', () => {
    const emptyBasketLblElm = basketPC.GetEmptyBasketLabel()
    emptyBasketLblElm.should('be.visible')
})
