export class Ball{
    constructor(canvas, x, y, radius, dx , dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "blue";
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
    }

    changeDirection(){
        if (this.x + this.radius > this.canvas.width
            || this.y + this.radius > this.canvas.height
            || this.x - this.radius < 0
            || this.y - this.radius < 0
        ){
            this.dy = -this.dy;
        }
    }
}
