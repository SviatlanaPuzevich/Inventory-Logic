import { Page, Locator } from '@playwright/test';
import {logger} from "../logger/logger";

export class InventoryPage {

    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly prices: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {

        this.page = page;

        this.sortDropdown = page.locator('//select[@class="product_sort_container"]');
        this.prices = page.locator('//div[@class="inventory_item_price"]');
        this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');

    }

    async selectSort(option: string) {

        logger.info(`Select sorting option: ${option}`);

        await this.sortDropdown.selectOption({ label: option });
    }

    async getPrices(): Promise<number[]> {

        const pricesText = await this.prices.allTextContents();

        return pricesText.map(p => Number(p.replace('$', '')));
    }

    async addItem(itemName: string) {

        logger.info(`Adding item to cart: ${itemName}`);

        const button = this.page.locator(
            `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`
        );

        await button.click();
    }

    async removeItem(itemName: string) {

        logger.info(`Removing item from cart: ${itemName}`);

        const button = this.page.locator(
            `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button[text()="Remove"]`
        );

        await button.click();
    }

    async getCartCount(): Promise<string | null> {
        return this.cartBadge.textContent();
    }

}