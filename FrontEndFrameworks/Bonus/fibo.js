// ========== consts ==========

// Size of a board to draw
const boardSize = 110;
// Amount of numbers of Fibonacci sequence to be presented
const sequenceLength = 10;
// Center of a spiral to be presented
const center = [15, 0];

// ========== Code to run ==========

// Create array of numbers in Fibonacci sequence
let fiboArray = Fibo(sequenceLength)

// Get all characters to be drawn in console that present Fibonacci spiral
let draws = FibonacciDraw(fiboArray, center);

// Output to console board with characters presenting Fibonacci spiral
DrawBoard(draws);

// ========== Functions ==========

// Draws Fibonacci Spiral in console using characters
function FibonacciDraw(fibonacciArray, center) {
    let i;
    const markedPositions = new Object();

    let direction = 1;
    const point = [0, -2];

    // Draw first two iterations manually
    DrawSquare(center[0] + 1, center[1], 1, markedPositions, 1)
    DrawSquare(center[0], + center[1], 1, markedPositions, 2)


    for (i = 1; i < fibonacciArray.length; i++) {
        DrawSquare(point[0] + center[0], point[1] + center[1], fibonacciArray[i], markedPositions, (i + 2) % 10)

        // Depending on a direction pick new position for a next square to be drawn
        switch (direction) {
            case 1:
                point[0] += fibonacciArray[i]
                break;
            case 2:
                point[1] +=  fibonacciArray[i]
                point[0] -=  fibonacciArray[i - 1]
                break;
            case 3:
                point[0] -= fibonacciArray[i + 1]
                point[1] -= fibonacciArray[i - 1]
                break;
            case 4:
                point[1] -= fibonacciArray[i + 1]
                break;
        }

        // Change direction
        direction++;
        // If direction is greater than 4 loop it back to 1
        if(direction > 4)
            direction = 1
    }

    return markedPositions
}

// Draws a square in an array made out of parameter "character" so that
// Bottom left corner is in (x, y) position
function DrawSquare(x, y, size, array, character) {
    let _x;
    let _y;
    const allowOverwriting = false;

    // Loop through all positions inside a square
    for (_x = x; _x < x + size; _x++)
        for (_y = y; _y < y + size; _y++) {
            // Add character to be drawn to the array
            if (allowOverwriting || array[[_x, -_y]] === undefined)
                array[[_x, -_y]] = character
            else{
                console.log(`Overwrite on ${[[_x, _y]]}`)
            }
        }
}

// Returns array containing values of Fibonacci sequence
function Fibo(n) {
    let i;
    const fib = [0, 1];
    const array = [];

    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        array.push(fib[i])
    }

    return array;
}

// Draws all character in parameter array and fills all gaps with "_" character
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