import {Page} from '@playwright/test';
import {logger} from "../logger/logger";
import {BasePage} from "./core/basePage";
import {inventoryLocators} from "../locators/inventory.locators";

export class InventoryPage extends BasePage {

    constructor(page: Page) {

        super(page);


    }

    async selectSort(option: string) {

        logger.info(`Select sorting option: ${option}`);

        await this.page.selectOption(inventoryLocators.sortDropdown, { label: option });
    }

    async getPrices(): Promise<number[]> {

        const pricesText = await this.page.locator(inventoryLocators.prices).allTextContents();

        return pricesText.map(p => Number(p.replace('$', '')));
    }

    async addItem(itemName: string) {

        logger.info(`Adding item to cart: ${itemName}`);

        await this.page.click(inventoryLocators.addButton(itemName))
    }

    async removeItem(itemName: string) {

        logger.info(`Removing item from cart: ${itemName}`);

        await this.page.click(inventoryLocators.removeButton(itemName));
    }

    async getCartCount(): Promise<string | null> {
        return this.page.textContent(inventoryLocators.cartBadge);
    }

}