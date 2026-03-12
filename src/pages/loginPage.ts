import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.username = page.locator('//input[@id="user-name"]');
        this.password = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@value="Login"]');

    }

    async login(username: string, password: string) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }
}