# Playwright Inventory Logic Tests (TypeScript)

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