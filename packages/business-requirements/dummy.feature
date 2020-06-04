Feature: Website exists

Scenario: Homepage visit
  Given a web browser
  When a user visits our homepage
  Then text saying "this website exists" is shown on the resulting page
