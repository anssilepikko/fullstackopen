# 0.4: uusi muistiinpano

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