Feature: Add to cart
    Add and delete items from the shopping basket

    Background:
        Given I launch the website

    @ShoppingBasketTests
    Scenario: Add a product to the shopping cart
        When I accept the cookies banner
        And I search the product
            | ProductName |
            | 82950316    |
        And Add "2" quantities of product to the cart
        Then I should be displayed with "2" quantities in the cart
        When I click on the basket icon
        Then I should be displayed with Basket screen
        When I delete the products from the basket
        Then Basket should be empty