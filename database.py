from distutils.command.config import config
from itertools import count
import pytesseract
from PIL import Image

N = 7
f = open('bd.txt', 'w')

for i in range(N):
    img = Image.open(f'{i}.jpeg')
    text = pytesseract.image_to_string(
        img, lang='rus')
    f.write("'" + text + "',")
