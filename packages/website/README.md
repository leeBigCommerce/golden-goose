# `website`

## Rough Idea

A website that fulfills the business requirements set out in our `business requirements` package

## Rough TODO

- Work out how to actually import the feature files from our `business requirements` package
- Look into https://testing-library.com/docs/cypress-testing-library/intro

## The Big Questions

- Once data sources get involved are they mocked or not?
    - If not: how do you keep test data from contaminating real?
    - If yes: how do you ensure the mocks are up to date?
    - If yes: what are we _really_ integrating... just view tier with browser?
    - Also, is this an environment specific question?
