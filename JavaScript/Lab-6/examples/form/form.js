/**
 * Walidacja formularzy za pomocą kodu JavaScript powinna występować w
 * sytuacji, gdy nie można jej zrealizować za pomocą wbudowanej w znaczniki walidacji określanej przez atrybuty.
 * Najczęściej dotyczy to własnych kontrolek lub uzależnienia wartości pala formalurza od wartości wpisanej w innym polu np.
 * data zakończenia zadania nie może być wcześniejsza od daty rozpoczęcia.
 *
 * Obiekt document posiada kolekcję `forms`. Gdy dokument zawiera jeden formularz jest to najprostrza metoda
 * dostępu do pól.
 */
const bookForm1 = {
    form: document.forms[0],
    titleField: document.forms[0][1],
    editionYearField: document.forms[0][3],
    validate(){
        const title = this.titleField.value;
        const editionYear = Number(this.editionYearField.value);
        console.log("Validation", title, editionYear, title.length);
        return title && title.length > 3 && title.length < 50
            && editionYear <=  (new Date()).getFullYear();
    }
}

/**
 * Zdarzenia formularzy i jego pól
 * 'submit'
 * 'oninvalid'
 * 'onvalid'
 * 'oninput'
 * 'onchange'
 * ''
 */
bookForm1.form.addEventListener('submit', event => {
    if (!bookForm1.validate()){              //wywołanie walidacji
        console.log("Submit prevented");
        bookForm1.editionYearField.setCustomValidity("Edition year cant be in future!");
        event.preventDefault();              //funkcja blokuje normalny proces propagacji zdarzenia, dane nie zostaną wysłane
    }
});

/**
 * Można także dostać się do składowych formularza poprzez id pól formularza lub querySelector
 */
const bookForm2 = {
    form: document.getElementById("form-book"),
    titleField: document.querySelector("[name= 'title']"),
    editionYearField: document.getElementById("editionYear"),
    /**
     * Funckja walidującą
     */
    validate: function(){
        const title = this.titleField.value;
        const editionYear = Number(this.editionYearField.value);
        console.log("Validation", title, editionYear, title.length);
        return title && title.length > 3 && title.length < 50
            && editionYear >= 1900 && editionYear <= 2050;
    }
};
/**
 * Zadarzenie 'submit' oznacza próbę wysłanie danych z formularza pod wskazany w atrybucie `action` url
 * Słuchacz tego zdarzenia pozwala na wykonanie jakich operacji przez wysłaniem
 * Wywołanie wewnątrz słuchacza funkcji preventDefault() blokuje normylny proces przetwarzania zdarzenia.
 * Tym samym dane nie zostaną wysłane.
 */
