/*test setup*/
const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const ItemPage = require('../pageobjects/ItemPage')
const CartPage = require('../pageobjects/CartPage')

/*Users and Passwords for Login*/
const validUser = 'standard_user'
const validPassword ='secret_sauce'

describe('Add items to cart', () => {
    it('should add items from the inventory page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        //add the first product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='1').toBe(true)
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 1).toBe(true) 
        await CartPage.goBackToShopping()
        //add the second product
        await InventoryPage.clickAddBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='2').toBe(true)
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 2).toBe(true) 
    })
    it('should add items from the item page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        await InventoryPage.clickItemName(2)
        await ItemPage.addProductToCart()
        expect(await (CartPage.cardBadgeAmount())=='3').toBe(true)   
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 3).toBe(true) 
    })
})

describe('Remove items from cart', () => {
    it('should remove items from the inventory page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        await InventoryPage.clickRemoveBtn(0)
        expect(await (CartPage.cardBadgeAmount())=='2').toBe(true)
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 2).toBe(true) 
    })
    it('should remove items from the item page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        await InventoryPage.clickItemName(2)
        await ItemPage.removeProductFromCart()
        expect(await (CartPage.cardBadgeAmount())=='1').toBe(true)   
        await CartPage.openCart()
        expect(await (CartPage.amountOfItems())== 1).toBe(true) 
    })
    it('should remove items from the cart page', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        await CartPage.openCart()
        await CartPage.clickRemovebtn(0)
        expect(await (CartPage.amountOfItems())== 0).toBe(true) 
    })
})

