import Config from "./config.js";

export default class Snake {

    constructor () {

        this.config = new Config();
        this.x = 0;
        this.y = 0;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tail = [];
        this.maxTail = 3;

        this.control();
    }

    update(berry, score, canvas) {
        this.x += this.dx;
        this.y += this.dy;
        
        if (this.x < 0) {
            this.x = canvas.element.width - this.config.sizeCell;
        } else if (this.x >= canvas.element.width) {
            this.x = 0;
        }
    
        if (this.y < 0) {
            this.y = canvas.element.height - this.config.sizeCell;
        } else if (this.y >= canvas.element.height) {
            this.y = 0;
        }

        this.tail.unshift({x: this.x, y: this.y});

        if (this.tail.length > this.maxTail) {
            this.tail.pop();
        }

        this.tail.forEach((el, index) => {
            

            if (el.x === berry.x && el.y === berry.y) {
                this.maxTail++;
                score.increaseScore();
                berry.randomPosition();
            }

            for(let i = index + 1; i < this.tail.length; i++) {
                if (el.x == this.tail[i].x && el.y == this.tail[i].y) {
                    this.death();
                    score.changeBestScore()
                    score.setToZero();
                    berry.randomPosition();
                }
            }
        })
    }

    draw(context) {
        this.tail.forEach((el, index) => {
            if (index == 0) {
                context.fillStyle = '#29B918';
            } else {
                context.fillStyle = '#70ED61';
            }
            context.fillRect(el.x, el.y, this.config.sizeCell, this.config.sizeCell);
        })
    }

    death() {
        this.x = 160;
        this.y = 160;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tail = [];
        this.maxTail = 3;
    }

    control() {

        document.addEventListener('keydown', (e) => {
            if (e.code == 'KeyW') {
                this.dy = -this.config.sizeCell;
                this.dx = 0;
            } else if (e.code == 'KeyA') {
                this.dx = -this.config.sizeCell;
                this.dy = 0;
            } else if (e.code == 'KeyS') {
                this.dy = this.config.sizeCell;
                this.dx = 0;
            } else if (e.code == 'KeyD') {
                this.dx = this.config.sizeCell;
                this.dy = 0;
            }
        })

        
        document.querySelector('.button__bottom').addEventListener('click', (e) => {
            this.dy = this.config.sizeCell;
            this.dx = 0;
        })
        
        document.querySelector('.button__top').addEventListener('click', (e) => {
            this.dy = -this.config.sizeCell;
            this.dx = 0;
        })
        
        document.querySelector('.button__right').addEventListener('click', (e) => {
            this.dx = this.config.sizeCell;
            this.dy = 0;
        })
        
        document.querySelector('.button__left').addEventListener('click', (e) => {
            this.dx = -this.config.sizeCell;
            this.dy = 0;
        })
    }
}