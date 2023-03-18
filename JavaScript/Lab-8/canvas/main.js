import { Ball } from "./ball.js";
const canvas = document.getElementById("canvas");
const buttonStop = document.querySelector('button');
let ctx;
let ball;
let raf;

function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
/***
 * Inicjacja sceny
 */
function init(){
    ctx = canvas.getContext("2d");
    ball = new Ball(canvas,200, 40, 40, 0, 2);
    buttonStop.onclick = toggleAnimation;
    raf = window.requestAnimationFrame(draw);
}

/***
 * Funkcja wykonywana w pętli
 */
function draw(){
    clear();                                        //czyszczenie sceny
    ball.move();                                    //przesuniecie obiektu
    ball.draw();                                    //odrysowanie obiektu
    ball.changeDirection();                         //ewentualna zmiana kierunku
    raf = window.requestAnimationFrame(draw);       //ponowne wywołanie funkcji draw przy kolejnym oodrysowaniu okna przeglądarki
}

/***
 * Funkcja obłsugi przycisku zatrzymania i wznowienia animacji
 * @param e
 */
function toggleAnimation(e){
    if (e.currentTarget.innerText === "Stop"){
        e.currentTarget.innerText = "Resume";
        window.cancelAnimationFrame(raf);
    } else {
        e.currentTarget.innerText = "Stop";
        raf = window.requestAnimationFrame(draw);
    }
}

init();

