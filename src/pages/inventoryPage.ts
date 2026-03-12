import { Page, Locator } from '@playwright/test';

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
        await this.sortDropdown.selectOption({ label: option });
    }

    async getPrices(): Promise<number[]> {

        const pricesText = await this.prices.allTextContents();

        return pricesText.map(p => Number(p.replace('$', '')));
    }

}