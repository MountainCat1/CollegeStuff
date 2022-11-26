/**
 * Zdefiniuj klasę TodoTask opisująca zadanie do wykonania
 * Właściwości
 * - decription: opis tekstowy zadania
 * - deadline: ostateczny termin (data i czas) na wykonanie zadania
 * - finished: termin wykonania zadania
 * - done: pole logiczne oznaczające wykonanie zadania
 * - created: data i czas utworzenia zadania
 * Utworzone zadanie powinno:
 * - automatycznie dodawać bieżącą date i czas w polu created
 * - w polu done mieć wartość false
 * - w polu finished mieć wartość null
 * Próba utworzenia zadania z terminem z przeszłości w deadline powinno zgłosić błąd (wyjątek)
 * W utworzonym zadaniu:
 * - możliwa jest zmiana opisu (description)
 * - możliwa jest zmiana deadline pod warunkiem, że jest większy (późniejszy) od obecnej wartości tego pola
 * - możliwe jest ustawienie zadania jako wykonane (`done` na true), ale po 
 *   ustawieniu pola `done` na true nie można nic już zmienić (done, description, deadline itd.) 
 * - niemożliwe jest ustawianie pola finished, które powinno być automatycznie wypełniane (bieżąca data i czas) 
 *   podczas ustawiania pola done na true .
 * - niemożliwe jest ustawienia zadania jako wykonanego, jeśli bieżąca data jest późniejsza od deadline.
 * - zadanie po zatwierdzeniu lub po przekroczeniu deadlin'u nie może być zmieniane tzn.
 *   wywołanie któregokolwiek setter'a nie powinno nic zmieniać w zadaniu.
 *  Dopasuj konstruktor do przykładowego wywołania w testach.
 */
class TodoTask {
}


//Uwaga! Testy działają tylko w dniu zajęć tj. 26.11.2022
const task = new TodoTask("Nauczyć się JavaScript'u", new Date(Date.parse("2023-01-30T00:00:00")));
try {
    const now = new Date();
    console.log(task.created.getDate())
    if (!task.done
        && task.description === "Nauczyć się JavaScript'u"
        && task.deadline.toString() === (new Date(2023, 0, 30, 0, 0, 0)).toString()
        && task.created.getDate() === now.getDate()
        && task.created.getMonth() === now.getMonth()
        && task.created.getYear() === now.getYear()
    ) {
        console.log("Test 11 passed");
    } else {
        console.log("Test 11 failed");
    }
} catch (e) {
    console.log("Test 11 failed");
}
try {
    task.done = true;
    const d1 = task.finished;
    const d2 = new Date();
    task.deadline = new Date(2000, 20, 10);
    task.description = "";
    task.done = false;
    if (task.done
        && d1.getYear() === d2.getYear()
        && d1.getMonth() === d2.getMonth()
        && d1.getDate() === d2.getDate()
        && task.description === "Nauczyć się JavaScript'u"
    ) {
        console.log("Test 12 passed");
    } else {
        console.log("Test 12 failed");
    }
} catch (e) {
    console.log("Test 12 failed");
}




