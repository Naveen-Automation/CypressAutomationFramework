/********************************************************************************************************
Import statements
*********************************************************************************************************/
/// <reference types="Cypress" />
import HomeScreenPC from '../page_classes/HomeScreenPC'
import SearchResultsPC from '../page_classes/SearchResultsPC'
import Basket from '../page_classes/BasketPC'

//Test Suite
describe('Home Screen', function () {


    /********************************************************************************************************
    Description: Page Objects Instantiation
    *********************************************************************************************************/
    const homeScreenPC = new HomeScreenPC()
    const searchResultsPC = new SearchResultsPC()
    const basketPC = new Basket()

    // Load test data json file from test_data folder present inside fixtures folder
    before(function () {
        cy.LoadTestDataFile('AddToCart')
    })

    // Cleanup before each test script execution 
    beforeEach(function () {
        cy.clearLocalStorage()
    })

    //Clear cookies after each test
    afterEach(function () {
        cy.clearCookies()
    })


    /********************************************************************************************************
    Description: Technical Assignment Script. (Added all steps in a single script. Can be broken down into further scripts)
    *********************************************************************************************************/
    it('Very the product is added succesfully to the cart', function () {
        //Launch website
        homeScreenPC.VisitHomeScreenAct()

        //Accept cookies
        homeScreenPC.AcceptCookiesBannerAct()

        //Search product
        homeScreenPC.SearchProductAct(data.productName)

        //if the object is removed from website then go inside if condition otherwise go to else condition and add the product to cart
        const noResultsFoundLblElm = searchResultsPC.GetNoOfSearchResultsMessageLblElm()
        noResultsFoundLblElm.invoke('text').then((valueOfText) => {
            if (valueOfText.includes(data.noResultsMessage)) {
                cy.log(data.noResultsMessage)
                cy.log('Product is removed from the site')
            }
            else {
                //If/else condition to check if product is in-stock or out of stock
                const countOfSearchResultsLblElm = searchResultsPC.GetCountOfSearchResultsLblElm()
                countOfSearchResultsLblElm.invoke('text').then((valueOfProductCount) => {
                    if (valueOfText.includes('(0)')) {
                        cy.log('Product is out of stock')
                    }
                    else {
                        //Assertion to validate more than Zero products displayed on cart
                        expect(valueOfProductCount).to.not.eq('(0)')
                        cy.log('Product is in-stock')
                        searchResultsPC.AddProductToBasketAct(data.quantity)
                    }
                })
            }
        })

        //Close the Quick view window
        searchResultsPC.CloseQuickViewWindowAct()

        //Assert: No of items added to basket are updated correctly
        const noOfItemsInCartLblElm = searchResultsPC.GetNumberOfItemsInBasketLblElm()
        noOfItemsInCartLblElm.invoke('text').then((noOfItemsInCart) => {
            //If the value of 'noOfItemsInCart' is integer then make 'quantity' as integer
            expect(noOfItemsInCart).to.eq(parseInt(data.quantity))
            cy.log("Quantity of the items added to basket is " + noOfItemsInCart)
        })

        //Click on basket icon to navigate to Basket screen
        searchResultsPC.ClickOnBasketIconAct()

        //Assert: Basket screen is displayed on clicking basket icon
        basketPC.ValidateVisibilityOfBasketIcnElm()


        //Deleting all products from the cart
        basketPC.DeleteAllTheProductsAct()

        //Assert: Empty Basket screen is displayed after deleting all items from the basket
        basketPC.ValidateVisibilityOfEmptyBasketLblElm()

    })
})
