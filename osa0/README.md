# OSA0

## 0.4: uusi muistiinpano

- Selain -> Palvelin: HTTP POST <https://studies.cs.helsinki.fi/exampleapp/new_note>

Uudelleenohjaus (302) osoitteeseen <https://studies.cs.helsinki.fi/exampleapp/new_note> jossa oletettavasti suoritetaan ohjelmakoodia ja sivu päivitetään

- Selain -> Palvelin: HTTP GET <https://studies.cs.helsinki.fi/exampleapp/notes>
- Palvelin -> Selain: notes
- Selain -> Palvelin: HTTP GET <https://studies.cs.helsinki.fi/exampleapp/main.css>
- Palvelin -> Selain: main.css
- Selain -> Palvelin: HTTP GET <https://studies.cs.helsinki.fi/exampleapp/main.js>
- Palvelin -> Selain: main.js
- Selain -> Palvelin: HTTP GET <https://studies.cs.helsinki.fi/exampleapp/main.js>
- Palvelin -> Selain: data.json

## 0.5: Single Page App

- Selain -> Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
- Palvelin -> Selain: spa (html)

HTML-sivu, jossa linkit main.css ja spa.js

- Selain -> Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
- Palvelin -> Selain: main.css
- Selain -> Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
- Palvelin -> Selain: spa.js
- Selain -> Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
- Palvelin -> Selain: data.json
- Selain -> Palvelin: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
- Palvelin -> Selain: favicon.ico

Selain generoi sivun ladatuista elementeistä DOM-apin avulla

## 0.6: Uusi muistiinpano

- Selain -> Palvelin: HTTP POST <https://studies.cs.helsinki.fi/exampleapp/new_note_spa>

Selain lähettää palvelimelle JSON-muotoista dataa. Vastauskoodi 201 eli onnistunut toimenpide.

Taustalla uusi tieto tallennetaan ja sen jälkeen ruutu päivitetään