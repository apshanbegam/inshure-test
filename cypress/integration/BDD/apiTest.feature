Feature: Get Customer deatils API feature test

    This feature is test get customer API response are returned as expected

    Scenario: Inshur Website Get Customer API Test for User 1
        Given Make API call to get user "1" Information
        Then User details have been returned in API response
            | name       | email           | phone      | city   | state          | country | organization | jobProfile         | additionalInfo                                                |
            | John Smith | jsmith@test.com | 0208092029 | London | Greater London | England | Company 1    | Software Developer | Has Bought a lot of products before and a high Value Customer |
    
    Scenario: Inshur Website Get Customer API Test for User 2
        Given Make API call to get user "2" Information
        Then User details have been returned in API response
            | name         | email         | phone         | city       | state              | country | organization | jobProfile         | additionalInfo       |
            | Jeff Bridges | abcd@test.com | 0161 225 7632 | Manchester | Greater Manchester | England | Company 2    | Software Developer | Buys Products Rarely |
    
    Scenario: Inshur Website Get Customer API Test for User 3
        Given Make API call to get user "3" Information
        Then User details have been returned in API response
            | name        | email                 | phone        | city    | state       | country | organization | jobProfile         | additionalInfo                   |
            | Steve Jones | steven.jones@test.com | 01403 215100 | Horsham | West Sussex | England | Company 3    | Software Developer | Buys Lots of Products in general |

