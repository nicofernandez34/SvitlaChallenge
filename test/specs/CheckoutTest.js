/*test setup*/
const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CartPage = require('../pageobjects/CartPage')
const CheckoutPage = require('../pageobjects/CheckoutPage')

/*Users and Passwords for Login*/
const validUser = 'standard_user'
const validPassword ='secret_sauce'

/*Buyer information*/
const firstName = 'Nicolas'
const lastName = 'Fernandez'
const zipCode = '1256'

/*Error messages*/
const requiredFirstName = 'Error: First Name is required'
const requiredLastName = 'Error: Last Name is required'
const requiredPostalCode = 'Error: Postal Code is required'

/*Success messages*/

const successHeader = 'Thank you for your order!'
const successText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'

/*URL pages*/
const landingPage ='https://www.saucedemo.com/inventory.html'
const cartPage ='https://www.saucedemo.com/cart.html'

describe('Checkout cart', () => {
    it('should checkout a cart with a single product', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='1').toBe(true)
        //open the cart
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 1).toBe(true) 
        //start the checkout
        await CartPage.goToCheckout()
        await CheckoutPage.completeInformation(firstName,lastName,zipCode)
        expect(await (CheckoutPage.amountOfItems())== 1).toBe(true) 
        //finish the checkout and check that the success message is shown
        await CheckoutPage.finishCheckout()
        expect(await (CheckoutPage.completeHeaderMessage())==successHeader).toBe(true)
        expect(await (CheckoutPage.completeTextMessage())==successText).toBe(true)
        //go back to landing page
        await CheckoutPage.goBackHome()
        expect(await (browser.getUrl())==landingPage).toBe(true)  
    })
    it('should checkout a cart with a multiple products', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the first product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='1').toBe(true)
        //add the second product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='2').toBe(true)
        //add the third product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='3').toBe(true)
        //open the cart
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 3).toBe(true) 
        //start the checkout
        await CartPage.goToCheckout()
        await CheckoutPage.completeInformation(firstName,lastName,zipCode)
        expect(await (CheckoutPage.amountOfItems())== 3).toBe(true) 
        //finish the checkout and check that the success message is shown
        await CheckoutPage.finishCheckout()
        expect(await (CheckoutPage.completeHeaderMessage())==successHeader).toBe(true)
        expect(await (CheckoutPage.completeTextMessage())==successText).toBe(true)
        //go back to landing page
        await CheckoutPage.goBackHome()
        expect(await (browser.getUrl())==landingPage).toBe(true)  
    })
})

describe('Cancel checkout', () => {
    it('should go back to cart from information page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the product
        await InventoryPage.clickAddBtn(0)
        //open the cart
        await CartPage.openCart()
        //start the checkout
        await CartPage.goToCheckout()
        //click the cancel button
        await CheckoutPage.cancelCheckout()
        expect(await (browser.getUrl())==cartPage).toBe(true)        
    })
    it('should go back to landing page from checkout page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the product
        await InventoryPage.clickAddBtn(0)
        //open the cart
        await CartPage.openCart()
        //start the checkout
        await CartPage.goToCheckout()
        await CheckoutPage.completeInformation(firstName,lastName,zipCode)
        //click the cancel button
        await CheckoutPage.cancelCheckout()
        expect(await (browser.getUrl())==landingPage).toBe(true)        
    })
})

describe('Validate information errors', () => {
    it('should show an error if the information fields are not completed', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the product
        await InventoryPage.clickAddBtn(0)
        //open the cart
        await CartPage.openCart()
        //start the checkout
        await CartPage.goToCheckout()
        await CheckoutPage.completeInformation('','','')
        expect(await (CheckoutPage.errorMessage())==requiredFirstName).toBe(true)
        await CheckoutPage.completeInformation(firstName,'','')
        expect(await (CheckoutPage.errorMessage())==requiredLastName).toBe(true)
        await CheckoutPage.completeInformation(firstName,lastName,'')
        expect(await (CheckoutPage.errorMessage())==requiredPostalCode).toBe(true)
    })
})

