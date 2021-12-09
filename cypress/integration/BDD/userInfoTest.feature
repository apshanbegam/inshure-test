Feature: Validate user detailed UI

    This feature is to validate user information by clicking on the user preview dynamically using Examples datatables

    Scenario Outline: Validate user detailed UI Scenario
        Given the user visits Inshur Test Website

        When they click the <userId> user

        Then validate the user details are shown correctly
            | userId | name         | email                 | phone         | city       | state              | country | organization | jobProfile         | additionalInfo                                                |
            | 1      | John Smith   | jsmith@test.com       | 0208092029    | London     | Greater London     | England | Company 1    | Software Developer | Has Bought a lot of products before and a high Value Customer |
            | 2      | Jeff Bridges | abcd@test.com         | 0161 225 7632 | Manchester | Greater Manchester | England | Company 2    | Software Developer | Buys Products Rarely                                          |
            | 3      | Steve Jones  | steven.jones@test.com | 01403 215100  | Horsham    | West Sussex        | England | Company 3    | Software Developer | Buys Lots of Products in general                              |

        Examples:
            | userId |
            | 1      |
            | 2      |
            | 3      |
