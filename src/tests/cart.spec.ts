import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { items } from '../data/items';

test('UC-2 Cart State Logic', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    for (const item of items) {
        await inventoryPage.addItem(item);
    }

    const badgeAfterAdd = await inventoryPage.getCartCount();

    expect(badgeAfterAdd).toBe('2');

    await inventoryPage.removeItem(items[0]);

    const badgeAfterRemove = await inventoryPage.getCartCount();

    expect(badgeAfterRemove).toBe('1');

});