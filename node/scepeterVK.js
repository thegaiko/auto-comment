const playwright = require('playwright');

var link = 'https://vk.com/purplecherrybot?w=wall-209886591_12'
var post_id = '209886591_12'
var comment_link = 'div[id=reply_field-' + post_id + ']'

var acc_email = [
    '+79915760209',
    '+79624089705',
    '+79633829539',
    '+79624226428',
]

var acc_pass = [
    '0334fccb',
    '0334fccb',
    '0334fccb',
    '0334fccb',
]

var comment = 'kanye?'

async function test(i) {
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
    await page.waitForTimeout(5000);
    console.log("перешел на страницу поста")
    //лайк
    await page.locator('.PostButtonReactions__title--textual:visible').click();
    await page.waitForTimeout(500);
    await page.mouse.down(0, 2000);
    await page.screenshot({ path: 'screen.png' });
    await page.waitForTimeout(50);
    await page.type(comment_link, comment);
    console.log("перешел на страницу поста")
    await page.waitForTimeout(500);
    page.keyboard.press('Enter');
    console.log("оставил коммент")
    await page.mouse.down(0, 1000);
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screen1.png' });

    await browser.close();
    return 0;
}

(async () => {
    for (let i = 0; i < 4; i++) {
        await test(i);
    }
})();