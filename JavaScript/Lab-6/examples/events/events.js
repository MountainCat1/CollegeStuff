const liElement = document.getElementById("people").children.namedItem("staszek");
const titleInput = document.getElementById("title");
/**
 * Elementy posiadają właściwości o nazwie wg wzoru:
 * onXXX, gdzie  XXX jest nazwą zdarzenia np.
 * onclick
 * Do nich można przypisać funkcję obsługi zdarzenia
 * Nazwy zdarzeń związanych z myszą
 * click
 * dblclick
 * mouseup
 * mousedown
 * mouseover
 * mouseout
 */
// document.body.onclick = function(event ){
//     alert("body clicked");
// }

const mouseoverFunction = event => titleInput.style.backgroundColor = '#FFAABB';
/**
 * Zarejestrownanie funkcji obsługi zdarzenia za pomoca funkcji addEventListener:
 * - 'mouseover': nazwa zdarzenia
 * - mouseoverFunction:  funkcja wywoływana w chwili wystąpienia zdarzenia
 * - event: parametr funkcji obsługi z z danymi zdarzenia, typ obiektu zdarzenia zależy od rodzaju zdarzenia           -
 */
titleInput.addEventListener('mouseover', mouseoverFunction);
/**
 * Motoda addEventListener jest najbardziej uniwersalna bo:
 * - można rejestrować wiele funkcji
 * - można wyrejestrować wybrne funkcje
 */
titleInput.removeEventListener('mouseover', mouseoverFunction);
titleInput.addEventListener('mouseout', e => titleInput.style.backgroundColor = '#FFFFFF');

for (let item of document.getElementById("people").children) {
    onClick = event => {
        const name = event.target.textContent;
        console.log(event.button);
        console.log(event.type);
        event.target.textContent = event.target.textContent.toUpperCase();
    };
}
liElement.addEventListener('click', onClick);
liElement.addEventListener('mouseover', e => document.body.style.cursor = 'pointer');
liElement.addEventListener('mouseout', e => document.body.style.cursor = 'auto');
function removeLiClick() {
    console.log("Removing event listener");
    const item = document.getElementById("people").children.namedItem("staszek");
    item.removeEventListener('click', onClick);
}