Feature: Demo Online Shop
  Validate navigation and purchase functionalities of Demo online shop.

  Scenario Outline: Navigation through categories
    Given user is in homepage
    When user clicks on '<categories>'
    Then user should be displayed '<products>' with <number>

    Examples:
      | categories | products | number |
      | Phones     | Samsung galaxy s6 | 7 |
      | Laptops    | Sony vaio i5      | 6 |
      | Monitors   | Apple monitor 24  | 2 |

#
#  Scenario: Add, remove items in cart and place order
#    Given user navigates to Laptop category
#    And user selects Sony vaio i5
#    Then user adds to cart
#    And user accepts pop up confirmation
#    And user navigates to home
#    And user navigates to Laptop category
#    And user selects Dell i7 8gb
#    Then user adds to cart
#    And user accepts pop up confirmation
#    Then user navigates to cart
#    And user deletes Dell i7 8gb
#    When user clicks on place order
#    And user fills the form
#    Then user clicks on purchase
#    And user clicks on OK
