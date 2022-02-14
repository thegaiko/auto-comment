const playwright = require('playwright');

var link = 'https://zen.yandex.ru/media/pulya/nato-razmestit-svoi-boevye-gruppirovki-v-raione-chernogo-moria-po-slovam-smi-62062b8a838522693d97a2fb'

var acc_email = [
    'PetrovVadim7007@yandex.ru',
    '+79624089705',
    '+79633829539',
    '+79624226428',
]

var acc_pass = [
    '0334Fcbb',
    '0334fccb',
    '0334fccb',
    '0334fccb',
]

var comment = 'kanye?'

async function test(i) {
    const browser = await playwright['chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://passport.yandex.ru/auth');
    await page.waitForTimeout(500);
    await page.type('input[name=login]', acc_email[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.type('input[name=passwd]', acc_pass[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screen1.png' });

    await browser.close();
}

(async () => {
    for (let i = 0; i < 1; i++) {
        await test(i);
    }
})();