Feature: Website

  Scenario: Homepage visit
    Given a user navigates to our homepage
    Then they see text saying "this website exists" on the resulting page
