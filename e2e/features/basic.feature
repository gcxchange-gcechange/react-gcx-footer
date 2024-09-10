
Feature: Basic signin

Go to the login page, enter credentials, be on the welcome page.

    Backgrounds: auth-form

    go to the https://devgcx.sharepoint.com webpage
    pause for 1s
    see "Sign in"
    input "e2etest@devgcx.ca" for Username field
    input "Password123" for Password field
    Click "next"
    see "Welcome to GCXchange"
