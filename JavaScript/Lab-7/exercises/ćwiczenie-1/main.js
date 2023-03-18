let nbpRates;
const inputCode = document.getElementById("input-currency-code");
const outputCode = document.getElementById("output-currency-code");
const inputAmount = document.getElementById("input-amount");
const outputAmount = document.getElementById("output-amount");
const inputLabel = document.getElementById("input-amount-label");
const outputLabel = document.getElementById("output-amount-label");
const selectDate = document.getElementById("effective-date");
const error = document.getElementById("error");
const calculateBtn = document.getElementById("calculateBtn");

const modeSelect = document.getElementsByTagName('fieldset')[0];

const getMode = () => {
    for (let i = 0; i < modeSelect.children.length; i++) {
        const selectElement = modeSelect.children[i].children[0];

        if (selectElement.checked){
            return selectElement;
        }

    }
    throw new Error();
}

const createCurrencyEntryDiv = (innerText, value) => {
    let element = document.createElement(`option`);
    element.innerText = innerText;
    element.classList.add('dropdown-item')
    element.value = value;
    return element;
}

async function fetchData(date) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.nbp.pl/api/exchangerates/tables/C/' + date
    const option = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    };
    return fetch(proxyUrl + targetUrl, option)
}

function updateTexts(){
    console.log(getMode().value)
    if(getMode().value !== 'bid'){
        inputLabel.innerText = 'Chcę dostać'
        outputLabel.innerText = 'Płacę'
    }else{
        inputLabel.innerText = 'Mam'
        outputLabel.innerText = 'Dostanę'
    }
}

document.onclick = updateTexts;// ('click', updateTexts);

selectDate.value = '2023-01-19'

fetchData('2023-01-19').then(x => x.json()).then(x => {
    let rates = x[0].rates;
    console.log(rates)

    rates.forEach(x => {
        inputCode.appendChild(createCurrencyEntryDiv('EUR', 'EUR'))
    })
});




inputCode.appendChild(createCurrencyEntryDiv('USD', 'USD'))
inputCode.appendChild(createCurrencyEntryDiv('PLN', 'PLN'))

outputCode.appendChild(createCurrencyEntryDiv('EUR', 'EUR'))
outputCode.appendChild(createCurrencyEntryDiv('USD', 'USD'))
outputCode.appendChild(createCurrencyEntryDiv('PLN', 'PLN'))

calculateBtn.addEventListener('click', async (e) => {
    const data = await fetchData(selectDate.value)
        .then(x => x.json())

    const rates = data[0].rates;


    let selectedInputCurrency = undefined;
    for (let i = 0; i < inputCode.children.length; i++) {
        const child = inputCode.children[i];
        if(child.selected)
            selectedInputCurrency = child.value;
    }

    let selectedOutputCurrency = undefined;
    for (let i = 0; i < outputCode.children.length; i++) {
        const child = outputCode.children[i];
        if(child.selected)
            selectedOutputCurrency = child.value;
    }

    let inputCurrencyToCalculate = rates.filter(x => x.code === selectedInputCurrency)[0];
    let outputCurrencyToCalculate = rates.filter(x => x.code === selectedOutputCurrency)[0];

    if(inputCurrencyToCalculate === undefined)
        inputCurrencyToCalculate = {bid: 1, ask: 1, code: 'PLN'}
    if(outputCurrencyToCalculate === undefined)
        outputCurrencyToCalculate = {bid: 1, ask: 1, code: 'PLN'}


    const mode = getMode();

    let inputRate = undefined;
    if(mode.value === 'bid')
        inputRate = inputCurrencyToCalculate.bid;
    else
        inputRate = inputCurrencyToCalculate.ask;

    let outputRate = undefined;
    if(mode.value === 'bid')
        outputRate = outputCurrencyToCalculate.bid;
    else
        outputRate = outputCurrencyToCalculate.ask;

    outputAmount.innerText =  inputAmount.value * inputRate / outputRate + ' ' + outputCurrencyToCalculate.code;
})


/**
 * Zaimplementuj kalkulator walutowy, który pobiera dane kursów z API NBP.
 * Adres:
 * https://api.nbp.pl/api/exchangerates/tables/C/<data>,
 * w miejscu <data> należy wstawić datę z elementu HTML o id `effectiveDate`
 * np.
 * https://api.nbp.pl/api/exchangerates/tables/C/2023-01-19
 * Serwer zwróci kursy walut o poniższej strukturze jeśli w żądaniu nagłówek `Accept` ma wartość `application/json`:
 * [
 *   {
 *     "table": "C",
 *     "no": "014/C/NBP/2023",
 *     "tradingDate": "2023-01-19",
 *     "effectiveDate": "2023-01-20",
 *     "rates": [
 *       {
 *         "currency": "dolar amerykański",
 *         "code": "USD",
 *         "bid": 4.3183,
 *         "ask": 4.4055
 *       },
 *       {
 *         "currency": "dolar australijski",
 *         "code": "AUD",
 *         "bid": 2.9852,
 *         "ask": 3.0456
 *       },
 *       ...
 *    }
 *  ]
 *  Wypełnij elementy `inputCode` i `outputCode` listą opcji o wartości kodów walut: USD, EUR itd.
 *  Na podstawie trybu odczytanego z pól typu radio określ tryb: sprzedaż lub kupna
 *  Na podstawie trybu kodów walut wejsciowej (inputCode) i wyjściowej (outputCode) oraz kwoty wejściowej (inputAmount) wylicz jej wartość
 *  w walucie wyjściowej (outputAmount).
 *  Jeśli wystąpi błąd podczas pobierania lub nie istnieje tabela dla wybranej daty wyświetl komunikat błedu w elemencie error
 *  Zmiana trybu (z kupna na sprzedaź lub ze sprzedaży na kupno) powinna:
 *  - zmienić wynik w polu kwoty obliczonej `outputAmount`
 *  - zmienić treść elementów `inputLabel` i `outputLabel`
 *  przykłady wyglądu kalkulatora po pobraniu danych:
 *  - dla trybu `Kurs kupna` - img1.png
 *  - dla trybu 'Kurs sprzedaży - img2.png
 *
 */