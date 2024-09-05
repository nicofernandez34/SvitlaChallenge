const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName () {
        return $('#first-name');
    }

    get lastName () {
        return $('#last-name');
    }

    get zipCode () {
        return $('#postal-code');
    }

    get errorMsg () {
        return $('[data-test="error"]');
    }

    get cancelBtn () {
        return $('#cancel');
    }

    get continueBtn () {
        return $('#continue');
    }

    get finishBtn () {
        return $('#finish');
    }
    
    get backHomeBtn () {
        return $('#back-to-products');
    }

    get completeHeader () {
        return $('[data-test="complete-header"]');
    }

    get completeText () {
        return $('[data-test="complete-text"]');
    }

    get allItemNames () {
        return $$('[data-test="inventory-item-name"]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async completeInformation (firstName, lastName, zipCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.zipCode.setValue(zipCode);
        await this.continueBtn.click();
    }
    
    async cancelCheckout () {
        await this.cancelBtn.click();
    }

    async amountOfItems () {
        return await this.allItemNames.length;
     }

    async finishCheckout () {
        await this.finishBtn.click();
    }

    async errorMessage () {
        return  this.errorMsg.getText()
    }

    async completeHeaderMessage () {
        return  this.completeHeader.getText()
    }

    async completeTextMessage () {
        return  this.completeText.getText()
    }
    
    async goBackHome () {
        await this.backHomeBtn.click();
    }
}

module.exports = new CheckoutPage();
