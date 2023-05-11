# Vahearuanne

## Tehtud
- Igaühele ülesanded jagatud
- Programmi ülesehitus paigas
- Vajalikud libraries valitud

## Probleemid
- Raske alustada
1) Ei saa aru, kuidas server töötab
2) Raske aru saada, kuidas klient serveriga ühildub
- Rühmaliikmete tase erinev
1) Mõnel on rohkem kogemust
2) Mõne ainuke kogemus on esimesel semestril kursus "programmeerimine"
- Rühmaliikmete programmeerimise skill on madal
1) Kõigil liikmetel on kevadsemestril on vähe skill practicet tehtud
2) Ei leita piisavalt aega iseseisvalt õppimiseks
3) Raske leida sobivat materjali õppimiseks

## Programm koosneb neljast failist

### server.py
- Valitud keeleks Python

Python on populaarne serveripoolse arenduse keel tänu oma lihtsusele, 
loetavusele ja paindlikkusele. Sellel on suur hulk raamatukogusid ja raamistikke, 
mis aitab lihtsasti veebirakendusi luua. Pythonil põhinevad veebiraamistikud nagu Flask ja Django 
toetavad sisseehitatud web socketeid, mis muudab reaalajas suhtluse klientide vahel lihtsaks.

Libraries:
- websockets
- asyncio

### client.js

- Valitud keeleks Javascript

Kuna soovime, et suhtlusprogramm oleks kasutatav veebis. Siis sobilik on kirjutada kliendi poolne programm JavaScriptis, 
mis on veebipõhine keel. Suudab suhelda reaalajas serveriga ning dünaamiliselt uuendada kasutajaliidest. 

### app.html

- Kirjutatud markupis

Soovime, et meie programmi saaks kasutada veebis ning selleks kirjutame programmi HTMLis. HTMLis lisame scripti kliendipoolse programmi (client.js).

### UIstyling.css

- Kirjutatud stylesheetsis

Kasutajaliides kujundatud CSSis.


