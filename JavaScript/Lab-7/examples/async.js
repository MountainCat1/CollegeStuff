/**
 * Słowa kluczowe async i await upraszczają wywoływanie funkcji asynchronicznych.
 * Słowo async przed funkcją oznacza, że funkcja zwraca Promise.
 * Słowo await oznacza czekanie na wykonanie funkcji asynchronicznej, czyli tworzy kod synchroniczny.
 * Słowo await może wystąpić tylko w funkcji asynchronicznej. 
 */

const delay = function(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function delayedAction(time, action){
    console.log("Promise 2: Before await");
    try{
        await delay(time);
        return action();
    }catch{
        throw "Promise 2 (reject): Failed"; 
    }
}
console.log("First call of async delayedAction");
console.log("Promise 2: Before asynchronic call");
delayedAction(1000, () => {console.log("Delayed action")})
.catch(error => console.log("Promise 2 (catch): Error"));
console.log("Promise 2: After asynchronic call");
console.log("Second call of async delayedAction");
delayedAction(1000, () => 10)
.then(value => console.log("Promise 2 (then): Resolved with " + value))
.catch(error => console.log("Promise 2 (catch): Reject with " + error));