import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import {logger} from "../logger/logger";

test('UC-1 Price Sorting Validation', async ({ page }) => {

    logger.info('Starting  Price Sorting Validation test');


    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    logger.info('Go to Login Page');
    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.selectSort('Price (low to high)');

    const prices = await inventoryPage.getPrices();

    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

});