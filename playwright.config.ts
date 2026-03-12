import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './src/tests',

    fullyParallel: true,

    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: true
    },

    projects: [
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'edge',
            use: { ...devices['Desktop Edge'] }
        }
    ]

});