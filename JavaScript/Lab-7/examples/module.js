/**
 * Kod JS można umieszczać w modułach.
 * Ponizej przykład modułu eksportującego stłą i funckję
 * W pliku module.html najduje się przykłąd importu modułów
 */
export const name = "Karol";
export function calculator(a, b, op){
    return op(a, b) ?? NaN;
}