/*test setup*/
const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const ItemPage = require('../pageobjects/ItemPage')

/*Users and Passwords for Login*/
const validUser = 'standard_user'
const validPassword ='secret_sauce'

describe('Check that items are visible', () => {
    it('should show all items', async () => {
        await LoginPage.open()
        await LoginPage.login(validUser, validPassword)
        for (let i = 0; i < await InventoryPage.amountOfItems(); i++) {
            /*loop through all items and check that all elements are visible */
            await InventoryPage.clickItemName(i);
            expect(await (ItemPage.itemNameVisible())).toBe(true)
            expect(await (ItemPage.itemDescriptionVisible())).toBe(true)
            expect(await (ItemPage.itemImageVisible())).toBe(true)
            expect(await (ItemPage.itemPriceVisible())).toBe(true)
            await ItemPage.goBackToProducts()
          }
    })
})

