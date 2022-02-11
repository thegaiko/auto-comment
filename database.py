from distutils.command.config import config
from itertools import count
import pytesseract
from PIL import Image

img = Image.open('1.png')

text = pytesseract.image_to_string(
    img)


for i in range(len(text)):
    count_space = 0
    if text[i] == ['о']:
        count_space += 1
        text.remove[i]


print(text)
