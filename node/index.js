const playwright = require('playwright');

(async () => {
    await (async () => {
        const browser = await playwright['chromium'].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://vk.com/login?u=2&to=/al_im.php');
        await page.type('input[name=email]', '+79915760209');
        await page.waitForTimeout(500);
        await page.type('input[id=pass]', '0334fccb');
        await page.click('button[id=login_button]:visible');
        await page.waitForTimeout(500);
        console.log("Залогининлся")
        await page.goto('https://vk.com/v1vuu?w=wall216250165_285%2Fall');
        await page.waitForTimeout(500);
        console.log("перешел на страницу поста")
        //лайк
        await page.locator('.PostButtonReactions__title--textual:visible').click();
        await page.waitForTimeout(50);
        await page.locator('.PostBottomAction--withBg:visible').click();
        await page.waitForTimeout(50);
        //await page.type('div[id=reply_field216250165_285]', 'wow');
        //console.log("перешел на страницу поста")
        //await page.waitForTimeout(500);
        //page.keyboard.press('Enter');
        //await page.click('button[id=reply_button-168007904_21391]');
        //console.log("оставил коммент")
        //await page.mouse.down(0, 1000);
        //await page.waitForTimeout(500);
        await page.screenshot({ path: 'scrapingant.png' });

        await browser.close();


    })();

    /*await (async () => {
        const browser = await playwright['chromium'].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://vk.com/login?u=2&to=/al_im.php');
        await page.type('input[name=email]', '+79624089705');
        await page.waitForTimeout(500);
        await page.type('input[id=pass]', '0334fccb');
        await page.click('button[id=login_button]:visible');
        await page.waitForTimeout(500);
        console.log("Залогининлся")
        await page.goto('https://vk.com/v1vuu?w=wall216250165_285%2Fall');
        await page.waitForTimeout(500);
        console.log("перешел на страницу поста")
        await page.type('div[id=reply_field216250165_285]', 'wow');
        console.log("перешел на страницу поста")
        await page.waitForTimeout(500);
        page.keyboard.press('Enter');
        //await page.click('button[id=reply_button-168007904_21391]');
        console.log("оставил коммент")
        await page.mouse.down(0, 1000);
        await page.waitForTimeout(500);
        await page.screenshot({ path: 'scrapingant.png' });

        await browser.close();

    })();*/
})();