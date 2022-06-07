const playwright = require('playwright');

messages = [
    'Ive been tryna call',
    'Ive been on my own for long enough',
    'Maybe you can show me how to love, maybe',
    'Im going through withdrawals',
    'You dont even have to do too much',
    'You can turn me on with just a touch, baby',
    'I look around and',
    'Sin Citys cold and empty',
    'No ones around to judge me',
    'I cant see clearly when youre gone',
    'I said, ooh, Im blinded by the lights',
    'No, I cant sleep until I feel your touch',
    'I said, ooh, Im drowning in the night',
    'Oh, when Im like this, youre the one I trust',
    'Im running out of time',
    'Cause I can see the sun light up the sky',
    'So I hit the road in overdrive, baby, oh',
    'The citys cold and empty(oh)',
    'No ones around to judge me(oh)',
    'I cant see clearly when youre gone',
]

async function test() {
    const browser = await playwright['chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://discord.com/login');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screen.png' });
    console.log('Ожидание сканирования QR кода')
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screen.png' });
    await page.goto('https://discord.com/channels/670666744251154481/966340022867464252');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screen.png' });
    for (let i = 0; i < 8; i++) {
        number = Math.floor(Math.random() * messages.length)
        await page.type('div[role="textbox"]', messages[number]);
        page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
    }
}

test();