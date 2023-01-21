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
    console.log(modeSelect)
    for (let i = 0; i < modeSelect.children.length; i++) {
        const selectElement = modeSelect.children[i].children[0];
        console.log(selectElement)
        if (selectElement.checked){
            console.log('returning')
            console.log( selectElement)
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

selectDate.value = '2023-01-19'

inputCode.appendChild(createCurrencyEntryDiv('EUR', 'EUR'))
inputCode.appendChild(createCurrencyEntryDiv('USD', 'USD'))
inputCode.appendChild(createCurrencyEntryDiv('PLN', 'PLN'))

outputCode.appendChild(createCurrencyEntryDiv('EUR', 'EUR'))
outputCode.appendChild(createCurrencyEntryDiv('USD', 'USD'))
outputCode.appendChild(createCurrencyEntryDiv('PLN', 'PLN'))

calculateBtn.addEventListener('click', async (e) => {
    const data = await fetchData(selectDate.value)
        .then(x => x.json())

    console.log(data)
    const rates = data[0].rates;
    console.log(rates);

    let selectedCurrency = undefined;
    for (let i = 0; i < inputCode.children.length; i++) {
        const child = inputCode.children[i];
        if(child.selected)
            selectedCurrency = child.value;
    }

    let currencyToCalculate = rates.filter(x => x.code === selectedCurrency)[0];

    const mode = getMode();

    let rate = undefined;
    console.log(mode)
    if(mode.value === 'bid')
        rate = currencyToCalculate.bid;
    else
        rate = currencyToCalculate.ask;

    console.log(rate)


    console.log()
    console.log()
    outputAmount.innerText =  inputAmount.value  * rate + ' PLN';
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