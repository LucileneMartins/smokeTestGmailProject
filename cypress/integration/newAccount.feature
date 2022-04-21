Feature: Create new account on Gmail

    As a user i would like to create a new account on gmail.


    @smokeTest
    Scenario: Create new account
        Given The user access the gmail on browser
        When access the link create a new account
        And fill in the data correctly in the form
        And fill data on verify your number form correctly
        And fill verification code correctly
        And fill personal information on welcome form
        And link your phone number at your google account
        And agree with Privacy & Terms
        Then the user will be able to acess email and google resources

    @non_automated
    Scenario: Invalid data field
        Given The user access the gmail on browser
        When access the link create a new account
        And fill in the data incorrectly in the form
        Then form will validate and show up the message error in each fiels incorrect

    @non_automated
    Scenario: Invalid number phone
        Given The user access the gmail on browser
        When access the link create a new account
        And fill in the data correctly in the form
        And fill data on verify your number form incorrectly
        Then form will validate and show up the message error in each fiels incorrect

    @non_automated
    Scenario: Invalid code verification
        Given The user access the gmail on browser
        When access the link create a new account
        And fill in the data correctly in the form
        And fill data on verify your number form correctly
        And fill verification code incorrectly
        Then form will validate and show up the message error in each fiels incorrect

    @smokeTest
    Scenario: Non agree with privacy and terms
        Given The user access the gmail on browser
        When access the link create a new account
        And fill in the data correctly in the form
        And fill data on verify your number form correctly
        And fill verification code  correctly
        And fill personal information on welcome form
        And link your phone number at your google account
        And non agree with Privacy & Terms
        Then system will redirect the user to welcome page