# Playwright Inventory Logic Tests (TypeScript)

## Task description
"Inventory Logic" Flow

Focus: Data validation, sorting algorithms, and state management.

Launch URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)

UC-1 Sorting Validation:

o Login with standard_user.

o Select "Price (low to high)" from the sort dropdown.

o Validation: Scrape the prices of all items on the page and programmatically verify that the array is sorted correctly in ascending order.

UC-2 Cart State Logic:

o Add two different items to the cart.

o Verify the cart badge shows "2".

o Remove one item via the "Remove" button on the Inventory page.

o Verify the cart badge updates to "1".

Technical Requirements:

Tool: WebDriverIO.

Browsers: Firefox, Edge (Run in Parallel).

Pattern: Page Object Model (POM).

Locators: XPath (Focus on text-based selection).

Parametrization: Use Data Provider for the items being added/removed.

Documentation: Add a README.md explaining the sorting validation logic.

## Stack

- Playwright
- TypeScript
- Page Object Model
- XPath Locators
- Parallel execution

### Browsers supported:

- Chromium
- Firefox
- Edge

---

## Logger

The framework uses `Winston logger`.

Logs are written to:
- console
- test.log

## Sorting Validation Logic

The test validates UI sorting programmatically.

Steps:

1. Collect all price values from the page
2. Convert strings like "$29.99" to numbers
3. Create a sorted copy of the array
4. Compare the UI order with the sorted array

Example:

prices = [29.99, 9.99, 15.99]

sorted = [...prices].sort((a,b)=>a-b)

expect(prices).toEqual(sorted)

If arrays match, UI sorting works correctly.
