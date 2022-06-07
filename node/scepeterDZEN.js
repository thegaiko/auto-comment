const playwright = require('playwright');

var link = 'https://zen.yandex.ru/media/pulya/interviu-zaderjannogo-ukrainskogo-agenta-shemy-i-plany-kieva-po-zahvatu-donbassa-62112d1638e7b1267aaebcb4'

var acc_email = [
    'maximdarrov@yandex.ru',
    'igorlampoviy@yandex.ru',
    'vasilydzenov@yandex.ru',
    'garikrexonov@yandex.ru',
    'gerasimvasilkov@yandex.ru',
    'bekgeidarov@yandex.ru',
    'dubovslave@yandex.ru',
    'kosmostarbear@yandex.ru'
]

var acc_pass = [
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
    'BBBO-07-20',
]

var comment = [
    'Божией помощи,защитникам ДОНБАСА!!',
    'Западу понятное дело это выгодно, но я не понимаю какая выгода от этого Украине, при том что Россия всегда была готова помочь, они так поступают',
    'Бедные бедные военные Украины.Что уже заводских бомб нет уже, самодельные планируют размещеть ? Или НАТО уже не поставляет ?',
    'Зачем тогда врет Зеленский о возврате МИРНЫМ ПУТЕМ.ВСЕ НАОБОРОТ.',
    'Ужас, зачем ВСУ все это делает.... Им так хочеться войны?',
    'Зеленский хороший ученик.Врать научился у своих учителей американцев и англичан.Политика запада и США на одном вранье построена.',
    'Как и ожидалось ‚ всё укр.и прочее прокладочное отродье сразу объявило обстрелы таллюцинациями ‚ "Это вам только кажется . Это вам только снится".Так езжайте ‚ твари ‚ кместам обстрела ‚ раз это выдумки по вашим словам ‚ и стойте прямо ‚ не прячьтесь',
    'В статье пишут, что он сам вербовал местных жителей,служил в спец службах ДНР- значит он не агента резидент небольшой агентурной сети, он знает больше чем обычный агент - ему больше доверяли и инструкции давали развернутые с раскрытием конечных целей заданий.Можно верить статье.',
]

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
    await page.waitForTimeout(1000);
    await page.goto(link);
    console.log("logined and link opened")
    await page.waitForTimeout(2000);
    await page.click('button[aria-label=Нравится]');
    await page.type('textarea[class=comment-editor__editor]', comment[i]);
    await page.waitForTimeout(500);
    await page.click('button[class=comment-editor__send-button]');
    await page.screenshot({ path: 'screen' + i + '.png' });

    await browser.close();
}

(async () => {
    for (let i = 0; i < 8; i++) {
        await test(i);
    }
})();