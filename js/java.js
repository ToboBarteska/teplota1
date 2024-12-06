
document.addEventListener('DOMContentLoaded', () => {
    function prevod(typ) {
        // Získání hodnoty ze vstupu a přímá konverze pomocí Number
        const teplota = Number(document.getElementById('teplota').value);

        // Proměnná pro uložení výsledku
        let vysledek = '';

        // Kontrola, zda hodnota není neplatné číslo
        if (!teplota && teplota !== 0) {
            vysledek = 'Prosím zadej platnou číselnou hodnotu!';
        } else if (typ === 'C') {
            vysledek = `${teplota} °C = ${(teplota * 9 / 5 + 32).toFixed(2)} °F`;
        } else if (typ === 'F') {
            vysledek = `${teplota} °F = ${((teplota - 32) * 5 / 9).toFixed(2)} °C`;
        }

        // Zobrazení výsledku na stránce
        document.getElementById('vysledek').textContent = vysledek;
    }

    // Přidání event listenerů na tlačítka
    document.querySelector("button:nth-child(1)").addEventListener('click', () => prevod('C'));
    document.querySelector("button:nth-child(2)").addEventListener('click', () => prevod('F'));
});


    