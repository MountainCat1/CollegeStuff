/**
 * Napisz skrypt wykonaującywalidację formularza z pliku `form.html` wg założeń:
 * - nie ma połączenia między Krakowem a Gdańskiem i między Gdańskiem a Poznaniem
 * - data w polu "start-date" nie może być wcześniejsza od bieżącej daty
 * - data w polu "end-date" musi być późniejsza od daty w "start-date"
 * Rozwiązanie proste polega na zablokowaniu wysłania formularza dla niepoprawnych danych np. gdy wybrano Kraków i Gdańsk lub 1.02.2023 i 1.02.2023,
 * po próbie wysłania z błędami należy użytkownikowi wyświetlić błędy w odpowiednich elementach <span> pod polami formularza.
 * Rozwiązanie zaawansowane polega na dynamicznych zmianach w formularzu (zmian atrybutów pól), aby użytkownik nie mógł wybrać
 * niepoprawnych danych.
 * Uwaga!
 * Nie można zmieniać pliku `form.html`!
 * Wskazówki
 * zdarzenie 'input' wywoływane jest, gdy użytkownik wybierze lub wpisze dane w polu formularza
 * zdarzenie 'change' wywoływane jest, gdy użytkownik tylko zmieni wartość w polu
 * funkcja obiektu zdarzenia anulująca normalny tryb obsługi zdarzenia to preventDefault(), ale nie blokuje propagacji
 * Informacje na temat walidacji fomrularzy w JS: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 */

const travelForm = {
    form: document.querySelector('form'),

    startLocation:  document.forms[0][1],
    startLocationError:  document.forms[0][0].children[2],

    targetLocation:  document.forms[0][2],
    targetLocationError:  document.forms[0][0].children[5],

    startDate: document.forms[0][4],
    startDateError: document.forms[0][3].children[2],
    endDate: document.forms[0][5],
    endDateError: document.forms[0][3].children[5],
    validate(){

        const startLocation = this.startLocation.value;
        const targetLocation = this.targetLocation.value;
        const startDate = this.startDate.value;
        const endDate = this.endDate.value;

        console.log('Validation', startLocation, targetLocation, startDate, endDate)

        if(    startLocation === 'S4' && targetLocation === 'E2'
            || startLocation === 'S2' && targetLocation === 'E4'
            || startLocation === 'S4' && targetLocation === 'E5'
            || startLocation === 'S5' && targetLocation === 'E4'){
            const error = "Brak połączenia między tymi miastami";

            this.startLocation.setCustomValidity(error)
            this.startLocationError.textContent = error;

            this.targetLocation.setCustomValidity(error)
            this.targetLocationError.textContent = error;

            return false;
        }
        else{
            this.startLocationError.textContent = "";
            this.targetLocationError.textContent = ""
        }

        if(startDate > endDate) {
            const error = "Data rozpoczęcia musi być wcześniejsza niż data zakończenia";

            this.startDate.setCustomValidity(error)
            this.startDateError.textContent = error;
            return false;
        }else{
            this.startDateError.textContent = "";
            this.endDateError.textContent = "";
            this.startDate.setCustomValidity("")
        }

        return true;
    }
}

travelForm.validate();




// travelForm.form.addEventListener('change', function() {
//     if (!travelForm.validate()){              //wywołanie walidacji
//         console.log("Submit prevented");
//         travelForm.startLocation.setCustomValidity("Edition year cant be in future!");
//         event.preventDefault();              //funkcja blokuje normalny proces propagacji zdarzenia, dane nie zostaną wysłane
//     };
// });

travelForm.form.addEventListener('submit', event => {
    if (!travelForm.validate()){              //wywołanie walidacji
        console.log("Submit prevented");
        travelForm.startLocation.setCustomValidity("Edition year cant be in future!");
        event.preventDefault();              //funkcja blokuje normalny proces propagacji zdarzenia, dane nie zostaną wysłane
    }else{
        console.log("Submited!");
    }
    event.preventDefault();
});






/**
 * Zdarzenia formularzy i jego pól
 * 'submit'
 * 'oninvalid'
 * 'onvalid'
 * 'oninput'
 * 'onchange'
 * ''
 */