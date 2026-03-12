import {defineConfig, devices} from '@playwright/test';

export default defineConfig({

    testDir: './src/tests',

    retries: 1,

    fullyParallel: true,

    timeout: 30000,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {

        baseURL: 'https://www.saucedemo.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'

    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        },

        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']}
        },
        {
            name: 'edge',
            use: {...devices['Desktop Edge']}
        }
    ]

});