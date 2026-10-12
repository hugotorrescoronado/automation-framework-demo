Feature: Login

  Scenario: Successful Login

    Given user is on login page

    When valid credentials are entered

    Then dashboard page is displayed