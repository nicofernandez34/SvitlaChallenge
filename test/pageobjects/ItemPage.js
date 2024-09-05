const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class ItemPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemName () {
        return $('[data-test="inventory-item-name"]');
    }

    get itemDescription () {
        return $('[data-test="inventory-item-desc"]');
    }

    get itemImage () {
        return $('[class="inventory_details_img"]');
    }

    get itemPrice () {
        return $('[data-test="inventory-item-price"]');
    }

    get addToCartBtn () {
        return $('#add-to-cart');
    }

    get removeFromCartBtn () {
        return $('#remove');
    }

    get backToProductsbtn () {
        return $('#back-to-products');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async addProductToCart () {
        await this.addToCartBtn.click();
    }

    async removeProductFromCart () {
        await this.removeFromCartBtn.click();
    }

    async goBackToProducts () {
        await this.backToProductsbtn.click();
    }

    async itemNameVisible () {
        return this.itemName.isDisplayed();
    }

    async itemDescriptionVisible () {
        return this.itemDescription.isDisplayed();
    }
    
    async itemImageVisible () {
        return this.itemImage.isDisplayed();
    }

    async itemPriceVisible () {
        return this.itemPrice.isDisplayed();
    }
}

module.exports = new ItemPage();
