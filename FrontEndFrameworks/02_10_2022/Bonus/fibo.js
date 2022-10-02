const boardSize = 20;

let draws = new Object();

DrawBoard(draws);

function DrawBoard(draws){
    let s;

    for (let y = -boardSize / 2; y < boardSize / 2; y++) {
        for (let x = -boardSize / 2; x < boardSize / 2; x++) {
            if(draws[[x, y]] === undefined){
                s += '_'
            }else{
                s += '@'
            }
        }
        s += '\n'
    }

    console.log(s)
}