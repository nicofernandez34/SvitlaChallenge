const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMsg () {
        return $('[data-test="error"]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async errorMessage () {
        return  this.errorMsg.getText()
    }

}

module.exports = new LoginPage();
