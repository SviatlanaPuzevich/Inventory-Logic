import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import {logger} from "../logger/logger";
import {isSortedAscending} from "../utils/sortingUtil";

test('UC-1 Price Sorting Validation', async ({ page }) => {

    logger.info('Starting  Price Sorting Validation test');


    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Given user is logged in', async () => {

        await page.goto('/');

        await loginPage.login('standard_user','secret_sauce');

        await expect(page).toHaveURL(/inventory/);

    });

    await test.step('When user selects Price low to high sorting', async () => {

        await inventoryPage.selectSort('Price (low to high)');

    });

    await test.step('Then prices should be sorted ascending', async () => {

        const prices = await inventoryPage.getPrices();

        expect(isSortedAscending(prices)).toBeTruthy();

    });

});