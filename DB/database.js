import * as SQLite from 'expo-sqlite';
import { useState } from 'react';

const db = SQLite.openDatabaseAsync('animais');

export async function VerAnimais() {
    const [listAnimais, setListAnimais] = useState([]);

    const allRows = await db.getAllAsync('SELECT * FROM Animais');
    let newArray = [];
    for (const row of allRows) {
        console.log(row.nome_animal);
        newArray.push(row.nome_animal);
    }
    setListAnimais(newArray);
}