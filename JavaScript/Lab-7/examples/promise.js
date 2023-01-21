/**
 *  Promise (obietnica) to obiekt, który opakowuje jakiś wynik działania asynchronicznego.
 *  W sytuacji rozwiązania obietnicy (np. pobrania danych z serwera)
 *  zostanie wywołany callback metody `then`. Argumentem funkcji callback jest obiekt z danymi obietnicy.
 *  W sytuacji, gdy obietnica nie jest pozytywnie rozwiązana (awaria serwera, brak żądanych danych, wyjątek),
 *  metoda `catch` wywołuje swój callback, którego argumentem jest obiekt błędu. 
 */
const randomAction = new Promise((resolve, reject) => {
    const time = Math.random() * 1000;
    setTimeout(() => {
        if (Math.random() < 0.5) {
            //rozwiązanie obietnicy,
            resolve(`Primise 1 (resolve): Data loaded after ${time.toFixed(0)} ms`);
        } else {
            //odmowa
            reject("Promise 1 (reject): No data!")
        }
    }, time);
});

randomAction
    .then(value => {
        console.log('Promise 1 (then): ', value);                     //funkcja sukcesu, obietnica spełniona
    })
    .catch(error => {
        console.log('Promise 1 (catch): ', error);                     //funkcja obsługi błędu, obietnica nie spełniona
    });
console.log("Promise 1: Statement after calling promise 1");