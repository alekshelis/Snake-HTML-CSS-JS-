export default class Score {
    constructor(score = 0) {

        this.scoreBlock = document.querySelector('.game__score .game__count');
        this.scoreBlockBest = document.querySelector('.game__score .game__count-best');
        
        this.score = score;
        this.draw();
    }

    increaseScore() {
        this.score++;
        this.draw();
    }

    changeBestScore(){
        if(this.score > localStorage.getItem('bestScore')){
            localStorage.setItem('bestScore', JSON.stringify(this.score))
            this.draw()
        }         
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
        this.scoreBlockBest.innerHTML = `Best: ${localStorage.getItem('bestScore')}`
    }
}