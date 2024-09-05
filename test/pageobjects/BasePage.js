const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    */
    open (path) {
        /* Loads the url set in wdio.conf.js */
        return browser.url('')
    }
}
