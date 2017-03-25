Feature: Search the Web
  Feature ID: 001
  URL:

  As a human
  I want to search the web
  So I can find information

  @watch
  Scenario: Search for xolv.io
    Given I have visited Google
    When I search for "xolv.io"
    Then I see "xolv.io"
