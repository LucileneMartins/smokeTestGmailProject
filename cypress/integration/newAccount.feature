Feature: Create new account on Gmail

    As a user i would like to create a new account on gmail.


    @smokeTest
    Scenario: Create new account
    Given The user access the gmail on browser
    When access the link 'create a new account'
    And fill in the data correctly in the form 
    And fill all data on 'verify your number' form  correctly   