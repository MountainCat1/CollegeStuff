const boardSize = 30;

let fiboArray = Fibo(9)
let dots = FiboDraw(fiboArray);

DrawBoard(dots);

function FiboDraw(fiboArray) {
    var i;
    var dots = new Object();

    // dots[[0,0]] = "X"

    var direction = 1;
    var point = [0, -2]

    DrawSquare(0, 0, 1, dots, 1)
    DrawSquare(1, 0, 1, dots, 1)

    for (i = 1; i < fiboArray.length; i++) {
        DrawSquare(point[0], point[1], fiboArray[i], dots, i)

        switch (direction) {
            case 1:
                point[0] += fiboArray[i]
                break;
            case 2:
                point[1] +=  fiboArray[i]
                point[0] -=  fiboArray[i - 1]
                break;
            case 3:
                point[0] -= fiboArray[i + 1]
                point[1] -= fiboArray[i - 1]
                break;
            case 4:

                point[1] -= fiboArray[i + 1]
                break;
        }

        direction++;
        if(direction > 4)
            direction = 1

        console.log(point)
    }

    return dots
}

function DrawSquare(x, y, size, array, character) {
    var _x;
    var _y;
    var allowOverwriting = false;

    for (_x = x; _x < x + size; _x++)
        for (_y = y; _y < y + size; _y++) {
            if (allowOverwriting || array[[_x, -_y]] === undefined)
                array[[_x, -_y]] = character
            else{
                console.log(`Overwrite on ${[[_x, _y]]}`)
            }
        }
}


function Fibo(n) {
    var i;
    var fib = [0, 1]; // Initialize array!
    var array = []

    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        array.push(fib[i])
    }

    return array;
}

function DrawBoard(draws) {
    let s = "";

    for (let y = -boardSize / 2; y < boardSize / 2; y++) {
        for (let x = -boardSize / 2; x < boardSize / 2; x++) {
            if (draws[[x, y]] === undefined) {
                s += '_'
            } else {
                s += draws[[x, y]]
            }
        }
        s += '\n'
    }

    console.log(s)
}