/**
 * W ES6 wprowadzono dwie klasy kolekcji: Map i Set
 * Mapa (Map) służy do przechowywania obiektów skojarzonych z kluczem
 * Zbiór (Set) przechowuje unikalne obiekty
 * Stosowanie obiektów w charakterze mapy nie jest już zalecane z wielu względów:
 * - wydajnościowych (testowanie istnienia kluczy, dodawania kluczy jest znacznie szybsze dla mapy)
 * - konfliktów (obiekt może mieć już właściwości, co powoduje napisanie już kluczy) 
 * - typów kluczy (obiekt może miec klucze tylko typu String lub Symbol)
 * - kolejności kluczy i wartości (obiekt jest zbiorem i trydno określić kolejnośc kluczy, w mapie decyduje kolejność wstawiania elementów)
 * - określenia rozmiaru (mapa ma własciwość size, określenie liczby właściwości obiektu należy samodzilenie oprogramować) 
 */
console.log("*******************Map**************************");
//tworzenie mapy
const map = new Map();
//wstawienie elementów do mapy
map
.set("adam@wsei.edu.pl", {name: "Adam Kowal", ects: 123})
.set("ewa@wsei.edu.pl", {name: "Ewa Nowak", ects: 134})
.set("karol@wsei.edu.pl", {name: "Karol Szpak", ects: 34})
.set("adam@wsei.edu.pl", { name: "Adam Adamek", ects: 74 }); //wstawienie elementu pod istniejący klucz powoduje nadpisanie wartości
//iterowanie po mapie
for(let entry of map.entries()){
    console.log("klucz: %o, wartość: %o", entry[0], entry[1]);
}
//dostęp do kluczy, funkcja zwraca iterator
console.log(map.keys());
//dostęp do wartości, funkcja zwraca iterator
console.log(map.values());
//czy istnieje element w mapie?
console.log(map.has("adam@wsei.edu.pl"));
//usunięcie wartości ukrytej pod kluczem, funkcja zwraca wartośc logiczną
console.log("Czy usunieto? " + map.delete("ewa@wsei.edu.pl"));
console.log("Czy usunieto? " + map.delete("ewa@wsei.edu.pl"));
//rozmiar mapy, liczba kluczy
console.log(map.size);
//usunięcie zawartości mapy
map.clear();
console.log(map.size);
console.log("*******************Set**************************");
/**
 * Zbiory należy stosować zamiast tablic, gdyż metoda includes tablicy ma czas liniowy O(n)
 * a metoda 'has' może mieć czas stały O(1) lub O(logn).
 */
//tworzenie zbioru
const set = new Set();
set
.add(3)
.add(5)
.add(4)
.add(5);         //ponowne dodanie istniejącego w zbiorze elementu nie zmienia zbioru 
//rozmiar zbioru
console.log(set.size);
//czy element należy do zbioru?
console.log(set.has(4));
//usunięcie elementu ze zbioru
console.log(set.delete(4));
//pobranie iterator wartości zbioru
console.log(set.values())
//iterowanie po zbiorze
for(let item of set){
    console.log(item);
}
set.forEach(item => console.log(item));
//usunięcie wszystkich elementów ze zbioru
set.clear();
console.log("************************************************")
/**
 * Map i Set a tablice
 */
//Mapę można zainicjować tablicą
const numbers = new Map([["one", 1],["two", 2],["three", 3]]);
console.log(numbers.get("one"));
//Można utworzyć mapę z wartościami z dowolnej liczby tablic
const romanNumbers = [["I", 1],["II", 2],["III", 3]];
const allNumbers = new Map([...romanNumbers,["one", 1], ["two", 2], ["three", 3]]);
console.log(allNumbers);
//zbiór też można zainicjować tablicą
const hexDigits = new Set(["A", "B", "C", "D", "E", "F"]);
//zbiór utworzony na podstawie łańcucha zawiera znaki łańcucha
const letters = new Set("JavaScript");
console.log(letters);
//Można także zamienić zbiór na tablicę
const array = [... letters];
console.log(array);
//Podobnie z mapą
const numbersArray = [...allNumbers].flatMap(e => e);
console.log(numbersArray);