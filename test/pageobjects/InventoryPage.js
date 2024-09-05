const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get allItemNames () {
        return $$('[data-test="inventory-item-name"]');
    }

    get allAddBtns () {
        return $$('[class="btn btn_primary btn_small btn_inventory "]');
    }

    get allRemoveBtns () {
        return $$('[class="btn btn_secondary btn_small btn_inventory "]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async amountOfItems () {
       return await this.allItemNames.length;
    }

    async clickItemName (index) {
        await this.allItemNames[index].click();
    }

    async amountOfAddBtns () {
        return await this.allAddBtns.length;
    }
 
     async clickAddBtn (index) {
         await this.allAddBtns[index].click();
    }

     async amountOfRemoveBtns () {
        return await this.allRemoveBtns.length;
    }
 
     async clickRemoveBtn (index) {
         await this.allRemoveBtns[index].click();
    }

}

module.exports = new InventoryPage();