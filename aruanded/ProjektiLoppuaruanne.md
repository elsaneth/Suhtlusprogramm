# SUHTLUSPROGRAMM

## Projekti kokkuvõte

Käesoleva aasta maikuus valmis kursuse “Programmeerimine” nõuetel nelja tudengi loodud suhtlusprogramm. Projekti eesmärgiks oli arendada suhtlusprogramm ühes ja samas wifi võrgus, milles saavad rääkida erinevad kasutajad reaalajas. Programmi põhiülesandeks oli saada kasutajate sõnumid üksteisele reaalajas nähtavaks, nii et nad saaksid omavahel suhelda. 

Programm kirjutati neljas keeles: Python, JavaScript, CSS ja HTML. Kuna eelnevalt on läbitud üks kursus Pythonis, siis ülejäänud keeli pidi ise õppima.. 

Püstitatud eesmärk sai täidetud - suhtlusprogramm töötab. Suudab vastu võtta uusi kasutajaid ja reaalajas sõnumeid saata. Kokkuvõttes on rühmaliikmed programmi väljakujunemisega rahul, sest alustatud sai ei millestki ja väheste teadmistega programmeerimisest.


## Teostatud tööd

Programm koosneb neljast failist:

### server.py 

Esimese sammuna oli oluline teha töötav server, kus oleks võimalik kasutajatel vestelda. Ilmselt programmi kõige olulisem osa või vähemalt alustala, et oleks keskkond kuhu kasutajad saaksid koguneda. 

Serveri kirjutamise keeleks valiti Python, esialgu ka põhiliselt sellepärast, et see keel on kõikidele rühmaliikmetele tuttav. Hilisema uurimise käigus selgus, et keel on ka populaarne serveripoolses arenduses.

Oli teada, et serverile lisaks on ka kliendipoolne fail ning need on vaja omavahel ühendada. Seega hakati otsima, mis võimalused oleks klient serveriga ühendada. Otsustati kasutada teeke: websockets ja asyncio.

### client.js

Kuna oli soov, et meie suhtlusprogrammil oleks kasutajaliides HTMLis, siis otsustati kliendipoolne kood kirjutada JavaScriptis. JavaScript on veebipõhine keel, mida on lihtne ühendada HTMLiga ning suudab serveriga reaalajas suhelda ja dünaamiliselt uuendada kasutajaliidest. Üks rühmaliikmetest oli ka põgusalt JavaScriptiga tuttav ning koodi kirjutamine oli mõnevõrra lihtsam.

### app.html

Programmi osa, mis struktureerib kasutajaliidese veebileheküljel. HTMLiga on seotud client.js ning HTMLi avades, avaneb veebilehekülg, kus kasutaja saab ennast ühendada serveriga ning alustada vestlust.

### UIstyling.css

Loob kasutajaliidesele (app.html) kujunduse.


## Rühmaliikmete panused

Teostatud tööd programmi loomisel on raske hinnata, sest kõik rühmaliikmed tegid programmi loomiseks midagi. Rohkem sai aega veedetud koos klassis arutades ja koodi kirjutades. Samuti probleemide lahendusi otsiti klassiruumis või sotsiaalmeedias suheldes. Suure panuse töösse andsid Elisabeth ja Hugo oma eelnevate teadmistega programmeerimisest, tänu sellele said nad ka juhendada teisi rühmaliikmeid. Peamised punktid, mida tööde jagunemisel võib välja tuua on järgmised:


### Elisabeth:
- programmi struktuuri ülesseadmine
- ülesannete jagamine
- server.py ja client.js kirjutamine
- githubi hoidla eest vastutamine
- aruannete täiendamine

### Hugo:
- app.html ja Ulstyling.css kirjutamine
- teadmised disanimisest ja keelte omavahelisest sidumisest

### Rainis:
- server.py ja client.js kirjutamine
- probleemide lahendamine ja lahenduste otsimine
- aruande ja slaidide tegemine
- teiste kirjutatud koodide ülevaatus

### Tristan:
- app.html ja Ulstyling.css kirjutamine
- aruande ja slaidide tegemine
- vigade otsimine programmis ja nende parandamine

## Projekti tugevused ja nõrkused

### Tugevused
- Programm töötab ja kasutajatel on võimalik omavahel suhelda
- Programmil on lihtsasti kasutatav kasutajaliides, vestlus ei toimu käsurealt
- Sõnumid erinevate kasutajate vahel vahetuvad kiiresti

### Nõrkused
- Kasutajatel võimalik serveriga ühendada kui nad on samas wifi võrgus ehk
- kõik, kes soovivad vestluses osaleda peavad olema samas wifi võrgus
- Pole kasutatud turvameetmeid
- Ei ole võimalik näha varem saadetud sõnumeid, nt kui kasutaja liitub serveriga, siis ta ei näe, mis selles serveris saadeti vahetult enne tema liitumist
- Hetkel lihtne server katki teha (nt kasutaja, kes ühendub serveriga kirjutab lihtsalt ühe lõpmatu tsükli kliendipoolsesse faili)

## Tulevik

Tegemist on hea programmiga, mille arendamisega õppida uusi oskusi. Eesmärgiga saada veelgi rohkem uusi teadmisi ja saada osavamaks probleemida lahendajaks võiks programmi edasi arendada. 

Arendusvõimalusi on mitmeid:
- suhtlusprogrammi võiks arendada nii kaugele, et seda saaks kasutada ükskõik, mis WiFi võrgus.
- Varem saadetud sõnumid oleksid näha ja ka samas, et oleks suhtlus kahe inimese vahel privaatne. 
- Serverit oleks lihtsam tööle panna, ehk ei peaks kasutama selleks käsuviipa.
- Disaini poole pealt võiksid olla sõnumid eraldi mullikesed, igal kasutajal oma pilt ja et saaks saata ka emotikone. 
- Turvameetmed
- Testide kirjutamine programmile
