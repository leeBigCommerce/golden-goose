Feature: Search Bar

  Scenario: Typing into the Home Page search input
    Given I open the "Home Page"
    When I type "fish fish fish" into the "Search Input"
    Then the "Search Input" value should be "fish fish fish"
