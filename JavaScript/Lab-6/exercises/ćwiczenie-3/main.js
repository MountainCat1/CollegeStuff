const changeColorBtn = document.getElementById('color-btn');
let color = '#FF5511'
document.body.addEventListener('click', function (e){
    if(e.target.parentNode.id !== 'board')
        return;

    e.target.style.backgroundColor = color;
});
changeColorBtn.addEventListener('click', function(e){
    var colorSelector = document.querySelector('input[type="color"]');
    color = colorSelector.value;
});

/**
 * Uzupełnij kod obu funkcji obługi zdarzeń w taki sposób aby:
 * - kliknięcie w dowolny element div wewnątrz div klasy "board" zmieniało kolor na 'color' i umieszczało wewnątrz
 *   współrzedne klinkiętego kafelka wg wzoru
 *   0,0    0,1     0,2
 *   1,0    1,1     1,2
 *   2,0    2,1     2,2
 * - kliknięcie na przycisk w elemencie`article`  powinno pobrać do zmiennek 'color' wartość z elementu 'input' i w tym kolorze ustawiać kolor tła przycisku
 * - kliknięcie w dowolne inne  miejsce elementu 'body' nie powinno nic zmieniać
 * Uwaga!
 * nie można zmieniać pliku board.html
 */