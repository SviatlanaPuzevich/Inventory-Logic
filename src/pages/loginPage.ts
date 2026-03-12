import { Page, Locator } from '@playwright/test';
import {logger} from "../logger/logger";
import {BasePage} from "./core/basePage";

export class LoginPage extends BasePage{

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        super(page);

        this.username = page.locator('//input[@id="user-name"]');
        this.password = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@value="Login"]');

    }

    async login(username: string, password: string) {

        logger.info(`Login attempt with user: ${username}`);

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        logger.info(`Login button clicked`);

    }
}