const playwright = require('playwright');

var link = 'https://zen.yandex.ru/media/pulya/interviu-zaderjannogo-ukrainskogo-agenta-shemy-i-plany-kieva-po-zahvatu-donbassa-62112d1638e7b1267aaebcb4'

var acc_email = [
    'gewwworg',
]

var acc_pass = [
    'Gevorgyan.02',
]

var comment = 'tй3123est'

async function test(i) {
    const browser = await playwright['chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(500);
    await page.type('input[name=username]', acc_email[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.type('input[name=password]', acc_pass[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screen.png' });
    await page.goto('https://www.instagram.com/p/CRe8Zsulpxt/');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screen.png' });
    await page.locator('.fr66n:visible').click();
    await page.type('textarea[data-testid=post-comment-text-area]', comment);
    await page.click('button[type=submit]:visible');
    await page.screenshot({ path: 'screen.png' });

    await browser.close();
}

(async () => {
    for (let i = 0; i < 1; i++) {
        await test(i);
    }
})();