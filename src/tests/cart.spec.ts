import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { items } from '../data/items';
import {logger} from "../logger/logger";

test('UC-2 Cart State Logic', async ({ page }) => {

    logger.info('Starting Cart State Logic test');

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Given user logged in', async () => {

        await page.goto('/');

        await loginPage.login('standard_user','secret_sauce');

    });


    await test.step('When user adds two items', async () => {

        for(const item of items){

            await inventoryPage.addItem(item);

        }

        await expect(page.locator('//span[@class="shopping_cart_badge"]')).toHaveText('2');

    });

    await test.step('Then removing one item updates cart badge', async () => {

        await inventoryPage.removeItem(items[0]);

        await expect(page.locator('//span[@class="shopping_cart_badge"]')).toHaveText('1');

    });

});