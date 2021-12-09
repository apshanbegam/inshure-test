Feature: Verify the Default Re-Routing to customerlist from home page

    This is to verify the default rerouting to customerlist page when user landing on Homepage
     
    Scenario: Default URL redirection from Home page to customerlist page

        Given The user visits Inshur Test Home Page URL
        
        Then Verify the user has been redirected to customerlist page automatically
