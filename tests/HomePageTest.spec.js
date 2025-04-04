const { test, expect } = require("@playwright/test");

test('Home Page', async ({ page }) => {
    // Launch the URL
    await page.goto("https://www.youtube.com/");

    // Capture and print the page title
    const pageTitle = await page.title(); // add 'await' to resolve the promise
    console.log("Page title is:", pageTitle);

    // Validate the page title (Note: YouTube's title starts with uppercase 'Y')
    await expect(page).toHaveTitle(/YouTube/); // Use regex to make it more flexible

    // Capture and print the page URL
    const pageUrl = page.url();
    console.log("Page URL is:", pageUrl);

    // Validate the page URL
    await expect(page).toHaveURL("https://www.youtube.com/");

    // Close the page
    await page.close();
});
