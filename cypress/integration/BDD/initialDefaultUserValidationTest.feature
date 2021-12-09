Feature: Validate Initial User Select on the page load

    This feature would verify the initial user details after selecting someother user and reload the page

    Scenario: Default User on the page load
        
        Given The user visits Inshur Test Website

        And They click the second user
        
        Then Second user details are painted in UI
        
        When Reload the page
        
        Then User would see default user details on the main screen