// Inizializzazione animazioni AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disable: 'mobile' // Opzionale: disabilita su mobile se vuoi massime prestazioni
    });

    console.log("The Pop Show - Sito caricato correttamente!");
});

// Esempio: Gestione semplice di un menu mobile (se deciderai di aggiungerlo)
const subscribeBtn = document.querySelector('button');
subscribeBtn.addEventListener('click', () => {
    // Logica futura per iscrizione
});