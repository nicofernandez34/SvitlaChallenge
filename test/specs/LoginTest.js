/*test setup*/
const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')


/*Users and Passwords for Login*/
const validUser = 'standard_user'
const validPassword ='secret_sauce'
const invalidUser = 'abc'
const invalidPassword ='abc'

/*LandingPage*/
const landingPage ='https://www.saucedemo.com/inventory.html'

/*ErrorMessages*/
const msgInvalidCredentials = 'Epic sadface: Username and password do not match any user in this service'
const msgRequiredUsername = 'Epic sadface: Username is required'
const msgRequiredPassword = 'Epic sadface: Password is required'

describe('Login with valid credentials', () => {
    it('should login with valid credentials', async () => {        
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        expect(await (browser.getUrl())==landingPage).toBe(true)
    })
})

describe('Login with invalid credentials', () => {
    it('should not be able to login with invalid username', async () => {
        
        await LoginPage.open()
        await LoginPage.login(invalidUser, validPassword)
        expect(await (LoginPage.errorMessage())==msgInvalidCredentials).toBe(true)
    })
    it('should not be able to login with invalid password', async () => {        
        await LoginPage.open()
        await LoginPage.login(validUser, invalidPassword)
        expect(await (LoginPage.errorMessage())==msgInvalidCredentials).toBe(true)
    })
    it('should not be able to login with invalid username and password', async () => {
        
        await LoginPage.open()
        await LoginPage.login(invalidUser, invalidPassword)
        expect(await (LoginPage.errorMessage())==msgInvalidCredentials).toBe(true)
    })
    it('should not be able to login without entering an username', async () => {
        
        await LoginPage.open()
        await LoginPage.login('', validPassword)
        expect(await (LoginPage.errorMessage())==msgRequiredUsername).toBe(true)
    })
    it('should not be able to login without entering a password', async () => {        
        await LoginPage.open()
        await LoginPage.login(validUser, '')
        expect(await (LoginPage.errorMessage())==msgRequiredPassword).toBe(true)
    })
})