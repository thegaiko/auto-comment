import telebot
from telebot import types
bot = telebot.TeleBot('5255084244:AAHfPhLbJy9Lxyxupg1Q8AlpQykRL9jH6Fc')


@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    if message.text == "/start":
        bot.send_message(message.from_user.id, "Привет! Я Scepeter.")
        keyboard = types.InlineKeyboardMarkup()
        button_VK = types.InlineKeyboardButton(
            text='Вконтакте', callback_data='VK')
        keyboard.add(button_VK)

        button_INST = types.InlineKeyboardButton(
            text='Инстаграм', callback_data='INST')
        keyboard.add(button_INST)

        button_DZEN = types.InlineKeyboardButton(
            text='Яндрекс Дзен', callback_data='DZEN')
        keyboard.add(button_DZEN)

        bot.send_message(message.from_user.id,
                         "Выберите платформу для выполнения задачи:", reply_markup=keyboard)


@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    if call.data == "VK":
        bot.send_message(call.message.chat.id,
                         "Отправьте спиок телефонных номеров акканутов.")

    if call.data == "INST":
        bot.send_message(call.message.chat.id,
                         "Отправьте спиок телефонных номеров акканутов.")

    if call.data == "DZEN":
        bot.send_message(call.message.chat.id,
                         "Отправьте почты акканутов.")

    if call.data == "ch_os":
        keyboard = types.InlineKeyboardMarkup()
        button_url = types.InlineKeyboardButton(
            text='google', url='google.com')
        keyboard.add(button_url)
        bot.send_message(
            call.message.chat.id, "Выберите версию и разрядность ОС:", reply_markup=keyboard)


bot.polling(none_stop=True, interval=0)
