#!/home/lucas/venv/bin/python
import json
import string
import os

filedir = os.path.dirname(__file__)

with open(filedir + os.sep + "Repertoire.txt", "r") as f:
    repertoire = f.readlines()
    # unify with trailing newlines
    repertoire = list(map(lambda l : l.strip() + '\n', repertoire))
    # sort out empty lines
    repertoire = list(filter(lambda l : len(l.strip()) > 0, repertoire))
    # sort the list
    repertoire.sort()
    # remove duplicates
    repertoire = list(dict.fromkeys(repertoire))
#write back sorted list
with open(filedir + os.sep + "Repertoire.txt", "w") as f:
    f.writelines(repertoire)
#initialize the dict for letter mapping
letters = {}
for i in string.ascii_uppercase:
    letters[i] = []
letters["#"] = []
# map the songs to the letters
for song in repertoire:
    title = song.strip().split(" - ")[0]
    artist = song.strip().split(" - ")[1]
    letter = title[0].upper()
    if letter in string.ascii_uppercase:
        letters[letter].append({"title": title, "artist": artist})
    else:
        letters["#"].append({"title": title, "artist": artist})

with open(filedir + os.sep + "Repertoire.json", "w") as r:
    json.dump([{"letter": letter, "songs": letters[letter]} for letter in letters], r, indent=4)