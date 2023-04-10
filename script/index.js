// let score = 0;

// const config = {
//     step: 0,
//     maxStep: 6,
//     sizeCell: 16,
//     sizeBerry: 16 / 4
// }

// const snake = {
//     x: 0,
//     y: 0,
//     dx: config.sizeCell,
//     dy: 0,
//     tail: [],
//     maxTail: 3
// }

// let berry = {
//     x: 0,
//     y: 0
// }


// let canvas = document.querySelector('#game__canvas');
// let context = canvas.getContext('2d');
// let scoreBlock = document.querySelector('.game__score .game__count');
// let scoreBlockBest = document.querySelector('.game__score .game__count-best');

// if(!localStorage.getItem('bestScore')){
//     localStorage.setItem('bestScore', JSON.stringify(0))
// }

// drawBestResult(localStorage.getItem('bestScore'))
// drawScore()

// function gameLoop () {

//     requestAnimationFrame(gameLoop);
//     if (++config.step < config.maxStep) {
//         return
//     }
//     config.step = 0;
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     drawBerry();
//     drawSnake();
// }
// requestAnimationFrame(gameLoop);


// function drawSnake () {
//     snake.x += snake.dx;
//     snake.y += snake.dy;
//     collisionBorder();

//     snake.tail.unshift({x: snake.x, y: snake.y});

//     if (snake.tail.length > snake.maxTail) {
//         snake.tail.pop();
//     }

//     snake.tail.forEach((el, index) => {
//         if (index == 0) {
//             context.fillStyle = '#FA0556';
//         } else {
//             context.fillStyle = '#A00034';
//         }
//         context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

//         if (el.x === berry.x && el.y === berry.y) {
//             snake.maxTail++;
//             increaseScore();
//             randomPositionBerry();
//         }

//         for(let i = index + 1; i < snake.tail.length; i++) {
//             if (el.x == snake.tail[i].x && el.y == snake.tail[i].y) {
//                 refreshGame();
//             }
//         }
//     })

// }

// function collisionBorder() {
//     if (snake.x < 0) {
//         snake.x = canvas.width - config.sizeCell;
//     } else if (snake.x >= canvas.width) {
//         snake.x = 0;
//     }

//     if (snake.y < 0) {
//         snake.y = canvas.height - config.sizeCell;
//     } else if (snake.y >= canvas.height) {
//         snake.y = 0;
//     }
// }

// function refreshGame () {
//     if(score > localStorage.getItem('bestScore')){
//         localStorage.setItem('bestScore', JSON.stringify(score))
//     }
//     score = 0;
//     drawScore();
//     snake.tail = [];
//     snake.maxTail = 3;

//     drawBestResult(localStorage.getItem('bestScore'))
    
 
//     randomPositionBerry();
// }

// function drawBerry () {
//     context.beginPath();
//     context.fillStyle = '#A00034';
//     context.arc(berry.x + (config.sizeCell / 2), berry.y + (config.sizeCell / 2), config.sizeBerry, 0, 2 * Math.PI);
//     context.fill();
// }


// function randomPositionBerry () {
//     berry.x = getRandomNumber(0, canvas.width / config.sizeCell) * config.sizeCell;
//     berry.y = getRandomNumber(0, canvas.height / config.sizeCell) * config.sizeCell;
// }

// function increaseScore () {
//     score +=  1;
    
//     drawScore();
// }

// function drawScore () {
//     scoreBlock.innerHTML = score;
// }

// function drawBestResult (obj) {
//         scoreBlockBest.innerHTML = `Best: ${obj}`
// }

// function getRandomNumber (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// // Управление

// document.addEventListener('keydown', (e) => {
//     if (e.code == 'KeyW') {
//         snake.dy = -config.sizeCell;
//         snake.dx = 0;
//     } else if (e.code == 'KeyA') {
//         snake.dx = -config.sizeCell;
//         snake.dy = 0;
//     } else if (e.code == 'KeyS') {
//         snake.dy = config.sizeCell;
//         snake.dx = 0;
//     } else if (e.code == 'KeyD') {
//         snake.dx = config.sizeCell;
//         snake.dy = 0;
//     }
// })

// document.querySelector('.button__bottom').addEventListener('click', (e) => {
//     snake.dy = config.sizeCell;
//         snake.dx = 0;
// })

// document.querySelector('.button__top').addEventListener('click', (e) => {
//     snake.dy = -config.sizeCell;
//         snake.dx = 0;
// })

// document.querySelector('.button__right').addEventListener('click', (e) => {
//     snake.dx = config.sizeCell;
//         snake.dy = 0;
// })

// document.querySelector('.button__left').addEventListener('click', (e) => {
//     snake.dx = -config.sizeCell;
//         snake.dy = 0;
// })