import {Page} from '@playwright/test';
import {logger} from "../logger/logger";
import {BasePage} from "./core/basePage";
import {loginLocators} from "../locators/login.locators";

export class LoginPage extends BasePage{


    constructor(page: Page) {

        super(page);

    }

    async login(username: string, password: string) {

        logger.info(`Login attempt with user: ${username}`);

        await this.page.fill(loginLocators.username, username);
        await this.page.fill(loginLocators.password, password);
        await this.page.click(loginLocators.loginButton);


        logger.info(`Login button clicked`);

    }
}