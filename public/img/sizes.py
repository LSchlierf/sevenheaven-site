#!/home/lucas/venv/bin/python
import os
from PIL import Image

SIZES = [1920, 1280, 980, 420]

rootdir = os.path.dirname(__file__)

for currdir, dirs, files in os.walk(rootdir + os.sep + 'original'):
    for file in files:
        with Image.open(currdir + os.sep + file) as img:
            print('resizing ' + (currdir + os.sep + file).removeprefix(rootdir + os.sep + 'original' + os.sep))
            currw, currh = img.size
            for size in SIZES:
                print(str(size), end='')
                neww = size
                newh = int(size / currw * currh)
                newimg = img.resize((neww, newh))
                newpath = rootdir + os.sep + str(size) + currdir.split('original')[1]
                if not newpath.endswith(os.sep):
                    newpath += os.sep
                if not os.path.exists(newpath):
                    os.mkdir(newpath)
                newfile = newpath + file
                with open(newfile, "wb") as f:
                    newimg.save(f)
                print(' done ', end='')
            print('resized.')

print('All done.')