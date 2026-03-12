export const inventoryLocators = {

    sortDropdown: '//select[@class="product_sort_container"]',

    prices: '//div[@class="inventory_item_price"]',

    cartBadge: '//span[@class="shopping_cart_badge"]',

    addButton: (item: string) =>
        `//div[text()="${item}"]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`,

    removeButton: (item: string) =>
        `//div[text()="${item}"]/ancestor::div[@class="inventory_item"]//button[text()="Remove"]`

};