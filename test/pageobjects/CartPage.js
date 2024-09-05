const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartBadge () {
        return $('[data-test="shopping-cart-badge"]');
    }

    get allRemoveBtns () {
        return $$('[class="btn btn_secondary btn_small cart_button"]');
    }

    get continueshoppingBtn () {
        return $('#continue-shopping');
    }

    get checkoutBtn () {
        return $('#checkout');
    }

    get cartBtn () {
        return $('[data-test="shopping-cart-link"]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async addProductToCart () {
        await this.addToCartBtn.click();
    }

    async cardBadgeAmount () {
        return this.cartBadge.getText();
    }

    async amountOfItems () {
        return await this.allRemoveBtns.length;
     }
 
     async clickRemovebtn (index) {
         await this.allRemoveBtns[index].click();
     }
 
     async openCart () {
        await this.cartBtn.click();
    }

    async goToCheckout () {
        await this.checkoutBtn.click();
    }

    async goBackToShopping () {
        await this.continueshoppingBtn.click();
    }

}

module.exports = new CartPage();
