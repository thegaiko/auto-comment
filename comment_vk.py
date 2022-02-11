import requests

url = "https://vk.com/al_wall.php?act=post"

payload = 'Message=%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0&act=post&al=1&from=wkview&hash=f1a9538f831a56be0f&need_last=0&only_new=0&order=asc&reply_to=690207223_3&reply_to_msg=&reply_to_user=0&timestamp=1644596569932'
headers = {
    'authority': 'vk.com',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'content-type': 'application/x-www-form-urlencoded',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'accept': '*/*',
    'origin': 'https://vk.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://vk.com/id690207223?w=wall690207223_4%2Fall',
    'accept-language': 'ru-RU,ru;q=0.9',
    'cookie': 'remixlang=0; remixstid=0_3mnZmDXyiM7vdVeERZugIbPfi1fl0DrWyvyhuS7zZXH; remixflash=0.0.0; remixscreen_width=1680; remixscreen_height=1050; remixscreen_dpr=2; remixscreen_depth=30; remixscreen_orient=1; remixscreen_winzoom=1; remixgp=cd007c4782e6e9e7fdea9c58f85614c1; remixrt=1; remixdt=0; tmr_lvid=377733d972dd83c19e38079ac564ddcd; tmr_lvidTS=1644596078641; remixuas=YTQyYWFkMmVmNjc0MWFlZTQ2OTgxNzFk; remixnsid=92a0a1e06441dc3e47769e8e9fd7fd95a792d77c769b247afab9bb81264f9731b1f09afd46bc2c917a42e; remixsid=1_yuejNqun3SqSws6P5fzqnCqeFHjasc_peH8NE8sVzhsBg0l5SzBgPRQ7n33HPWFBJ195gywOFKbWtcexCPUb0A; remixluas=ZWFiODEzYzczOTBjMTdkNDY0NDU5OTA0; remixst=82add8f0e078d50ab0; remixQUIC=1; remixua=50%7C-1%7C194%7C607587724; remixseenads=1; tmr_reqNum=10; tmr_detect=0%7C1644596557829'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
