/**
 * Informacje o propagacji zdarzeń w JS:
 * @type {HTMLElement}
 */
const body = document.body;
const info = document.getElementById('info');
const div = document.getElementById('main-div');
const btn1 = document.getElementById('open-button');
const para = document.getElementById("para");
const listener = event => {
    event.target.style.background = '#FF0000';              //element, który przechwycił zdarzenie (któryś z potomków div'a)
    event.currentTarget.style.background = '#3355AA';
    info.innerText += `capturing ${event.target.tagName}\n`;

};
btn1.addEventListener('click', event => {
    event.target.style.background = '#00FF00';
    event.stopPropagation();                                //ta metoda zatrzymuje propagowanie zdarzenia
});
/**
 * Obsługa zdarzenia 'click' przypisana jest do kontenera div, który zawiera dwa przyciski i paragraf.
 * Każdy z elementów potomnych też obsługuje to zdarzenie.
 * Co się stanie jeśli zdarzenie wystąpi w zagnieźdżonym elemencie np. paragrafie?
 * Zdarzenie jest propagowane w trzech fazach
 * - przechwytywania (capturing phase)
 * - osiągnięcia celu (target phase)
 * - propagacji w górę (bubbling phase)
 */
body.addEventListener('click', e => {
    info.innerText += `capturing body, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, true);                                   //wartość true - funkcja obsługi zdarzenia wywoływana jest w fazie capturing - schodzenia w dół DOM
div.addEventListener('click', e => {
    info.innerText += `capturing div, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, true);
para.addEventListener('click', e => {
    info.innerText += `capturing paragraph, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, true);
body.addEventListener('click', e => {
    info.innerText += `bubbling body, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, false);                                  //wartość false (domyślna) - funkcja obsługi wywoływana jest w fazie bubbling - wchodzenia w górę DOM
div.addEventListener('click', e => {
    info.innerText += `bubbling div, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, false);
para.addEventListener('click', e => {
    info.innerText += `bubbling paragraph, target: ${e.target.tagName}, current target: ${e.currentTarget.tagName}\n`;
}, false)
