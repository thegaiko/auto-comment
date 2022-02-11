const playwright = require('playwright');

var link = 'https://vk.com/v1vuu?w=wall216250165_285%2Fall'
var post_id = '216250165_285'
var comment_link = 'div[id=reply_field' + post_id + ']'

var acc_email = [
    '+79915760209',
    '+79624089705'
]

var acc_pass = [
    '0334fccb',
    '0334fccb',
]

var commet = [
    '1',
    '2'
]

for (let i = 0; i < 2; i++) {
    (async () => {
        const browser = await playwright['chromium'].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://vk.com/login?u=2&to=/al_im.php');
        await page.waitForTimeout(500);
        await page.type('input[name=email]', acc_email[i]);
        await page.waitForTimeout(500);
        await page.type('input[id=pass]', acc_pass[i]);
        await page.click('button[id=login_button]:visible');
        await page.waitForTimeout(500);
        console.log("Залогининлся")
        await page.goto(link);
        await page.waitForTimeout(500);
        console.log("перешел на страницу поста")
        //лайк
        await page.locator('.PostButtonReactions__title--textual:visible').click();
        await page.waitForTimeout(50);
        await page.type(comment_link, commet[i]);
        console.log("перешел на страницу поста")
        await page.waitForTimeout(500);
        page.keyboard.press('Enter');
        console.log("оставил коммент")
        await page.mouse.down(0, 1000);
        await page.waitForTimeout(500);
        await page.screenshot({ path: 'screen1.png' });

        await browser.close();
    })();
}
